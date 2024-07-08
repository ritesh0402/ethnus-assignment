import { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Outlet, useLocation } from 'react-router-dom';
import Barchart from './Barchart';
import Piechart from './Piechart';
import SalesData from './salesData';



const Statistics = () => {
   const [month, setMonth] = useState(1)
   const pathName = useLocation();
   const arr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
   return (
      <div className='py-5'>
         <br />
         <h1>Statistics</h1>
         <Dropdown autoClose="outside" >
            <Dropdown.Toggle variant="dark" id="dropdown-basic"  >
               {arr[month]}
            </Dropdown.Toggle>

            <Dropdown.Menu>
               {arr.map((monthName, ind) => (
                  <Dropdown.Item key={ind} onClick={() => setMonth(ind)} >{monthName}</Dropdown.Item>

               ))}
            </Dropdown.Menu>
         </Dropdown>
         <br />
         {pathName.pathname === '/stats/barchart' && <Barchart selectedMonth={month + 1} />}
         {pathName.pathname === '/stats/piechart' && <Piechart selectedMonth={month + 1} />}
         {pathName.pathname === '/stats/salesData' && <SalesData selectedMonth={month + 1} />}
         {/* <Outlet /> */}
      </div>
   )
}

export default Statistics