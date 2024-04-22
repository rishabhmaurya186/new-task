import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import {
//   Route,
//   RouterProvider,
//   createBrowserRouter,
//   createRoutesFromElements,
//   useNavigate,
//   Navigate // Add Navigate import
// } from "react-router-dom";

// //import Dashboard from "./Pages/DashboardLayoyt.jsx";
// import Dashboard from "./components/Dashboard/Dashboard.jsx";
// import LoginForm from "./Pages/LoginForm";
// import SignUpForm from "./Pages/SignUpForm";
// import Layout from "./components/Layout.jsx";
// import Forgotten from "./Pages/Forgot.jsx";
// import OTPVerification from "./Pages/OTPVerification.jsx";
// import HomeLayout from "./Pages/HomeLayout.jsx";
// import DashboardLayoyt from "./Pages/DashboardLayoyt.jsx";
// import Division from "./Pages/Division.jsx";
// import CreatePost from "./components/Division/CreatePost.jsx";
// import UpdatePost from "./components/Division/UpdatePost.jsx";
// import View from "./components/Division/View.jsx";
// import AssociateClient from "./components/Division/AssociateClient.jsx";
// import AddClient from "./components/Division/AddClient.jsx";
// import ClientDetails from "./components/Division/DivisionComponents/ClientDetails.jsx";
// import AddUser from "./components/Division/DivisionComponents/AddUser.jsx";
// import EditUser from "./components/Division/DivisionComponents/EditUser.jsx";
// import DeleteDivision from "./components/Division/DivisionComponents/DeleteDivision.jsx";
// // import ListedWarehouse from "./components/Division/Warehouse/ListedWarehouse.jsx";
// import ListedWarehouse from "./components/Division/Listed-Warehouse/ListedWarehouse.jsx";
// import DivisionUsers from "./components/Division/Division-Users/DivisionUsers.jsx";
// import Warehouse from "./Pages/Warehouse.jsx";
// import AddSite from "./components/Division/Warehouse/addSite/AddSite.jsx";
// import UpdateSite from "./components/Division/Warehouse/updateSite/UpdateSite.jsx";
// import ViewSite from "./components/Division/Warehouse/ViewSite/ViewSite.jsx";
// import Parts from "./Pages/Parts.jsx";
// import AddParts from "./components/Parts/AddParts.jsx";
// import AddMedia from "./components/Parts/AddMedia.jsx";
// import UpdateParts from "./components/Parts/UpdateParts.jsx";
// import { Delete } from "@mui/icons-material";
// import DeleteParts from "./components/Parts/DeleteParts.jsx";
// const isLoggedIn = !!localStorage.getItem('token');

// // const router = createBrowserRouter(
// //   createRoutesFromElements(
// //     // <Route path='/' element={<Dashboard/>}>
// //     <Route path="/" element={<Layout />}>
// //       {isLoggedIn ?
        
//           <Route path="" element={<Navigate to="profile/dashboard" />} />
        
//       :
//         <Route path="" element={<HomeLayout />}>
//         <Route path="" element={<Navigate to="/login" />} /> 
//         <Route path="signup" element={<SignUpForm />} />
//         <Route path="login" element={<LoginForm />} />
//         <Route path="forgot" element={<Forgotten />} />
//         <Route path="otpverification" element={<OTPVerification />} />
//       </Route>
//      }
//       <Route path="" element={<HomeLayout />}>
//         <Route path="" element={<Navigate to="/login" />} /> 
//         <Route path="signup" element={<SignUpForm />} />
//         <Route path="login" element={<LoginForm />} />
//         <Route path="forgot" element={<Forgotten />} />
//         <Route path="otpverification" element={<OTPVerification />} />
//       </Route>
    
      

//       <Route path="profile" element={<DashboardLayoyt />}>
//         <Route path="dashboard" element={<Dashboard />} />
//         <Route path="division" element={<Division />}>
//           <Route path="delete" element={<DeleteDivision />} />
//         </Route>
//         <Route path="division/create" element={<CreatePost />} />
//         <Route path="division/update/:id" element={<UpdatePost />} />

//         <Route path="division/add-client" element={<AddClient />} />
//         <Route path="division/client-details" element={<ClientDetails />} />
//         <Route path="division/edit-user" element={<EditUser />} />
//         <Route path="division/add-user" element={<AddUser />} />
//         <Route path="division" element={<View />}>
//           <Route path="associate-client" element={<AssociateClient />} />

//           <Route path="warehouse" element={<ListedWarehouse />} />
//           <Route path="division-users" element={<DivisionUsers />} />
//         </Route>
//         <Route path="warehouse" element={<Warehouse />} />
//         <Route path="warehouse/addSite" element={<AddSite />} />
//         <Route path="warehouse/updateSite/:id" element={<UpdateSite />} />
//         <Route path="warehouse/viewSite/:id" element={<ViewSite />} />

//         <Route path="parts" element={<Parts />} >
//           <Route path="delete" element={<DeleteParts/>} />
//         </Route>
//         <Route path="parts/add" element={<AddParts />} >

//         <Route path="media" element={<AddMedia />} />
//         </Route>
//         <Route path="parts/update" element={<UpdateParts />} >
//         <Route path="media" element={<AddMedia />} />
//         </Route>
         
//         <Route
//           path="inventory"
//           element={
//             <div className="w-[100%] h-[100%] flex justify-center items-center text-5xl">
//               {" "}
//               Welcome to inventory page
//             </div>
//           }
//         />
//         <Route
//           path="logshipment"
//           element={
//             <div className="w-[100%] h-[100%] flex justify-center items-center text-5xl">
//               {" "}
//               Welcome to logshipment page
//             </div>
//           }
//         />
//         <Route
//           path="technician"
//           element={
//             <div className="w-[100%] h-[100%] flex justify-center items-center text-5xl">
//               {" "}
//               Welcome to technician page
//             </div>
//           }
//         />
//         <Route
//           path="reconcile"
//           element={
//             <div className="w-[100%] h-[100%] flex justify-center items-center text-5xl">
//               {" "}
//               Welcome to reconcile page
//             </div>
//           }
//         />
//         <Route
//           path="customreport"
//           element={
//             <div className="w-[100%] h-[100%] flex justify-center items-center text-5xl">
//               {" "}
//               Welcome to customreport page
//             </div>
//           }
//         />
//       </Route>
//     </Route>
//   )
// );
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <RouterProvider router={router}></RouterProvider> */}
    <App/>
  </React.StrictMode>
);
