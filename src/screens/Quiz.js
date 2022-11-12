import { Box, Checkbox, Grid, Typography } from '@mui/material'
import { getDatabase, onValue, ref } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import MyButton from '../Component/Button'
import app from '../config/firebaseconfig'
import { getData } from '../config/firebasemethod'
import loaderImage from "../assets/loader.gif";


function Quiz() {
  let [indexNumber, setIndexNumber] = useState(0)
  let [quiz, setQuiz] = useState([])
  let [isLoader, setIsLoader] = useState(true)
  let [showResult, setShowResult] = useState(false)


  let getQuiz = () => {
    getData(`Quiz/`)
      .then((res) => {
        setIsLoader(false)
        setQuiz(res)
        console.log(res)
      })
      .catch((err) => {
        setIsLoader(false)
        alert(err)
      })
  }
  console.log(quiz)
  useEffect(() => { getQuiz() }, [])

  let next = () => {
    setIndexNumber(indexNumber + 1)
    if (indexNumber + 1 === quiz[0].questionsArray.length) {
      setShowResult(true)
    }
  }

  return (
    <>

      {showResult ? (
        <>
          <h2>Hello</h2>
        </>
      ) :
        <>
          {isLoader ? (
            <>
              <img src={loaderImage} width='100vw' alt='loader' />
              {/* <CircularProgress /> */}
            </>
          ) :
            <Grid container>
              <Typography variant='h2' style={{ margin: '0 auto', fontFamily: 'cursive' }}>Quiz</Typography>
              {/* {quiz.length > 0 && quiz.map((e, i) => ( */}
              <>
                <Grid container mb={5} pt={3} pb={5} sx={{ justifyContent: 'center' }}>
                  <Box sx={{ textAlign: 'center', width: 1 }} pb={2}>
                    <Typography variant='h5' color='error' sx={{ fontWeight: 'bold' }}>{`${indexNumber + 1} of ${quiz[0].questionsArray.length}`}</Typography>
                  </Box>
                  {/* <Box sx={{ textAlign: 'center', width: 1 }} pb={2}>
                  <Typography variant='h5' color='error' sx={{ fontWeight: 'bold' }}>{` Question: ${i + 1}`}</Typography>
                </Box> */}
                  {/* {e.questions.map((value, index) => ( */}
                  <>
                    <Grid item md={6} mx={3} mb={4} sx={{ textAlign: 'left', borderRadius: '15px', backgroundColor: 'lightGrey' }}>
                      <Box px={3} py={1} >
                        <Typography variant='h6'>{quiz[0].questionsArray[indexNumber].question}</Typography>
                      </Box>
                    </Grid>
                    {quiz[0].questionsArray[indexNumber].options.map((y, i) => (
                      <Grid item md={6} mt={2} mx={3} sx={{ textAlign: 'left', borderRadius: '15px', borderBottom: '1px solid black' }}>
                        <Box px={1} py={0} >
                          <Typography variant='h6'><Checkbox size='small' />{y}</Typography>
                        </Box>
                      </Grid>
                    ))}
                    <Grid item md={6} mt={2} mx={3} sx={{ textAlign: 'right' }}>
                      <MyButton label={indexNumber + 1 == quiz[0].questionsArray.length ? "Finish" : "Next" } onClick={next} />
                    </Grid>
                  </>
                  {/* ))} */}
                </Grid>
              </>
              {/* ))} */}
            </Grid>
          }
        </>
      }


    </>
  )
}

export default Quiz