import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";



const SalesData = ({ selectedMonth = 0 }: any) => {
   const [salesData, setSalesData] = useState({ totalSales: -1, totalItemsNotSold: 0, totalItemsSold: 0 })
   useEffect(() => {
      const fetchData = async () => {
         try {
            const res = await axios.get('http://localhost:5000/api/stats', {
               params: {
                  month: selectedMonth
               }
            });
            setSalesData(res.data.data[0]);
         } catch (error) {
            console.error('Error:', error);
         }

      }
      fetchData()
   }, [selectedMonth])

   if (salesData.totalSales === -1) {
      return (<h2>Error fetching data!</h2>);
   }

   return (
      <div className="mx-auto border border-2 border-dark rounded-5 py-auto" style={{ height: '70%', width: '50%' }}>
         <h2 style={{ margin: '15px 0px 15px 0px' }}>Piechart</h2>
         <Table responsive striped bordered hover variant="dark" className="mx-auto" style={{ width: '70%' }}>
            <thead>
               <tr>
                  <th style={{ width: '60%' }}>Data</th>
                  <th style={{ width: '40%' }}>Value</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td>Total Sale</td>
                  <td>{salesData.totalSales.toFixed(2)}</td>
               </tr>
               <tr>
                  <td>Total items sold</td>
                  <td>{salesData.totalItemsSold}</td>
               </tr>
               <tr>
                  <td>Total items unsold</td>
                  <td>{salesData.totalItemsNotSold}</td>
               </tr>
            </tbody>
         </Table>
      </div>
   )
}

export default SalesData
