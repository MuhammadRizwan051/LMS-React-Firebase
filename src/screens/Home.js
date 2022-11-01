import React from 'react'
import ResponsiveAppBar from '../AppBar'
import Student_Form from './Dashboard_screens/Student Form'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


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