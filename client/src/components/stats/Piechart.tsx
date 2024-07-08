import { PieChart } from "@mui/x-charts";
import axios from "axios";
import { useEffect, useState } from "react";



const Piechart = ({ selectedMonth = 0 }: any) => {
   const [pieData, setPieData] = useState([])
   useEffect(() => {
      const fetchData = async () => {
         try {
            const res = await axios.get('http://localhost:5000/api/stats/piechart', {
               params: {
                  month: selectedMonth
               }
            });
            setPieData(res.data.data);
         } catch (error) {
            console.error('Error:', error);
         }
      }
      fetchData()
   }, [selectedMonth])

   if (pieData.length === 0) {
      return (<h2>Error fetching data!</h2>);
   }

   return (
      <div >
         <div className="mx-auto border border-2 border-dark rounded-5 py-auto" style={{ height: '70%', width: '50%' }}>
            <h2 style={{ margin: '20px 0px -20px 0px' }}>Piechart</h2>
            <PieChart
               series={[
                  {
                     data: pieData,
                     innerRadius: 30,
                     outerRadius: 100,
                     paddingAngle: 5,
                     cornerRadius: 5,
                     startAngle: -180,
                     endAngle: 180,
                     cx: 150,
                     cy: 150,
                  }
               ]}
               width={600}
               height={300}
               margin={{ left: 100 }}
            />
         </div>
      </div>
   )
}

export default Piechart