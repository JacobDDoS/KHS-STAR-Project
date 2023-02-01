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
import SponsorPage from './Pages/SponsorPage';
import AdminOverview from './Pages/Admin/AdminOverview';
import Login from './Components/Admin/Login';
import Test from './Components/Admin/Test';
import { AdminComponentData } from './Pages/Admin/AdminComponentData';
import { AdminIndividualComponentData } from './Pages/Admin/AdminIndividualComponentData';
import { AdminAddData } from './Pages/Admin/AdminAddData';
import Design from './Pages/DesignPage';
import Membership from './Pages/MembershipPage';
import ChapterActivities from './Components/ChapterActivities';
import ChapterActivitiesPage from './Pages/ChapterActivitiesPage';
import STARDocumentationPage from './Pages/STARDocumentationPage';
import { Footer } from './Components/Footer';

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
        <Route path="/" element={<HomePage/>} />
        <Route path="/FCCLA-info" element={<ClubInfoPage/>} />
        <Route path="/FCCLA-leadership" element = {<LeadershipPage/>}/>
        <Route path="/FCCLA-membership" element= {<Membership/>}/>
        <Route path="/awards" element={<AwardsPage/>}/>
        <Route path="/FCCLA-recruitment" element={<RecruitmentPage/>}/>
        <Route path="/FCCLA-committee" element={<CommitteePage/>}/>
        <Route path="/FCCLA-programOfWork" element={<ProgramOfWorkPage/>}/>
        <Route path="/FCCLA-milestones" element={<MilestonesPage/>}/>
        <Route path="/FCCLA-teams" element={<TeamsPage/>}/>
        <Route path="/FCCLA-sponsors" element={<SponsorPage/>}/>
        <Route path="/FCCLA-chapterActivities" element={<ChapterActivitiesPage/>}/>
        <Route path="/FCCLA-STARDocumentation" element={<STARDocumentationPage/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
