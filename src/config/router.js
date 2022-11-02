import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../screens/Dashboard";
import Home from "../screens/Home";
import Login from "../screens/login";
import Signup from "../screens/signup";
import NotFound from "../screens/NotFound";
import Student_Form from "../screens/Student Form";

function AppRouter() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="signup" element={<Signup />} />
          <Route path="home/*" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="dashboard/*" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Student_Form />} />
        </Routes>
      </Router>
    </>
  );
}

export default AppRouter;
