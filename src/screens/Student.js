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
import Quiz from './Quiz'
import StudentResult from './result'

function Student() {

    const [userId, setUserId] = useState('')
    const param = useParams()
    let navigate = useNavigate()


    const list = [
        {
            name: 'Quiz',
            url: 'quiz',
            element: <Quiz />
        },
        {
            name: 'Result',
            url: 'result',
            element: <StudentResult />
        }
    ]

    let checkAuth = () => {
        checkUser()
            .then((res) => {
                setUserId(res)
            })
            .catch((err) => {
                navigate('/login')
            })
    }

    useEffect(() => {
        checkAuth()
    }, [])

    return (
        <>
            <h1>Student</h1>
            <MainLayout datasource={list} profileNode={'studentProfile'} state={{ userId: userId}}  />
        </>
    )
}

export default Student