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

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/design" element={<DesignPage/>} />
        <Route path="/" element={<HomePage/>} />
        <Route path="/FCCLA-info" element={<ClubInfoPage/>} />
        <Route path="/FCCLA-leadership" element = {<LeadershipPage/>}/>
        <Route path="/FCCLA-membership" element= {<MembershipPage/>}/>
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
