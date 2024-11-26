import prisma from "../prismaClient.js";
import createError from "../utils/createError.js"


export const createGig = async(req,res,next) =>{
    if(!req.isSeller) return next(createError(403,"Only sellers can createa Gig!"))

      try{
       const savedGig = await prisma.gig.create({
        data:{
            userId: req.userId,
            ...req.body,
            images: req.body.images || [],
            features: req.body.features || [],
        }
       });
       res.status(201).json(savedGig)
      }catch(err){
        next(err);
      }
}

export const deleteGig = async(req,res,next) => {

    try{
        const gig = await prisma.gig.findUnique({where: {id:parseInt(req.params.id)}})

        if(!gig || gig.userId !== req.userId)
            return next(createError(403,"You can delete only your gig!"))
    
        await prisma.gig.delete({where: {id: parseInt(req.params.id)}});
        res.status(200).send("Gig has been deleted!")
    }catch(err){
        next(err);
    }

}

export const getGig = async (req, res, next) => {
    try {
      const gig = await prisma.gig.findUnique({ where: { id: parseInt(req.params.id) } });
      if (!gig) return next(createError(404, "Gig not found!"));
      res.status(200).send(gig);
    } catch (err) {
      next(err);
    }
  };

  export const getGigs = async (req, res, next) => {
    const q = req.query;
    const filters = {
      ...(q.userId && { userId: parseInt(q.userId) }),
      ...(q.cat && { cat: q.cat }),
      ...((q.min || q.max) && {
        price: {
          ...(q.min && { gt: parseInt(q.min) }),
          ...(q.max && { lt: parseInt(q.max) }),
        },
      }),
      ...(q.search && { title: { contains: q.search, mode: "insensitive" } }),
    };
  
    try {
      const gigs = await prisma.gig.findMany({
        where: filters,
        orderBy: { [q.sort || "createdAt"]: "desc" },
      });
      res.status(200).send(gigs);
    } catch (err) {
      next(err);
    }
  };
  
