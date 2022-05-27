import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";
import logging from "./logging";

const NAMESPACE = "Validate";
export const validate = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params
      });
      logging.info(NAMESPACE, "Validate is Successful");
      return next();
    } catch (error) {
      logging.error(NAMESPACE, "Validate is Failed");
      return res.status(400).json(error);
    }
  };
};