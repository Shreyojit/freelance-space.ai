import prisma from "../prismaClient.js";
import createError from "../utils/createError.js";

export const deleteUser = async (req,res,next)=>{
    try{
        const user = await prisma.user.findUnique({
            where: {id: parseInt(req.params.id)},

        });

        if(!user) return next(createError(404,"User not found!"));
        if(req.userId !== user.id){
            return next(createError(403, "You can delete only your own account!"));
        }

        await prisma.user.delete({where:{id:user.id}}),
        res.status(200).send("User scussfully deleted!");

    }catch(err){
        next(err);
    }
}

export const getUser = async (req, res, next) => {
    try {
      const user = await prisma.user.findUnique({
        where: { id: parseInt(req.params.id) },
      });
  
      if (!user) return next(createError(404, "User not found!"));
  
      // Exclude the password from the response
      const { password, ...safeUser } = user;
  
      res.status(200).json(safeUser);
    } catch (err) {
      next(err);
    }
  };
  