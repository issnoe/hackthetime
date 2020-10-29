import React from "react";

type ListItemImageProps = {
  name: string;
  src?: string;
};

const ListItemImage = ({ name, src }: ListItemImageProps) => (
  <div className="user">
    <img src={src} alt="" className="user-img" />
    <div className="username">{name}</div>
  </div>
);

export default ListItemImage;
