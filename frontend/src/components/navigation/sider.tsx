import src from "*.bmp";
import { type } from "os";
import React, { useState } from "react";
import {
  IconHistory,
  IconHome,
  IconStart,
  IconSYoutube,
  IconUser,
} from "../../assets";
import ListItemImage from "../core/list-item";
import Link, { LinkProps } from "../core/link/link.c";
import { projects } from "../../data/proyects";

type Users = {
  name: string;
  src?: string;
};

const users: Users[] = [
  {
    name: "Example",
    src:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80",
  },
  {
    name: "Luis",
  },
];

const Sider = (props: any) => {
  return (
    <div className="wrapper">
      {props.toogle && (
        <div className="left-side">
          <div className="side-wrapper">
            <div className="side-menu">
              <div className="side-title">Projetcs</div>
              <div className="nose">
                {projects.map((project) => (
                  <Link {...project} />
                ))}
              </div>

              <button className="button show-more">+ Add project</button>
            </div>
          </div>
        </div>
      )}
      <div className="main-container">{props.children}</div>
    </div>
  );
};

export default Sider;
