// import logo from './logo.svg';
import "./App.css";
import HomePage from "./pages/Homepage/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About/About";
import Course from "./pages/Course/Course";

import StaffLogin from "./pages/StaffLogin/StaffLogin";
import Register from "./pages/StaffLogin/Register";
// import Applyform from './pages/Applyform';
import StaffDashBoard from "./pages/StaffLogin/StaffDashBoard";
import ApplicationsRequest from "./pages/StaffLogin/ApplicationsRequest";

// import DocumentUploader from './pages/studentLogin/DocumentUploader';
import AdminDashBoard from "./Admin/AdminDashBoard";
import Viewuser from "./Admin/Viewuser";
import StudentLogin from "./pages/studentLogin/StudentLogin";
import StudetntApplyForm from "./pages/studentLogin/StudetntApplyForm";
// import ViewApplicationDetails from './pages/ViewApplicationDeatils';
import AdminDashLayer from "./pages/StaffLogin/AdminDashLayer";
import AdminViewPllications from "./Admin/AdminViewPllications";
// import ApplyForms from './pages/ApplyForms';
import StudentDash from "./Studedash/StudentDash";
import ViewStudentApplication from "./pages/studentLogin/ViewStudentApplication";
import StaffList from "./Admin/Stafflist";
import AddStaff from "./Admin/AddStaff";
import Department from "./Admin/Department";
import Adddepartment from "./Admin/Adddepartment";
import StudentLayer from "./pages/studentLogin/StudentLayer";
import AdminStats from "./Admin/AdminStats";
import ApplicationInstructions from "./pages/Instructions/ApplicationInstructions";

function App() {

  const isAuthenticated = sessionStorage.getItem("userId") !== null;

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage></HomePage>} />
          <Route exact path="/about" element={<About></About>} />
          <Route exact path="/Course" element={<Course></Course>} />
          <Route
            exact
            path="/ViewStudentApplication"
            element={<ViewStudentApplication></ViewStudentApplication>}
          />

          <Route
            exact
            path="/studentlogin"
            element={<StudentLogin></StudentLogin>}
          />

          <Route exact path="/stafflogin" element={<StaffLogin></StaffLogin>} />

          <Route
            exact
            path="/AdminApplicationrequest"
            element={<AdminViewPllications></AdminViewPllications>}
          />

          <Route
            exact
            path="/staffDashboard"
            element={<StaffDashBoard></StaffDashBoard>}
          />

          <Route
            exact
            path="/Applicationrequest"
            element={<ApplicationsRequest></ApplicationsRequest>}
          />
          <Route exact path="/Dash" element={<StudentDash />} />
          <Route
            exact
            path="/AdminDashboard"
            element={<AdminDashBoard></AdminDashBoard>}
          />
          <Route exact path="/Dashboard" element={<AdminDashLayer />} />

          <Route
            exact
            path="/registerstudent"
            element={<Register></Register>}
          />

          <Route exact path="/viewUser" element={<Viewuser></Viewuser>} />
          <Route
            exact
            path="/StudentApplicationForm"
            element={<StudetntApplyForm></StudetntApplyForm>}
          />
          <Route
            exact
            path="/instruction"
            element={<ApplicationInstructions></ApplicationInstructions>}
          />



          <Route
            exact
            path="/StaffDetails"
            element={<StaffList></StaffList>}
          />
          <Route exact path="/AddStaff" element={<AddStaff></AddStaff>} />
          <Route exact path="/Department" element={<Department></Department>} />
          <Route exact path="/AddDepartment" element={<Adddepartment></Adddepartment>} />
          <Route exact path="/layerform" element={<StudentLayer></StudentLayer>} />
          <Route exact path="/AdminStats" element={<AdminStats></AdminStats>} />
        </Routes>




      </BrowserRouter>
    </div>
  );
}

export default App;
