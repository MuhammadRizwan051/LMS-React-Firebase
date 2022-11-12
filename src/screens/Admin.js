import React, { useEffect, useState } from 'react'
import MainLayout from './mainLayout'
import Quiz from './Quiz'
import Enrolled_Students from './Admin_screens/Enrolled_Students'
import CourseForm from './Admin_screens/courseForm'
// import CreateQuiz from './Admin_screens/createQuiz'
import CreateResult from './Admin_screens/createResult'
import Countries from './Admin_screens/countries'
import Cities from './Admin_screens/cities'
import { checkUser } from '../config/firebasemethod'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

function Admin() {

    let navigate = useNavigate()
    const location = useLocation();
    const params = useParams();
    let [userId, setUserId] = useState('');


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
            element: <Quiz />
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


    useEffect(() => {
        // if (location.state && location.state.id) {
        //     // setUser(location.state)
        //     console.log(location.state)
        //     // console.log(Object.values(location.state.id))
        // } else {
        //     // navigate("/");
        // };
        checkUser()
            .then((res) => {
                if (params.id == res.uid) {
                    setUserId(res.uid);
                    console.log(res)
                    // getUserData();
                }   
                else {
                    navigate("/")
                }
            }).catch((err) => {
                console.log(err)
            })
    }, [])



    return (
        <>
            <h1>Admin</h1>
            <MainLayout datasource={list} nodeName='/' userId={userId} />
        </>
    )
}

export default Admin