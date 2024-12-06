import React, { useState } from "react";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import SettingsSharpIcon from "@mui/icons-material/SettingsSharp";
import HelpOutlineSharpIcon from "@mui/icons-material/HelpOutlineSharp";
import {
  Drawer,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import formimage from "../assets/images/forms-icon.png";
import docimage from "../assets/images/google-docs--v1.png";
import driveimage from "../assets/images/google-drive--v1.png";
import excelsheetimage from "../assets/images/google-sheets.png";
import slidesimage from "../assets/images/google-slides.png";

// Component to display the side navigation bar
export default function TemporaryDrawer() {
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => () => {
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className="w-64"
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
    >
      <Divider />
      <List>
        <ListItem className="logo_title">
          <ListItemText>
            <span className="text-blue-600 font-bold text-2xl">G</span>
            <span className="text-red-500 font-medium text-2xl">o</span>
            <span className="text-yellow-400 font-medium text-2xl">o</span>
            <span className="text-blue-600 font-medium text-2xl">g</span>
            <span className="text-green-600 font-medium text-2xl">l</span>
            <span className="text-red-500 font-medium text-2xl mr-2">e</span>
            <span className="text-gray-600 font-medium text-2xl"> Docs</span>
          </ListItemText>
        </ListItem>
      </List>

      <Divider />
      <List className="mx-2 mt-4">
        {/* Docs Item */}
        <ListItem className="flex items-center space-x-2 py-2 hover:bg-gray-200 rounded-r-lg">
          <img src={docimage} alt="Docs" className="w-6 h-6" />
          <div className="ml-4 text-sm font-semibold text-gray-700">Docs</div>
        </ListItem>

        {/* Sheets Item */}
        <ListItem className="flex items-center space-x-2 py-2 hover:bg-gray-200 rounded-r-lg">
          <img src={excelsheetimage} alt="Sheets" className="w-6 h-6" />
          <div className="ml-4 text-sm font-semibold text-gray-700">Sheets</div>
        </ListItem>

        {/* Slides Item */}
        <ListItem className="flex items-center space-x-2 py-2 hover:bg-gray-200 rounded-r-lg">
          <img src={slidesimage} alt="Slides" className="w-6 h-6" />
          <div className="ml-4 text-sm font-semibold text-gray-700">Slides</div>
        </ListItem>

        {/* Forms Item */}
        <ListItem className="flex items-center space-x-2 py-2 hover:bg-gray-200 rounded-r-lg">
          <img src={formimage} alt="Forms" className="w-6 h-6" />
          <div className="ml-4 text-sm font-semibold text-gray-700">Forms</div>
        </ListItem>
      </List>

      <Divider />
      <List className="mx-2 mt-4">
        {/* Settings Item */}
        <ListItem className="flex items-center space-x-2 py-2 hover:bg-gray-200 rounded-r-lg">
          <SettingsSharpIcon />
          <div className="ml-4 text-sm font-semibold text-gray-700">
            Settings
          </div>
        </ListItem>

        {/* Help & Feedback Item */}
        <ListItem className="flex items-center space-x-2 py-2 hover:bg-gray-200 rounded-r-lg">
          <HelpOutlineSharpIcon />
          <div className="ml-4 text-sm font-semibold text-gray-700">
            Help & Feedback
          </div>
        </ListItem>
      </List>

      <Divider />
      <List className="mx-2 mt-4">
        {/* Drive Item */}
        <ListItem className="flex items-center space-x-2 py-2 hover:bg-gray-200 rounded-r-lg">
          <img src={driveimage} alt="Drive" className="w-6 h-6" />
          <div className="ml-4 text-sm font-semibold text-gray-700">Drive</div>
        </ListItem>
      </List>
      <Divider />
    </div>
  );

  return (
    <div>
      <React.Fragment key={"left"}>
        <IconButton onClick={toggleDrawer("left", true)}>
          <MenuSharpIcon />
        </IconButton>
        <Drawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
