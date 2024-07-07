import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './home/Home'
import Barchart from './stats/Barchart'
import Piechart from './stats/Piechart'
import Report from './stats/Report'
import Transactions from './transactions/Transactions'
import Statistics from './stats/Statistics'

const AppRoutes = () => {
   return (
      <Router>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/stats" element={<Statistics />}>
               <Route path="bar-chart" element={<Barchart />} />
               <Route path="pie-chart" element={<Piechart />} />
               <Route path="report" element={<Report />} />
            </Route>
         </Routes>
      </Router>
   )
}

export default AppRoutes