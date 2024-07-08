import { useEffect, useState } from "react"
import axios from 'axios'
import ListTransactions from "./ListTransactions";



const Transactions = () => {
   const [transactions, setTransactions] = useState({ data: [], total: 0 })
   const [searchText, setSearchText] = useState('');
   const [page, setPage] = useState(1);
   const [perPage, setPerPage] = useState(10);

   useEffect(() => {
      const fetchTransactions = async () => {
         try {
            const response = await axios.get('http://localhost:5000/api/transactions', {
               params: {
                  search: searchText,
                  page: page,
                  perPage: perPage
               }
            });
            setTransactions(response.data.data);
         } catch (error) {
            console.error('Error:', error);
         }
      };

      const timer = setTimeout(() => {
         fetchTransactions();
      }, 500)

      return () => clearTimeout(timer)
   }, [searchText, page, perPage]);

   const handleSearchInputChange = (event: any) => {
      setSearchText(event.target.value);
      setPage(1);
   };

   const handlePageChange = (newPage: number) => {
      setPage(newPage);
   };

   const handlePerPageChange = (event: any) => {
      setPerPage(Number(event.target.value));
      setPage(1);
   };

   return (
      <div className=" py-5">
         <h1 className="mt-4">Transactions</h1>
         <div className="d-flex justify-content-evenly my-4">

            <div style={{ display: 'inline' }}>
               <label htmlFor="perPageInput">Items per Page: </label>
               <input
                  type="number"
                  id="perPageInput"
                  value={perPage}
                  min={10}
                  max={25}
                  onChange={handlePerPageChange}
               />
            </div>

            <div style={{ display: 'inline' }}>
               <label htmlFor="searchInput">Search: </label>
               <input
                  type="text"
                  id="searchInput"
                  value={searchText}
                  onChange={handleSearchInputChange}
               />
            </div>

            <div style={{ display: 'inline' }}>
               <button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>Previous</button>
               <span> Page {page} </span>
               <button onClick={() => handlePageChange(page + 1)} disabled={transactions.total <= (page * perPage)}>Next</button>
            </div>
         </div>

         <ListTransactions transactions={transactions} />

      </div>
   );
}

export default Transactions