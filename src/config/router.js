import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "../screens/Home";
import Login from "../screens/login";
import Signup from "../screens/signup";
import NotFound from "../screens/NotFound";
import Student_Form from "../screens/Student Form";
import Quiz from "../screens/Quiz";
import Result from "../screens/result";
import CourseForm from "../screens/Admin_screens/courseForm";
import StudentProfile from "../screens/StudentProfile";
import Admin from "../screens/Admin";

function AppRouter() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="signup" element={<Signup />} />
          <Route path="/" element={<Login />} />
          <Route path="studentProfile/:id" element={<StudentProfile />} />
          
          <Route path="quiz" element={<Quiz />} />
          <Route path="course" element={<CourseForm />} />
          <Route path="result" element={<Result />} />
          <Route path="form" element={<Student_Form />} />
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="admin/*" element={<Admin />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
      </Router>
    </>
  );
}

export default AppRouter;
