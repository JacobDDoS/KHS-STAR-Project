import './css/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DesignPage from './Pages/DesignPage';
import Navbar from './Components/Navbar';
import HomePage from '../src/Pages/HomePage';
import ClubInfoPage from './Pages/ClubInfoPage';
import LeadershipPage from './Pages/LeadershipPage';
import MembershipPage from './Pages/MembershipPage';
import AwardsPage from './Pages/AwardsPage';
import RecruitmentPage from './Pages/RecruitmentPage';
import CommitteePage from './Pages/CommitteePage';
import ProgramOfWorkPage from './Pages/ProgramOfWorkPage';
import MilestonesPage from './Pages/MileStonePage';
import TeamsPage from './Pages/TeamsPage';
import AdminOverview from './Pages/Admin/AdminOverview';
import Login from './Components/Admin/Login';
import Test from './Components/Admin/Test';
import { AdminComponentData } from './Pages/Admin/AdminComponentData';
import { AdminIndividualComponentData } from './Pages/Admin/AdminIndividualComponentData';
import { AdminAddData } from './Pages/Admin/AdminAddData';
import Recruitment from './Pages/Recruitment';
import Committee from './Pages/Committee';

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
        <Route path="/FCCLA-recruitment" element={<RecruitmentPage/>}/>
        <Route path="/FCCLA-committee" element={<CommitteePage/>}/>
        <Route path="/FCCLA-programOfWork" element={<ProgramOfWorkPage/>}/>
        <Route path="/FCCLA-milestones" element={<MilestonesPage/>}/>
        <Route path="/FCCLA-teams" element={<TeamsPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
