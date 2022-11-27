import './css/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Design from './Pages/Design';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/design" element={<Design/>} />
      </Routes>
    </Router>
  );
}

export default App;
