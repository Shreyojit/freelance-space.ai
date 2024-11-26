import prisma from "../prismaClient.js";
import createError from "../utils/createError.js";

export const createConversation = async (req, res, next) => {
  // Ensure that the ID is a string, either by concatenating as string or converting to string
  const conversationId = (req.isSeller ? (req.userId) + (req.body.to) : req.body.to + req.userId);
  
  try {
    const newConversation = await prisma.conversation.create({
      data: {
        id: conversationId,  // This should now be a string (no issue with this)
        sellerId: req.isSeller ? Number(req.userId) : Number(req.body.to), // Ensure sellerId is an integer
        buyerId: req.isSeller ? Number(req.body.to) : Number(req.userId),  // Ensure buyerId is an integer
        readBySeller: req.isSeller,
        readByBuyer: !req.isSeller,
      },
    });

    res.status(201).send(newConversation);
  } catch (err) {
    next(err);
  }
};


export const updateConversation = async (req, res, next) => {
  try {
    const updatedConversation = await prisma.conversation.update({
      where: { id: req.params.id },
      data: {
        ...(req.isSeller ? { readBySeller: true } : { readByBuyer: true }),
      },
    });

    res.status(200).send(updatedConversation);
  } catch (err) {
    next(err);
  }
};

export const getSingleConversation = async (req, res, next) => {
  try {
    // Log the type and value of req.params.id
    console.log("Received ID (type and value):", typeof req.params.id, req.params.id);

    // Convert the ID from string to integer
    const conversationId = parseInt(req.params.id, 10);

    // Log the type and value after conversion
    console.log("Parsed ID (type and value):", typeof conversationId, conversationId);

    // Check if the conversion is successful
    if (isNaN(conversationId)) {
      console.log("Invalid ID provided.");
      return next(createError(400, "Invalid conversation ID!")); // Respond with a 400 error for invalid IDs
    }

    // Query the database
    const conversation = await prisma.conversation.findUnique({
      where: { id: conversationId },
      include: {
        messages: true, // Include related messages if needed
      },
    });

    // Handle "not found" scenario
    if (!conversation) {
      console.log("Conversation not found for ID:", conversationId);
      return next(createError(404, "Conversation not found!"));
    }

    // Log the fetched conversation
    console.log("Fetched Conversation:", conversation);

    // Send the conversation data as a response
    res.status(200).json(conversation);
  } catch (err) {
    // Log the error
    console.error("Error occurred:", err);
    next(err);
  }
};


export const getConversations = async (req, res, next) => {
  try {
    const conversations = await prisma.conversation.findMany({
      where: req.isSeller ? { sellerId: req.userId } : { buyerId: req.userId },
      orderBy: { updatedAt: "desc" },
    });

    res.status(200).send(conversations);
  } catch (err) {
    next(err);
  }
};
