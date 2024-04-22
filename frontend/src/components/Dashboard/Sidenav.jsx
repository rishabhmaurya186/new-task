import * as React from "react";
import BasicBars from "./BasicBars";
import b1 from "../../assets/vectors/blackSvg/b1.svg";
import b2 from "../../assets/vectors/blackSvg/b2.svg";
import b3 from "../../assets/vectors/blackSvg/b3.svg";
import b4 from "../../assets/vectors/blackSvg/b4.svg";
import b5 from "../../assets/vectors/blackSvg/b5.svg";
import b6 from "../../assets/vectors/blackSvg/b6.svg";
import b7 from "../../assets/vectors/blackSvg/b7.svg";
import b8 from "../../assets/vectors/blackSvg/b8.svg";
import b9 from "../../assets/vectors/blackSvg/b9.svg";
import b10 from "../../assets/vectors/blackSvg/b10.svg";
import w1 from '../../assets/vectors/whiteSvg/w1.svg'
import w2 from '../../assets/vectors/whiteSvg/w2.svg'
import w3 from '../../assets/vectors/whiteSvg/w3.svg'
import w4 from '../../assets/vectors/whiteSvg/w4.svg'
import w5 from '../../assets/vectors/whiteSvg/w5.svg'
import w6 from '../../assets/vectors/whiteSvg/w6.svg'
import w7 from '../../assets/vectors/whiteSvg/w7.svg'
import w8 from '../../assets/vectors/whiteSvg/w8.svg'
import w9 from '../../assets/vectors/whiteSvg/w9.svg'
import w10 from '../../assets/vectors/whiteSvg/w10.svg'




import "./Sidenav.css";
import ShoppingCart from "./ShoppingCart";
import cardIcon1 from "../../assets/vectors/cardIcon/cardIcon1.svg";
import cardIcon2 from "../../assets/vectors/cardIcon/cardIcon2.svg";
import cardIcon3 from "../../assets/vectors/cardIcon/cardIcon3.svg";
import cardIcon4 from "../../assets/vectors/cardIcon/cardIcon4.svg";
import cardIcon5 from "../../assets/vectors/cardIcon/cardIcon5.svg";
import cardIcon6 from "../../assets/vectors/cardIcon/cardIcon6.svg";
import { NavLink, Outlet } from "react-router-dom";
import Header from "../Header";
import SideBarCard from "./SideBarCard";

const drawerWidth = 240;

export default function Sidenav() {
  const [whiteSvg, setWhiteSvg] = React.useState(false);
  const [sidenavHidden , setSidenav] = React.useState(true)
  return (
    <div style={{ backgroundColor: "#F2F1EF" }}>
      <div className=" bg-white fixed top-0 left-0 z-10 w-full ">
        <Header setSidenav={setSidenav} sidenavHidden={sidenavHidden} />
      </div>
      <div className=" flex justify-between mx-4 z-5  bg-gray-100 w-auto ">
        
        <div className="relative">
          <div className={`w-[280px]  h-[110vh] rounded-lg bg-white    lg:pt-4 fixed  right-0  lg:top-[16vh] top-[16vh]  lg:left-5 z-10 ${sidenavHidden ? 'hidden ' : 'inline-block w-[70%] overflow-scroll'} lg:inline-block`}>
        
        
          <NavLink
            to={"dashboard"}
            className={({ isActive }) => `${isActive ? `active white` : "black"}`}
          >
            <SideBarCard text={"Dashboard"} svg={b1} svg1={w1}  />
          </NavLink>
          <NavLink
            to={"division"}
            className={({ isActive }) => `${isActive ? "active white" : "black"}`}
          >
            <SideBarCard text={"Division"} svg={b2}  svg1={w2}/>
          </NavLink>
          <NavLink
            to={"warehouse"}
            className={({ isActive }) => `${isActive ? "active white" : "black"}`}
          >
            <SideBarCard text={"Warehouse"} svg={b3} svg1={w3} />
          </NavLink>
          <NavLink
            to={"parts"}
            className={({ isActive }) => `${isActive ? "active white" : "black"}`}
          >
            <SideBarCard text={"Parts"} svg={b4} svg1={w4} />
          </NavLink>
          <NavLink
            to={"inventory"}
            className={({ isActive }) => `${isActive ? "active white" : "black"}`}
          >
            <SideBarCard text={"Inventory"} svg={b5} svg1={w5}/>
          </NavLink>
          <NavLink
            to={"logshipment"}
            className={({ isActive }) => `${isActive ? "active white" : "black"}`}
          >
            <SideBarCard text={"Logshipment"} svg={b6} svg1={w6} />
          </NavLink>
          <NavLink
            to={"technician"}
            className={({ isActive }) => `${isActive ? "active white" : "black"}`}
          >
            <SideBarCard text={"Technician"} svg={b7} svg1={w7}/>
          </NavLink>
          <NavLink
            to={"reconcile"}
            className={({ isActive }) => `${isActive ? "active white" : "black"}`}
          >
            <SideBarCard text={"Reconcile"} svg={b8} svg1={w8}/>
          </NavLink>
          <NavLink
            to={"customreport"}
            className={({ isActive }) => `${isActive ? "active white" : "black"}`}
          >
            <SideBarCard text={"Custom Report"} svg={b9} svg1={w9}/>
          </NavLink>
          <NavLink
            to={"/login"}
            className={({ isActive }) => `${isActive ? "active white" : "black"}`}
            onClick={() => {
              alert(localStorage.getItem('token'))
              localStorage.removeItem('token')
              alert(localStorage.getItem('token'))
            }}
          >
            <SideBarCard text={"Logout"} svg={b10} svg1={w10}/>
          </NavLink>
          <div className="h-[50vh]"></div>
        </div></div>
       
        <div className=" w-[100%] lg:w-[82%] bg-white min-h-[100vh] rounded-lg lg:ml-[290px] mt-[16vh]  ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
