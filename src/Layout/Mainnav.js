import React, { useContext} from "react";
import classes from "./Mainnav.module.css";

import { NavLink } from "react-router-dom";
import { Button, } from "react-bootstrap";
import Cartcontaxt from "../store/context";

const MainNav = (props) => {
  const autctx=useContext(Cartcontaxt)
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink to="/home" className={(isactive)=>isactive?classes.active:undefined}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/store">Store</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/auth">Login</NavLink>
          </li>
          
          <Button onClick={props.onClick} variant="danger">
            <span>{autctx.totalquantity}</span>
            <span>Cart</span>
          </Button>
        </ul>
      </nav>
    </header>
  );
};

export default MainNav;
