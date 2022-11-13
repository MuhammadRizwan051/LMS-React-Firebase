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

    const [userId, setUserId] = useState('')

    let navigate = useNavigate()


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
            url: 'createResult',
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
            <MainLayout datasource={list} profileNode={'adminProfile'} state={{ userId: userId}}  />
        </>
    )
}

export default Admin