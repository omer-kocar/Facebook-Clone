import React from "react";
import "./Header.css";
import HeaderIcon from "./HeaderIcon";
import HeaderIconsRight from "./HeaderIconsRight";
import { FaUserFriends } from "react-icons/fa";
import {
  BsFillCollectionPlayFill,
  BsSearch,
  BsHouseDoorFill,
  BsShopWindow,
  BsFillGrid1X2Fill,
  BsGrid3X3GapFill,
  BsMessenger,
  BsBellFill,
  BsFillCaretDownFill,
} from "react-icons/bs";

function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <img
          width={40}
          height={40}
          layout="fixed"
          src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
        />
        <div className="for-border">
          <BsSearch />
          <input
            className="input-search"
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>

      {/* header- middle */}
      <div className="header-middle">
        <div className="flex">
          <HeaderIcon Icon={BsHouseDoorFill} />
          <HeaderIcon Icon={FaUserFriends} />
          <HeaderIcon Icon={BsFillCollectionPlayFill} />
          <HeaderIcon Icon={BsShopWindow} />
          <HeaderIcon Icon={BsFillGrid1X2Fill} />
        </div>
      </div>
      <div className="header-right-container">
        <div className="header-right">
          <img src="https://www.pngarts.com/files/3/Cool-Avatar-Transparent-Image.png" />
          <p>Omer Kocar</p>
        </div>
        <div className="header-right-icons">
          <HeaderIconsRight Icons={BsGrid3X3GapFill} />
          <HeaderIconsRight Icons={BsMessenger} />
          <HeaderIconsRight Icons={BsBellFill} />
          <HeaderIconsRight Icons={BsFillCaretDownFill} />
        </div>
      </div>
    </div>
  );
}

export default Header;
