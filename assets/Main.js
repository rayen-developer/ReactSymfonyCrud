import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import ProjectList from "./pages/ProjectList";
import ProjectCreate from "./pages/ProjectCreate";
import ProjectEdit from "./pages/ProjectEdit";
import ProjectShow from "./pages/ProjectShow";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<ProjectList />} />
        <Route path="/create" element={<ProjectCreate />} />
        <Route path="/edit/:id" element={<ProjectEdit />} />
        <Route path="/show/:id" element={<ProjectShow />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
