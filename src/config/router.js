import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../screens/Dashboard";
import Home from "../screens/Home";
import Login from "../screens/login";
import Signup from "../screens/signup";
import NotFound from "../screens/NotFound";
import Student_Form from "../screens/Student Form";
import Quiz from "../screens/Quiz";

function AppRouter() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="/" element={<Student_Form />} />
          <Route path="/:id" element={<Home />} />
          <Route path="admin/*" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default AppRouter;
