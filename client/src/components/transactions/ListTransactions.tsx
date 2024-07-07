import React from "react";
import { Table } from "react-bootstrap";

const ListTransactions = ({ transactions }: any) => {

   if (!transactions) {
      return <p>{transactions}</p>;
   }
   return (
      <div>
         <br />
         <h2>Transaction list</h2>

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
                     <td>{transaction.price}</td>
                     <td>{transaction.price}</td>
                     <td>{transaction.sold ? 'Sold' : 'Not Sold'}</td>
                     <td>{transaction.image}</td>
                  </tr>
               ))}
            </tbody>
         </Table>
      </div>
   );
};

export default ListTransactions;
