import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpForm from "./Pages/SignUpForm";
import LoginForm from "./Pages/LoginForm";
import Dashboard from "./Pages/DashboardLayoyt";
import "react-image-crop/dist/ReactCrop.css";
import Forgotten from "./Pages/Forgot";
import ForgottenOTP from "./Pages/OTPVerification";
import HomeLayout from "./Pages/HomeLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />} >
              <Route path="" element={<LoginForm/>}/>
              <Route path="/signup" element={<SignUpForm />} />
          <Route path="/login" element={<LoginForm />} />
          </Route>
        
          <Route path="/forgotten" element={<Forgotten />} />
          <Route path="/forgottenOTP" element={<ForgottenOTP />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/division" element={<Dashboard />} />
          <Route path="/warehouse" element={<Dashboard />} />
          <Route path="/parts" element={<Dashboard />} />
          <Route path="/inventory" element={<Dashboard />} />
          <Route path="/logshipment" element={<Dashboard />} />
          <Route path="/technician" element={<Dashboard />} />
          <Route path="/reconcile" element={<Dashboard />} />
          <Route path="/customreport" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
