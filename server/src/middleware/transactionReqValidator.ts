import { NextFunction } from "express";
import { query, validationResult } from "express-validator";


const getTransactionReqValidator = [
   query('search', "search query invalid").exists().isString().escape(),
   query('page', "page query invalid").exists().notEmpty().isString().escape(),
   query('perPage', "perPage query invalid").exists().notEmpty().isString().escape(),
   (req: any, res: any, next: NextFunction) => {
      const err = validationResult(req);
      if (err) {
         res.status(400).send({ status: 400, data: "", msg: "Invalid query", error: err })
      }
      next();
   }
]

export default { getTransactionReqValidator }