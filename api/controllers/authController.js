import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import createError from "../utils/createError.js";
import prisma from "../prismaClient.js";

export const register = async(req,res,next) => {
    try{
    const hashPassword = bcrypt.hashSync(req.body.password,10);
    const newUser = await prisma.user.create({
        data: {...req.body,password:hashPassword},
    });
    res.status(201).json({ message: "User has been created.", user: newUser })
    } catch(err){
        next(err);
    }
}

export const login = async(req,res,next) => {
    try{
        const user = await prisma.user.findUnique({
            where: {username: req.body.username},
        });
        if(!user) return next(createError(404,"User not found!"));

        const isCorrect = bcrypt.compareSync(req.body.password,user.password);

        if(!isCorrect) return next(createError(400,"Invalid credentials!"));

        const token = jwt.sign({ id: user.id, isSeller: user.isSeller }, process.env.JWT_TOKEN)

        const { password, ...userInfo } = user;

    res.cookie("accessToken", token, { httpOnly: true }).status(200).json(userInfo);

    }catch(err){
        next(err);
    }
}

export const logout = async (req, res) => {
    res
      .clearCookie("accessToken", {
        sameSite: "none",
        secure: true,
      })
      .status(200)
      .send("User has been logged out.");
  };