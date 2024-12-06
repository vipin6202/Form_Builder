import React from "react";
import blank from "../assets/images/forms-icon.png";
import { IoMdFolderOpen } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
import { Button, IconButton } from "@mui/material";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { AiOutlineEye } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";

function Formheader() {
  return (
    // form header
    <div className="flex flex-wrap justify-between p-4 md:p-6 lg:p-8 bg-main">
      {/* form header left */}
      <div className="flex items-center space-x-4 w-full md:w-auto">
        <img src={blank} alt="Form Icon" className="h-10 md:h-12 lg:h-16" />
        <input
          type="text"
          placeholder="Untitled form"
          className="border-none outline-none text-md font-medium text-inputColor w-full md:w-auto"
        />
        <div className="flex space-x-2">
          <IoMdFolderOpen className="text-lg" />
          <IoIosStarOutline className="text-lg" />
        </div>
        <span className="text-sm text-inputColor hidden md:block">
          All changes saved in Drive
        </span>
      </div>

      {/* form header right */}
      <div className="flex items-center space-x-4 mt-4 md:mt-0 w-full md:w-auto justify-between md:justify-end">
        <div className="flex space-x-2">
          <IconButton>
            <ColorLensIcon className="text-lg" />
          </IconButton>
          <IconButton>
            <AiOutlineEye className="text-lg" />
          </IconButton>
          <IconButton>
            <FiSettings className="text-lg" />
          </IconButton>
        </div>
        <Button variant="contained" color="primary" size="small">
          <h2 className="bg-blue-600 text-white rounded-sm px-4 py-1 font-semibold">
            Send
          </h2>
        </Button>
        <IconButton>
          <MoreVertIcon className="text-lg" />
        </IconButton>
      </div>
    </div>
  );
}

export default Formheader;
