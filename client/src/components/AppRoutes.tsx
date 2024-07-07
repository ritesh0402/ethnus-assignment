import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './home/Home'
import Barchart from './stats/Barchart'
import Piechart from './stats/Piechart'
import Report from './stats/Report'
import Transactions from './transactions/Transactions'
import Statistics from './stats/Statistics'
import NavbarComponent from './NavbarCompopnent'

const AppRoutes = () => {
   return (
      <Router>
         <NavbarComponent />
         <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/stats" >
               <Route path="statistics" element={<Statistics />} />
               <Route path="barchart" element={<Barchart />} />
               <Route path="piechart" element={<Piechart />} />
               <Route path="report" element={<Report />} />
            </Route>
         </Routes>
      </Router>
   )
}

export default AppRoutes