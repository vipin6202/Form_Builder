import React from "react";
import Paper from "@mui/material/Paper";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

function CenterTabs() {
  return (
    <Paper className="w-full">
      <Tabs
        textColor="primary"
        indicatorColor="primary"
        centered
        className="w-full"
      >
        <Tab
          label="Question"
          className="text-sm text-gray-600 capitalize font-semibold"
        />
        <Tab
          label="Response"
          className="text-sm text-gray-600 capitalize font-semibold"
        />
      </Tabs>
    </Paper>
  );
}

export default CenterTabs;
