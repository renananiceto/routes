import React, { useState } from "react";
import { Link } from "react-router-dom";
import { menuList } from "../../data/data";

function Menu() {
  const [openDrop, setOpenDrop] = useState("");

  const handleClick = (prop) => {
    if (openDrop === prop) {
      setOpenDrop("");
      return;
    }
    setOpenDrop(prop);
  };

  return (
    <ul>
      {/* <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="#">Foto</Link>
      </li>
      <li>
        <Link to="/Video">Video</Link>
      </li>
      <li>
        <Link to="#">Renan</Link>
      </li> */}
      {menuList.map((menuItem) => (
        <>
          <h1 onClick={() => handleClick(menuItem.title)}>{menuItem.title}</h1>
          {openDrop === menuItem.title &&
            menuItem.content.map((subMenuItem) => <li> {subMenuItem} </li>)}
        </>
      ))}
    </ul>
  );
}

export default Menu;
