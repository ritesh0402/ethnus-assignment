import TransactionModel from "../models/TransactionModel";
import axios from 'axios'

const getStatistics = async (req: any, res: any) => {
   try {
      const specifiedMonth: '0' = req.query.month;
      const data = await TransactionModel.aggregate([
         {
            $match: {
               $expr: {
                  $eq: [{ $month: "$dateOfSale" }, parseInt(specifiedMonth, 10)]
               }
            }
         },
         {
            $group: {
               _id: null,
               totalSales: { $sum: { $cond: ["$sold", "$price", 0] } },
               totalItemsSold: { $sum: { $cond: ["$sold", 1, 0] } },
               totalItemsNotSold: { $sum: { $cond: ["$sold", 0, 1] } }
            }
         }
      ])
      return res.status(200).send({ status: 200, data, msg: "Successful", error: "" });
   } catch (error) {
      res.status(500).send({ status: 500, data: "", msg: "Error fetching statistics.", error: error });
   }
}

const getBarchart = async (req: any, res: any) => {
   try {
      const specifiedMonth: '0' = req.query.month;

      const ranges = [
         { range: '0-100', min: 0, max: 100 },
         { range: '101-200', min: 101, max: 200 },
         { range: '201-300', min: 201, max: 300 },
         { range: '301-400', min: 301, max: 400 },
         { range: '401-500', min: 401, max: 500 },
         { range: '501-600', min: 501, max: 600 },
         { range: '601-700', min: 601, max: 700 },
         { range: '701-800', min: 701, max: 800 },
         { range: '801-900', min: 801, max: 900 },
         { range: '901-above', min: 901, max: Infinity }
      ];
      const data = await Promise.all(
         ranges.map(async ({ range, min, max }) => {
            try {
               const count = await TransactionModel.countDocuments({
                  price: { $gte: min, $lte: max },
                  dateOfSale: {
                     $eq: [{ $month: "$dateOfSale" }, parseInt(specifiedMonth, 10)]
                  }
               });
               return { range: max, value: count };
            } catch (error) {
               console.log(error)
            }

         })
      );
      return res.status(200).send({ status: 200, data, msg: "Successful", error: "" });
   } catch (error) {

      res.status(500).send({ status: 500, data: "", msg: "Error fetching barchart.", error: error });
   }
}

const getPiechart = async (req: any, res: any) => {
   try {
      const specifiedMonth: '0' = req.query.month;
      const data = await TransactionModel.aggregate([
         {
            $match: {
               $expr: {
                  $eq: [{ $month: "$dateOfSale" }, parseInt(specifiedMonth, 10)]
               }
            }
         },
         {
            $group: {
               _id: "$category",
               count: { $sum: 1 }
            }
         },
         {
            $project: {
               _id: 0,
               id: "$_id",
               value: "$count",
               label: "$_id"
            }
         }
      ])
      return res.status(200).send({ status: 200, data, msg: "Successful", error: "" });
   } catch (error) {
      console.log(error)
      res.status(500).send({ status: 500, data: "", msg: "Error fetching piechart.", error: error });
   }
}

const getReport = async (req: any, res: any) => {
   try {
      const specifiedMonth: '0' = req.query.month;

      const [barChartRes, pieChartRes, salesDataRes] = await Promise.all([
         axios.get(`http://localhost:5000/api/stats/barchart?month=${specifiedMonth}`),
         axios.get(`http://localhost:5000/api/stats/piechart?month=${specifiedMonth}`),
         axios.get(`http://localhost:5000/api/stats?month=${specifiedMonth}`)
      ]);

      const barChartData = barChartRes.data.data;
      const pieChartData = pieChartRes.data.data;
      const salesData = salesDataRes.data.data;

      const combinedData = {
         barChartData,
         pieChartData,
         salesData
      };
      res.status(200).send({ status: 200, data: combinedData, msg: "Success", error: "" });
   } catch (error) {
      res.status(500).send({ status: 500, data: "", msg: "Error fetching report.", error: error });
   }
}

export default { getStatistics, getBarchart, getPiechart, getReport }