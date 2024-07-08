import { NextFunction } from "express";
import { query, validationResult } from "express-validator";


const getStatisticsReqValidator = [
   query('month', "search query invalid").exists().notEmpty().isNumeric().escape(),
   (req: any, res: any, next: NextFunction) => {
      const err = validationResult(req);
      if (!err.isEmpty()) {
         return res.status(400).send({ status: 400, data: "", msg: "Invalid query", error: err })
      }
      next();
   }
]

const getBarchartReqValidator = [
   query('month', "search query invalid").exists().notEmpty().isNumeric().escape(),
   (req: any, res: any, next: NextFunction) => {
      const err = validationResult(req);
      if (!err.isEmpty()) {
         return res.status(400).send({ status: 400, data: "", msg: "Invalid query", error: err })
      }
      next();
   }
]

const getPiechartReqValidator = [
   query('month', "search query invalid").exists().notEmpty().isNumeric().escape(),
   (req: any, res: any, next: NextFunction) => {
      const err = validationResult(req);
      if (!err.isEmpty()) {
         return res.status(400).send({ status: 400, data: "", msg: "Invalid query", error: err })
      }
      next();
   }
]

const getReportReqValidator = [
   query('month', "search query invalid").exists().notEmpty().isNumeric().escape(),
   (req: any, res: any, next: NextFunction) => {
      const err = validationResult(req);
      if (!err.isEmpty()) {
         return res.status(400).send({ status: 400, data: "", msg: "Invalid query", error: err })
      }
      next();
   }
]

export default { getStatisticsReqValidator, getBarchartReqValidator, getPiechartReqValidator, getReportReqValidator }