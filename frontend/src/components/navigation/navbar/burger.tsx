import React from "react";
import { IconBurger } from "../../../assets";

const Burger = (props: any) => (
  <React.Fragment>
    <IconBurger onClick={props.callback} />
    {/* <div className="logo"></div> */}
  </React.Fragment>
);
export default Burger;
