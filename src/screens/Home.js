import React, { useEffect, useState } from 'react'
// import ResponsiveAppBar from '../AppBar'
import { BrowserRouter as Router, Routes, Route, useParams, useNavigate } from "react-router-dom";
// import Student_Form from './Student Form';
// import Quiz from './Quiz';
// import { checkUser, getData, sendData } from '../config/firebasemethod';
// import Input from '../Component/Input';
// import MyButton from '../Component/Button';



function Home() {

  const params = useParams()
  console.log(params)

  const [txt, setTxt] = useState('')
  const [userId, setUserId] = useState('')
  const [li, setLi] = useState([])
  const navigate = useNavigate()

  // let addTodo = () => {
  //   setTxt('')
  //   console.log(txt)
  //   sendData({
  //     txt: txt,
  //     time: new Date(),
  //     userId: userId
  //   }, `todos/${userId}`)
  //     .then((userId) => {
  //       console.log(userId)
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }

  // let getTodosData = () => {
  //   getData(`todos/${userId}`)
  //   // Agr id pass ki to object miley ga warna array miley ga
  //   // getData(`todos/${userId}`, ".....")
  //     .then((res) => {
  //       setLi(res)
  //       console.log(res)
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }



  // useEffect(() => {
  //   checkUser().then((res) => {
  //     if (params.id == res) {
  //       getTodosData()
  //       setUserId(res)
  //     }
  //     else {
  //       navigate("/login")
  //     }
  //   }).catch((err) => {
  //     console.log(err)
  //   })
  // }, [])

  return (
    <>
      <h1>Home Page</h1>
      {/* <Input label='Todo' value={txt} onChange={(e) => setTxt(e.target.value)} />
      <MyButton label='Add' onClick={addTodo} /> */}
    </>
  )
}

export default Home 