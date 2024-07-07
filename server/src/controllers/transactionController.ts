import TransactionModel from "../models/TransactionModel";

const getAllTransactions = async (req: any, res: any) => {
   try {
      const data = await TransactionModel.find();
      res.status(200).send({ status: 200, data: data, msg: "Data retrieval successful.", error: "" });
   } catch (error) {
      console.log(error)
      res.status(500).send({ status: 500, data: "", msg: "", error: error });
   }
}

export default { getAllTransactions }