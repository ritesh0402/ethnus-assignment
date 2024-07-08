import TransactionModel from "../models/TransactionModel";

const getAllTransactions = async (req: any, res: any) => {
   try {
      const { search, page = 1, perPage = 10 } = req.query
      let query = {};

      if (search) {
         query = {
            $or: [
               { title: { $regex: search, $options: 'i' } },
               { description: { $regex: search, $options: 'i' } },
               { price: parseFloat(search) || 0 }
            ]
         };
      }

      const total = await TransactionModel.countDocuments(query);

      const data = await TransactionModel.find(query)
         .skip((page - 1) * perPage)
         .limit(parseInt(perPage));

      res.status(200).send({ status: 200, data: { data, total: total }, msg: "Data retrieval successful.", error: "" });
   } catch (error) {
      console.log(error)
      res.status(500).send({ status: 500, data: "", msg: "Error searching for transactions.", error: error });
   }
}

export default { getAllTransactions }