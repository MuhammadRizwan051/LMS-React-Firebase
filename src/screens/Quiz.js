import { getDatabase, onValue, ref } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import app from '../config/firebaseconfig'

function Quiz() {
    const database = getDatabase(app)
    let [quiz, setQuiz] = useState([])
    console.log(quiz)


    useEffect(() => {
        const reference = ref(database, 'quizData')
        onValue(reference, e => {
            const val = e.val()
            setQuiz(Object.values(val))
        })
    }, [])
  return (
    <>
    <h1>Quiz</h1>
    </>
  )
}

export default Quiz