import { useEffect, useState } from "react"
import axios from 'axios'
import ListTransactions from "./ListTransactions";



const Transactions = () => {
   const [transactions, setTransactions] = useState([])
   const [searchText, setSearchText] = useState('');
   const [page, setPage] = useState(1); // Default page number
   const [perPage, setPerPage] = useState(10); // Default items per page

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
            console.log('new data')
            setTransactions(response.data); // Assuming data structure from API response
         } catch (error) {
            console.error('Error fetching transactions:', error);
         }
      };

      fetchTransactions();
   }, [searchText, page, perPage]);

   const handleSearchInputChange = (event: any) => {
      setSearchText(event.target.value);
   };

   const handlePageChange = (newPage: number) => {
      setPage(newPage);
   };

   const handlePerPageChange = (event: any) => {
      setPerPage(Number(event.target.value));
   };

   return (
      <div>
         <h1>Transactions</h1>

         <div>
            <label htmlFor="searchInput">Search:</label>
            <input
               type="text"
               id="searchInput"
               value={searchText}
               onChange={handleSearchInputChange}
            />
         </div>
         <div>
            <label htmlFor="perPageInput">Items per Page:</label>
            <input
               type="number"
               id="perPageInput"
               value={perPage}
               onChange={handlePerPageChange}
            />
         </div>

         <ListTransactions transactions={transactions} />
         <div>
            <button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>Previous</button>
            <span>Page {page}</span>
            <button onClick={() => handlePageChange(page + 1)}>Next</button>
         </div>
      </div>
   );
}

export default Transactions