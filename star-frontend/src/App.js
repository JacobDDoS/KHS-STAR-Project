import './css/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Design from './Pages/Design';
import Navbar from './Components/Navbar';
import Home from '../src/Pages/Home';
import ClubInfo from './Pages/ClubInfo';
import FcclaLeadership from './Pages/FcclaLeadership';
import Membership from './Pages/Membership';
import AwardsPage from './Pages/AwardsPage';
import Recruitment from './Pages/Recruitment';
import Committee from './Pages/Committee';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/design" element={<Design/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/FCCLA-info" element={<ClubInfo/>} />
        <Route path="/FCCLA-leadership" element = {<FcclaLeadership/>}/>
        <Route path="/FCCLA-membership" element= {<Membership/>}/>
        <Route path="/awards" element={<AwardsPage/>}/>
        <Route path="/FCCLA-recruitment" element={<Recruitment/>}/>
        <Route path="/FCCLA-Committee" element={<Committee/>}/>
      </Routes>
    </Router>
  );
}

export default App;
