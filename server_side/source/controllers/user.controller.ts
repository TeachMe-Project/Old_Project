import {PrismaClient} from "@prisma/client";
import {Request, Response} from "express";
import logging from "../utils/logging";
import User from '../types/types'
const prisma = new PrismaClient();

const NAMESPACE = 'User'

const getUser = async (req: Request, res: Response) => {
  await prisma.user.findMany({})
    .then((result)=>{
      logging.info(NAMESPACE, 'Retrieved Users ', result);

      return res.status(200).json({
        result
      });
    })
    .catch((error) =>{
      logging.error(NAMESPACE, error.message, error);

      return res.status(500).json({
        message: error.message,
        error
      });
    });
}

const createUser = async (req: Request, res: Response) => {

  logging.info(NAMESPACE, req.body);
  const data: User = {
    userId: req.body.userId,
    username:req.body.username,
    password: req.body.password
  }

  await prisma.user.create({data})
    .then((result)=>{
      logging.info(NAMESPACE, 'User Created Successfully', result);

      return res.status(200).json({
        result
      });
    })
    .catch((error) =>{
      logging.error(NAMESPACE, error.message, error);

      return res.status(500).json({
        message: error.message,
        error
      });
    });
}

export default {getUser, createUser};