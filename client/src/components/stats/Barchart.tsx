import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';

const valueFormatter = (value: any) => `${value}qty`;

const fake = [
   { range: 100, value: 10 },
   { range: 200, value: 20 },
   { range: 300, value: 70 },
   { range: 400, value: 40 },
   { range: 500, value: 10 },
   { range: 600, value: 30 },
   { range: 700, value: 20 },
   { range: 800, value: 50 },
   { range: 900, value: 40 },
   { range: Infinity, value: 80 }
]

const chartSetting = {
   yAxis: [
      {
         label: 'quantity',
      },
   ],
   series: [{ dataKey: 'value', label: 'Quantity', valueFormatter }],
   height: 300,
   sx: {
      [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
         transform: 'translateX(-10px)',
      },
   },
};

const Barchart = ({ selectedMonth = 0 }: any) => {
   const [barData, setBarData] = useState([])
   useEffect(() => {
      const fetchData = async () => {
         try {
            const res = await axios.get('http://localhost:5000/api/stats/barchart', {
               params: {
                  month: selectedMonth
               }
            });
            setBarData(res.data.data);
         } catch (error) {
            console.error('Error:', error);
         }
      }
      fetchData()
   }, [])


   if (barData.length === 0) {
      return (<h2>Error fetching data!</h2>);
   }

   return (
      <div>
         <div className="mx-auto border border-2 border-dark rounded-5 py-auto" style={{ height: '70%', width: '60%', padding: '2%' }}>
            <h2 >Barchart</h2>
            <BarChart
               dataset={fake}
               xAxis={[
                  { scaleType: 'band', dataKey: 'range', tickPlacement: 'end', tickLabelPlacement: 'tick' },
               ]}
               {...chartSetting}
            />
         </div>
      </div>


   )
}

export default Barchart