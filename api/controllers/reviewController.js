import prisma from "../prismaClient.js";
import createError from "../utils/createError.js"



export const createReview = async (req, res, next) => {
    if (req.isSeller)
      return next(createError(403, "Sellers can't create a review!"));
  
    const { gigId, desc, star } = req.body;
  
    try {
      // Check if the user has already reviewed this gig
     // Check if the user has already reviewed this gig
    const existingReview = await prisma.review.findFirst({
        where: {
          gigId: gigId,
          userId: req.userId,
        },
      });
  
      if (existingReview)
        return next(
          createError(403, "You have already created a review for this gig!")
        );
  
      // TODO: check if the user purchased the gig.
  
      // Create the new review
      const newReview = await prisma.review.create({
        data: {
          userId: req.userId,
          gigId,
          desc,
          star,
        },
      });
  
      // Update the Gig's totalStars and starNumber
      await prisma.gig.update({
        where: { id: gigId },
        data: {
          totalStars: {
            increment: star, // Increment the totalStars by the review's star value
          },
          starNumber: {
            increment: 1, // Increment the number of reviews
          },
        },
      });
  
      res.status(201).send(newReview);
    } catch (err) {
      next(err);
    }
  };
  
  export const getReviews = async (req, res, next) => {
    const { gigId } = req.params;
    try {
      // Fetch all reviews for the gig
      const reviews = await prisma.review.findMany({
        where: {
          gigId: Number(gigId), // Ensure gigId is treated as a number
        },
      });
  
      res.status(200).send(reviews);
    } catch (err) {
      next(err);
    }
  };
  
  export const deleteReview = async (req, res, next) => {
    const { reviewId } = req.params;
    try {
      // Delete the review
      const deletedReview = await prisma.review.delete({
        where: {
          id: Number(reviewId),
        },
      });
  
      res.status(200).send(deletedReview);
    } catch (err) {
      next(err);
    }
  };