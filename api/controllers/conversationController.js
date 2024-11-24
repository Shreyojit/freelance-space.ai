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
    const conversation = await prisma.conversation.findUnique({
      where: { id: req.params.id },
    });

    if (!conversation) return next(createError(404, "Not found!"));

    res.status(200).send(conversation);
  } catch (err) {
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
