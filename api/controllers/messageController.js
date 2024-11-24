import prisma from "../prismaClient.js";
import createError from "../utils/createError.js";

export const createMessage = async (req, res, next) => {
  const { conversationId, desc } = req.body;

  try {
    const newMessage = await prisma.message.create({
      data: {
        conversationId,
        userId: req.userId,
        desc,
      },
    });

    // Update conversation fields: read flags and last message
    await prisma.conversation.update({
      where: { id: conversationId },
      data: {
        readBySeller: req.isSeller,
        readByBuyer: !req.isSeller,
        lastMessage: desc,
      },
    });

    res.status(201).send(newMessage);
  } catch (err) {
    next(err);
  }
};

export const getMessages = async (req, res, next) => {
  try {
    const messages = await prisma.message.findMany({
      where: { conversationId: req.params.id },
      orderBy: { createdAt: "asc" },
    });

    res.status(200).send(messages);
  } catch (err) {
    next(err);
  }
};
