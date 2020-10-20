import src from "*.bmp";
import { type } from "os";
import React from "react";
import {
  IconHistory,
  IconHome,
  IconStart,
  IconSYoutube,
  IconUser,
} from "../../assets";
import ListItemImage from "../core/list-item";

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

const Sider = (props: any) => (
  <div className="wrapper">
    <div className="left-side">
      <div className="side-wrapper">
        <div className="side-menu">
          <a href="#">
            <IconHome />
            Home
          </a>
          <a href="#">
            <IconUser />
            My channel
          </a>
          <a href="#">
            <IconStart></IconStart>
            Popular video
          </a>
          <a href="#">
            <IconSYoutube />
            Subscriptions
          </a>
          <a href="#">
            <IconHistory />
            History views
          </a>
          <a href="#">Watch Later</a>
          <a href="#">Liked Videos</a>
          <a href="#">Playlists</a>
        </div>
      </div>
      <div className="side-wrapper">
        <div className="side-menu">
          <div className="side-title">Subscriptions</div>
          {users &&
            users.map((item) => (
              <ListItemImage name={item.name} src={item.src}></ListItemImage>
            ))}

          <button className="button show-more">Show More</button>
        </div>
      </div>
      <div className="side-wrapper">
        <div className="side-menu">
          <div className="side-title">Popular Channels</div>
          <a href="#">
            <IconHome />
            Music Channels
          </a>
          <a href="#">Baby Channel</a>
          <a href="#">Games Channel</a>
          <a href="#">Fitness Channel</a>
          <a href="#">Food Channels</a>
          <a href="#">Economy Channels</a>
          <a href="#">Motorcycle Channels</a>
          <a href="#">Humor Channels</a>
          <button className="button show-more">Show More</button>
        </div>
      </div>
    </div>
    <div className="main-container">{props.children}</div>
  </div>
);

export default Sider;
