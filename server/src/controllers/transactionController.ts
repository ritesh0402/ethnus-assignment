import TransactionModel from "../models/TransactionModel";

const getAllTransactions = async (req: any, res: any) => {
   try {
      const { search, page = 1, perPage = 10 } = req.query
      const data = await TransactionModel.find(); // TODO change find query
      res.status(200).send({ status: 200, data: data, msg: "Data retrieval successful.", error: "" });
   } catch (error) {
      console.log(error)
      res.status(500).send({ status: 500, data: "", msg: "Error searching for transactions.", error: error });
   }
}

export default { getAllTransactions }