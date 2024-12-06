import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { IconButton } from "@mui/material";
import StorageIcon from "@mui/icons-material/Storage";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import docimage from "../assets/images/t-shirt.png";

function Mainbody() {
  return (
    <div className="bg-white mx-4 sm:mx-[40px] md:mx-[160px]">
      {/* mainbodytop */}
      <div className="flex mt-3 flex-col sm:flex-row justify-between items-center">
        {/* mainbody top left */}
        <div className="text-base font-medium">Recent form</div>
        {/* mainbody top right */}
        <div className="flex items-center mt-2 sm:mt-0">
          {/* main top center */}
          <div className="text-sm mr-[125px] flex items-center pt-3">
            Owned by anyone
            <ArrowDropDownIcon />
          </div>
          <IconButton>
            <StorageIcon className="text-base text-black" />
          </IconButton>
          <IconButton>
            <FolderOpenIcon className="text-base text-black" />
          </IconButton>
        </div>
      </div>

      {/* docs section */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        {/* doccard */}
        <div className="flex flex-col box-border">
          {/* docimage */}
          <img
            src={docimage}
            alt="docimage"
            className="box-border h-40 w-full object-cover rounded-md"
          />
          {/* doc content */}
          <div className="flex flex-col justify-between p-4 w-full">
            <h5 className="text-lg font-medium mt-2">Document Title</h5>
            <div className="flex items-center mt-2">
              {/* content left */}
              <div className="flex items-center">
                <StorageIcon className="text-base text-white p-2 mr-2 bg-[#6E2594] rounded-full" />
              </div>
              <MoreVertIcon className="text-base text-gray-300 ml-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mainbody;
