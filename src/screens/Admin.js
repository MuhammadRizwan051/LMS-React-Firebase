import React, { useEffect, useState } from 'react'
import MainLayout from './mainLayout'
import Enrolled_Students from './Admin_screens/Enrolled_Students'
import CourseForm from './Admin_screens/courseForm'
// import CreateQuiz from './Admin_screens/createQuiz'
import CreateResult from './Admin_screens/createResult'
import Countries from './Admin_screens/countries'
import Cities from './Admin_screens/cities'
import { checkUser } from '../config/firebasemethod'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import CreateQuiz from './Admin_screens/createQuiz'

function Admin() {

    // const params = useParams();
    // const paramsId = params.id
    // console.log(paramsId)
    const [userId, setUserId] = useState('')

    let navigate = useNavigate()
    // const location = useLocation();
    // let [userId, setUserId] = useState('');


    const list = [
        {
            name: 'Enrolled Students',
            url: 'enrolled-students',
            element: <Enrolled_Students />
        },
        {
            name: 'Course',
            url: 'courseform',
            element: <CourseForm />
        },
        {
            name: 'Quiz',
            url: 'quizform',
            element: <CreateQuiz />
        },
        {
            name: 'Result',
            url: 'result',
            element: <CreateResult />
        },
        {
            name: 'Countries',
            url: 'countries',
            element: <Countries />
        },
        {
            name: 'Cities',
            url: 'cities',
            element: <Cities />
        },
    ]

    let checkAuth = () => {
        checkUser()
            .then((res) => {
                setUserId(res)
            })
            .catch((err) => {
                navigate('/')
            })
    }

    useEffect(() => {
        checkAuth()
    }, [])

    return (
        <>
            <h1>Admin</h1>
            <MainLayout datasource={list} nodeName='admin' profileNode={'adminProfile'} userId={userId}  />
        </>
    )
}

export default Admin