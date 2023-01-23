import './css/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Design from './Pages/Design';
import Navbar from './Components/Navbar';
import Home from '../src/Pages/Home';
import ClubInfo from './Pages/ClubInfo';
import FcclaLeadership from './Pages/FcclaLeadership';
import Membership from './Pages/Membership';
import AwardsPage from './Pages/AwardsPage';
import AdminOverview from './Pages/Admin/AdminOverview';
import Login from './Components/Admin/Login';
import Test from './Components/Admin/Test';
import { AdminComponentData } from './Pages/Admin/AdminComponentData';
import { AdminIndividualComponentData } from './Pages/Admin/AdminIndividualComponentData';
import { AdminAddData } from './Pages/Admin/AdminAddData';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        {/* Admin Pages */}
        <Route path="/login" element={<Login/>} />
        <Route path="/admin/test" element={<Test/>} />
        <Route path="/admin" element={<AdminOverview/>} />
        <Route path="/admin/:component" element={<AdminComponentData/>} />
        <Route path="/admin/edit/:component/:id" element={<AdminIndividualComponentData/>} />
        <Route path="/admin/add/:component" element={<AdminAddData/>} />

        <Route path="/design" element={<Design/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/FCCLA-info" element={<ClubInfo/>} />
        <Route path="/FCCLA-leadership" element = {<FcclaLeadership/>}/>
        <Route path="/FCCLA-membership" element= {<Membership/>}/>
        <Route path="/awards" element={<AwardsPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
