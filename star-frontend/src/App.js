import './css/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Design from './Pages/Design';
import AwardsPage from './Pages/AwardsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/design" element={<Design/>} />
        <Route path="/awards" element={<AwardsPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
