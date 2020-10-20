import React from "react";

type LinkItemProps = {
  name: string;
  classname?: "active" | "notify" | "active notify";
};

const LinkItem = ({ name, classname }: LinkItemProps) => (
  <div className={`menu-item ${classname}`}>{name}</div>
);
export default LinkItem;
