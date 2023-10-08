import Home from "./Pages/Home"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DashBoard from "./Pages/dashboard/DashBoard"
import DashBoardLogin from "./Pages/dashboard/DashBoardLogin"
import ForgottenPassword from "./Pages/dashboard/ForgottenPassword"
import ResetPassword from "./Pages/dashboard/ResetPassword"
import {Routes,Route,Navigate} from "react-router-dom"
import { UseDashboardAuthContext } from "./context/DashBoardAuthContext"
import './App.css';
import PageNotFound from "./Pages/PageNotFound";
// import AdminSignUp from "./Pages/AdminSignUp"

function App() {
  const {useradmin}=UseDashboardAuthContext()
  return (
    <div className="App ">
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/dashboard" element={useradmin?<DashBoard/>:<Navigate to="/dashboardlogin"/>}/>
  <Route path="/dashboardlogin" element={!useradmin?<DashBoardLogin/>:<Navigate to="/dashboard"/>}/>
  {/* <Route path="/adminsignup" element={<AdminSignUp/>}/> */}
  <Route path="/forgottenPassword" element={<ForgottenPassword/>}/>
  <Route path='/resetPassword/:id/:token' element={<ResetPassword/>}/>

</Routes>
<ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
  </div>
  );
}
export default App;