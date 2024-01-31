import './css/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DesignPage from './Pages/DesignPage';
import Navbar from './Components/Navbar';
import HomePage from '../src/Pages/HomePage';
import ClubInfoPage from './Pages/ClubInfoPage';
import CalenderPage from './Pages/CalenderPage'
import AwardsPage from './Pages/AwardsPage';
import RecruitmentPage from './Pages/RecruitmentPage';
import CommitteePage from './Pages/CommitteePage';
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
import ChapterActivitiesPage from './Pages/CalenderPage';
import STARDocumentationPage from './Pages/STARDocumentationPage';
import { Footer } from './Components/Footer';
import ContactPage from './Pages/ContactPage';
import OfficerPage from './Pages/OfficerPage';
import OfficerExpectation from './Pages/OfficerExpectation';

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
        <Route path="/FCCLA-contact" element = {<ContactPage/>}/>
        <Route path="/FCCLA-membership" element= {<Membership/>}/>
        <Route path="/FCCLA-awards" element={<AwardsPage/>}/>
        <Route path="/FCCLA-recruitment" element={<RecruitmentPage/>}/>
        <Route path="/FCCLA-committee" element={<CommitteePage/>}/>
        <Route path="/FCCLA-calender" element={<CalenderPage/>}/>
        <Route path="/FCCLA-milestones" element={<MilestonesPage/>}/>
        <Route path="/FCCLA-teams" element={<TeamsPage/>}/>
        <Route path="/FCCLA-sponsors" element={<SponsorPage/>}/>
        <Route path="/FCCLA-chapterActivities" element={<ChapterActivitiesPage/>}/>
        <Route path="/FCCLA-STARDocumentation" element={<STARDocumentationPage/>}/>
        <Route path="/FCCLA-officers" element={<OfficerPage/>} />
        <Route path="FCCLA-officer-expectations" element={<OfficerExpectation/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
