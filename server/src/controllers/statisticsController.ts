
const getStatistics = async (req: any, res: any) => {
   try {

   } catch (error) {
      console.log(error)
      res.status(500).send({ status: 500, data: "", msg: "Error fetching statistics.", error: error });
   }
}

const getBarchart = async (req: any, res: any) => {
   try {

   } catch (error) {
      console.log(error)
      res.status(500).send({ status: 500, data: "", msg: "Error fetching barchart.", error: error });
   }
}

const getPiechart = async (req: any, res: any) => {
   try {

   } catch (error) {
      console.log(error)
      res.status(500).send({ status: 500, data: "", msg: "Error fetching piechart.", error: error });
   }
}

const getReport = async (req: any, res: any) => {
   try {

   } catch (error) {
      console.log(error)
      res.status(500).send({ status: 500, data: "", msg: "Error fetching report.", error: error });
   }
}

export default { getStatistics, getBarchart, getPiechart, getReport }