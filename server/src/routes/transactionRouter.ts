import express from 'express'
import TransactionModel from '../models/TransactionModel';
import transactionController from '../controllers/transactionController';
const router = express.Router();


router.get('/', transactionController.getAllTransactions)


export default router