import React from "react";
import { Table } from "react-bootstrap";

const ListTransactions = ({ transactions }: any) => {
   if (transactions.data.length === 0) {
      return (<h2>Error fetching data!</h2>);
   }
   return (
      <div>
         <div className="mx-auto" style={{ width: '90%' }}>
            <Table responsive striped bordered hover>
               <thead>
                  <tr>
                     <th>ID</th>
                     <th>Title</th>
                     <th>Description</th>
                     <th>Price</th>
                     <th>Category</th>
                     <th>Sold</th>
                     <th>Image</th>
                  </tr>
               </thead>
               <tbody>
                  {transactions.data && transactions.data.map((transaction: any) => (
                     <tr key={transaction.id}>
                        <td>{transaction.id}</td>
                        <td>{transaction.title}</td>
                        <td>{transaction.description}</td>
                        <td>{transaction.price.toFixed(2)}$</td>
                        <td>{transaction.category}</td>
                        <td>{transaction.sold ? 'Sold' : 'Not Sold'}</td>
                        <td><img src={transaction.image} alt={transaction.title} height={'80px'} /></td>
                     </tr>
                  ))}
               </tbody>
            </Table>
         </div>
      </div>
   );
};

export default ListTransactions;
