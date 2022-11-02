import React from 'react'
import ResponsiveAppBar from '../AppBar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Student_Form from './Student Form';


function Home() {
  return (
    <>
      <ResponsiveAppBar />
      {/* <Student_Form /> */}
      <Routes>
        <Route path="registration-form" element={<Student_Form />} />
      </Routes>

    </>
  )
}

export default Home