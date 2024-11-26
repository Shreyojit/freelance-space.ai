import prisma from "../prismaClient.js";
import createError from "../utils/createError.js";

export const createMessage = async (req, res, next) => {
  const { conversationId, desc } = req.body;

  // Convert the conversationId to an integer
  const conversationIdInt = parseInt(conversationId, 10);

  // Log the incoming request data after converting the conversationId to an integer
  console.log("Received message data:", { conversationId: conversationIdInt, desc });

  try {
    // Create the new message with the corrected conversationId type
    const newMessage = await prisma.message.create({
      data: {
        conversationId: conversationIdInt, // Pass as integer
        userId: req.userId,
        desc,
      },
    });

    // Log the created message
    console.log("New message created:", newMessage);

    // Update conversation fields
    const updatedConversation = await prisma.conversation.update({
      where: { id: conversationIdInt }, // Pass as integer
      data: {
        readBySeller: req.isSeller,
        readByBuyer: !req.isSeller,
        lastMessage: desc,
      },
    });

    // Log the updated conversation data
    console.log("Conversation updated:", updatedConversation);

    // Respond with the new message
    res.status(201).send(newMessage);
  } catch (err) {
    // Log the error if there's any
    console.error("Error occurred:", err);
    
    // Pass the error to the next middleware
    next(err);
  }
};


export const getMessages = async (req, res, next) => {
  try {
    const messages = await prisma.message.findMany({
      where: { conversationId: parseInt(req.params.id, 10) },

      orderBy: { createdAt: "asc" },
    });

    res.status(200).send(messages);
  } catch (err) {
    next(err);
  }
};
