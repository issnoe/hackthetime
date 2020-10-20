import React from "react";
import { IconAlert, IconArrowDown, IconUpload } from "../../../assets";

import Burger from "./burger";
import LinkItem from "./link-item";
import Search from "./search";

const NavBar = (props: any) => (
  <div className="header">
    <div className="header-left">
      <Burger callback={props.callback} />
      <Search />
    </div>
    <div className="header-menu">
      <LinkItem name="Home" classname="active" />
      <LinkItem name="Categories" />
      <LinkItem name="Suscriptions" classname="notify" />
    </div>
    <div className="user-settings">
      <button className="button">
        <IconUpload />
        Upload
      </button>
      <IconAlert />
      <img
        className="user-profile "
        src="https://images.unsplash.com/photo-1586297098710-0382a496c814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
        alt=""
      />
      <IconArrowDown />
    </div>
  </div>
);
export default NavBar;
