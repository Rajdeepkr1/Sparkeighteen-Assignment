import React, { useState } from "react";
import "./header.scss";

const Header = () => {
    const [dropdownVal,setDropdownval]=useState("");

    const sortfunction=(e)=>{
          let value = e.target.value;
          setDropdownval(value);
    }
  return (
    <div className="header__">
      <div className="header">Sparkeighteen Assignment</div>
      <select className="sort" name="sort" value={dropdownVal} onChange={sortfunction}>
        <option defaultValue>Sort</option>
        <option value="Date">Date</option>
        <option value="Name">Name</option>
        <option value="Likes">Likes</option>
        <option value="Shares">Shares</option>
        <option value="Views">Views</option>
      </select>
    </div>
  );
};

export default Header;
