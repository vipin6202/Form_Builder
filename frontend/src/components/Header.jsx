import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import formimage from "../assets/images/forms_2020q4_48dp.png";
import TemporaryDrawer from "./TemporaryDrawer";
// import TemporaryDrawer from "./sidebar/Drawer";

function Header() {
  return (
    // header
    <div className="my-0 mx-2.5 px-1 py-0 flex justify-between items-center bg-white text-black h-20">
      {/* headerinfo */}
      <div className="flex items-center">
        <TemporaryDrawer />
        <img src={formimage} alt="no image" className="h-10 w-10" />
      </div>
      {/* header search */}
      <div className="flex items-center bg-slate-100 w-[700px] h-[45px] rounded-lg">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input
          type="text"
          name="search"
          placeholder="Search"
          className="h-[40px] bg-slate-100 rounded-lg outline-none w-full px-2"
        />
      </div>
      {/* header right */}
      <div className="flex items-center">
        <IconButton>
          <AppsIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
