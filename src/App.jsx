import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AllPlayers from "./Pages/AllPlayers";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<AllPlayers />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
