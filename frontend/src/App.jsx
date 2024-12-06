import React from "react";
import Header from "./components/Header";
import Template from "./components/Template";
import Mainbody from "./components/Mainbody";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Formheader from "./components/Formheader";
import CenterTabs from "./components/Tabs";
import QuestionForm from "./components/QuestionForm";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Define route for /form */}
          <Route
            path="/form/:id"
            element={
              <>
                <Formheader />
                <CenterTabs />
                <QuestionForm />
              </>
            }
          />

          {/* Define route for / (home route) */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <Template />
                <Mainbody />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
