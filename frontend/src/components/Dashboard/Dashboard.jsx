import * as React from "react";
import BasicBars from "./BasicBars";
import b1 from '../../assets/vectors/blackSvg/b1.svg';
import b2 from "../../assets/vectors/blackSvg/b2.svg";
import b3 from "../../assets/vectors/blackSvg/b3.svg";
import b4 from "../../assets/vectors/blackSvg/b4.svg";
import b5 from "../../assets/vectors/blackSvg/b5.svg";
import b6 from "../../assets/vectors/blackSvg/b6.svg";
import b7 from "../../assets/vectors/blackSvg/b7.svg";
import b8 from "../../assets/vectors/blackSvg/b8.svg";
import b9 from "../../assets/vectors/blackSvg/b9.svg";
import b10 from "../../assets/vectors/blackSvg/b10.svg";
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

function Dashboard() {
  
  return (
    <>
      <div className="flex gap-6 mt-6 flex-wrap  lg:px-[2%]">
        <ShoppingCart
          bg={"bg1"}
          brandName="Total Division"
          subscriberCount={4}
          icon={cardIcon1}
        />
        <ShoppingCart
          bg={"bg2"}
          brandName="Total Warehouse"
          subscriberCount={5}
          icon={cardIcon2}
        />
        <ShoppingCart
          bg={"bg3"}
          brandName="Total Client"
          subscriberCount={5}
          icon={cardIcon3}
        />

        <ShoppingCart
          bg={"bg4"}
          brandName="Total Parts"
          subscriberCount={55}
          icon={cardIcon4}
        />
        <ShoppingCart
          bg={"bg5"}
          brandName="Total Shipments"
          subscriberCount={55}
          icon={cardIcon5}
        />
        <ShoppingCart
          bg={"bg6"}
          brandName="Total Technicians"
          subscriberCount={75}
          icon={cardIcon6}
        />
      </div>
      <BasicBars />
    </>
  );
}

export default Dashboard;
