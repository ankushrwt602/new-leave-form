import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainComponent from "./Component/MainComponent";
import LoginComponent from "./Component/LoginComponent";
import ApplyleaveComponent from "./Component/ApplyleaveComponent";
import DashboardComponent from "./Component/DashboardComponent";
import AdminDashboardComponent from "./Component/AdminDashboardComponent";
import AdminEmployeeSection from "./Component/AdminEmployeeSectionComponent";
import AddEmployee from "./Component/AddEmployee";

function App() {
  return (
    <>
    <Router>
    <Routes>
      <Route path="/main" element={<MainComponent />} />
      <Route path="/" element={<LoginComponent />} />
      <Route path="/main/apply-leave" element={<ApplyleaveComponent/>} />
      <Route path="/dashboard-employee" element={<DashboardComponent/>}/>
      <Route path="/dashboard-admin" element={<AdminDashboardComponent/>}/>
      <Route path="/main/admin-employee-section" element={<AdminEmployeeSection/>}/>
      <Route path="/main/add-employee" element={<AddEmployee/>}/>
    </Routes>
  </Router>
  </>
  );
}

export default App;
