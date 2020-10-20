import React from "react";

type ItemProps = {
  name: string;
  src?: string;
};

const ListItemImage = ({ name, src }: ItemProps) => (
  <div className="user">
    <img src={src} alt="" className="user-img" />
    <div className="username">{name}</div>
  </div>
);

export default ListItemImage;
