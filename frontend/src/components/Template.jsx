import React from "react";
import UnfoldMoreSharpIcon from "@mui/icons-material/UnfoldMoreSharp";
import { IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import blank from "../assets/images/forms-blank.png";
import uuid from "react-uuid";
import { useNavigate } from "react-router-dom";

function Template() {
  const navigate = useNavigate();
  const createForm = () => {
    const id = uuid();
    // console.log(id);
    navigate("/form/" + id);
  };
  return (
    // Template section
    <div className="bg-[#f4f4f9] pb-10 pt-2">
      {/* Template top */}
      <div className="px-4 sm:px-8 md:px-20 lg:px-40 flex flex-col md:flex-row items-center justify-between">
        {/* Template left */}
        <div className="mb-4 md:mb-0">
          <span className="text-xl md:text-2xl font-medium text-slate-700">
            Start new form
          </span>
        </div>
        {/* Template right */}
        <div className="flex items-center space-x-4">
          {/* Gallery button */}
          <div className="flex items-center text-sm md:text-base bg-transparent">
            Template gallery
            <UnfoldMoreSharpIcon className="ml-1" />
          </div>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      {/* Template body */}
      <div className="px-4 sm:px-8 md:px-20 lg:px-40 mt-6 flex flex-wrap items-center gap-4">
        {/* Card */}
        <div className="flex flex-col items-center" onClick={createForm}>
          <img
            src={blank}
            alt="no image"
            className="h-[120px] w-[140px] cursor-pointer box-border rounded-md border border-[#6E2594] hover:scale-105 transition-transform duration-200"
          />
          <span className="mt-2 text-sm md:text-base text-slate-800">
            Blank
          </span>
        </div>
      </div>
    </div>
  );
}

export default Template;
