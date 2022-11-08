import { Box, Checkbox, Grid, Typography } from '@mui/material'
import { getDatabase, onValue, ref } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import MyButton from '../Component/Button'
import app from '../config/firebaseconfig'
import { getData } from '../config/firebasemethod'

function Quiz() {


  let [indexNumber, setIndexNumber] = useState(0)
  let [quiz, setQuiz] = useState([])


  let getQuiz = () => {
    getData(`Quiz/`)
      .then((res) => {
        setQuiz(res)
        console.log(res)
      })
      .catch((err) => {
        alert(err)
      })
  }
  console.log(quiz)
  useEffect(() => { getQuiz() }, [])

  let next = () => {
    setIndexNumber(indexNumber + 1)
  }

  return (
    <>
      <h1>Quiz</h1>

      <Grid container>

        {quiz.map((e, i) => (
          <>
            <Grid container mb={5} pt={3} pb={5} sx={{ justifyContent: 'center' }}>
              <Box sx={{ textAlign: 'center', width: 1 }} pb={2}>
                <Typography variant='h5' color='error' sx={{ fontWeight: 'bold' }}>{` Question: ${i + 1}`}</Typography>
              </Box>
              {e.questions.map((value, index) => (
                <>
                  <Grid item md={6} mx={3} mb={4} sx={{ textAlign: 'left', borderRadius: '15px', backgroundColor: 'lightGrey' }}>
                    <Box px={3} py={1} >
                      <Typography variant='h6'>{value.question}</Typography>
                    </Box>
                  </Grid>
                  {value.options.map((o, i) => (
                    <Grid item md={6} mt={2} mx={3} sx={{ textAlign: 'left', borderRadius: '15px', borderBottom: '1px solid black' }}>
                      <Box px={1} py={0} >
                        <Typography variant='h6'><Checkbox size='small' />{o}</Typography>
                      </Box>
                    </Grid>
                  ))}
                  <Grid item md={6} mt={2} mx={3} sx={{ textAlign: 'right' }}>
                    <MyButton label='Next' onClick={next} />
                  </Grid>
                </>
              ))}
            </Grid>
          </>
        ))}
      </Grid>



    </>
  )
}

export default Quiz