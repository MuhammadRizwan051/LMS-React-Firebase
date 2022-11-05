import React from 'react'
// import ResponsiveAppBar from '../AppBar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Student_Form from './Student Form';
import Quiz from './Quiz';


function Home() {
  return (
    <>
    <h1>Home Page</h1>
      {/* <ResponsiveAppBar /> */}
      {/* <Student_Form /> */}
      <Routes>
        <Route path="registration-form" element={<Student_Form />} />
        <Route path="quiz" element={<Quiz />} />
      </Routes>

    </>
  )
}

export default Home