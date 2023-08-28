import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainComponent from "./Component/MainComponent";
import LoginComponent from "./Component/LoginComponent";
import ApplyleaveComponent from "./Component/ApplyleaveComponent";
import DashboardComponent from "./Component/DashboardComponent";
import AdminDashboardComponent from "./Component/AdminDashboardComponent";

function App() {
  return (
    <>
    <Router>
    <Routes>
      <Route path="/main" element={<MainComponent />} />
      <Route path="/" element={<LoginComponent />} />
      <Route path="/main/apply-leave" element={<ApplyleaveComponent/>} />
      <Route path="/main/dashboard-employee" element={<DashboardComponent/>}/>
      <Route path="/main/dashboard-admin" element={<AdminDashboardComponent/>}/>
    </Routes>
  </Router>
  </>
  );
}

export default App;
