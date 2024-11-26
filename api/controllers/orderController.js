import Stripe from "stripe";
import createError from "../utils/createError.js";
import prisma from "../prismaClient.js";

// Initialize Stripe with your Secret Key (stored in .env for security)
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);


export const intent = async (req, res, next) => {
  try {
    const gig = await prisma.gig.findUnique({
      where: { id: parseInt(req.params.id) },
    });

    if (!gig) return next(createError(404, "Gig not Found!"));

    // Create the PaymentIntent with a description as per Indian export regulations
    const paymentIntent = await stripe.paymentIntents.create({
      amount: gig.price * 100,  // Amount in cents
      currency: "usd",
      description: `Payment for Gig: ${gig.title}`, // Add description
      automatic_payment_methods: { enabled: true },
      
    });

    // Create the order entry in the database
    const order = await prisma.order.create({
      data: {
        gigId: gig.id,
        img: gig.cover,
        title: gig.title,
        buyerId: req.userId,
        sellerId: gig.userId,
        price: gig.price,
        paymentIntent: paymentIntent.id,
      },
    });

    // Return the order and clientSecret to the frontend
    res.status(200).json({
        order: order, // Send the created order details
        clientSecret: paymentIntent.client_secret, // Send the client secret for the payment
      });
  } catch (err) {
    next(err);
  }
};

// Get All Orders
export const getOrders = async (req, res, next) => {
  try {
    const orders = await prisma.order.findMany({
      where: {
        ...(req.isSeller
          ? { sellerId: req.userId }
          : { buyerId: req.userId }),
        isCompleted: true,
      },
      include: { gig: true },
    });

    res.status(200).json(orders);
  } catch (err) {
    next(err);
  }
};

// Confirm Order Completion
export const confirm = async (req, res, next) => {
  try {
    const order = await prisma.order.updateMany({
      where: { paymentIntent: req.body.payment_intent },
      data: { isCompleted: true },
    });

    if (!order.count)
      return next(createError(404, "Order not found or already confirmed"));

    res.status(200).send("Order has been confirmed.");
  } catch (err) {
    next(err);
  }
};
