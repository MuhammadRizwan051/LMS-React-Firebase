import { Grid, Paper, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React, { useEffect, useState } from 'react'
import MyButton from '../../Component/Button'
import Input from '../../Component/Input'
import SelectBox from '../../Component/Select'
import SMGrid from '../../Component/SMGrid'
import { getData, sendData } from '../../config/firebasemethod'
import loaderImage from "../../assets/loader.gif";


function CourseForm() {
  let [model, setModel] = useState({})
  let [isCreateCourse, setIsCreateCourse] = useState(false)
  let [isShowCourse, setIsShowCourse] = useState(false)
  let [isLoading, setIsLoading] = useState(true)


  let create = () => {
    setIsCreateCourse(true)
    setIsShowCourse(false)
  }

  let available = () => {
    setIsShowCourse(true)
    setIsCreateCourse(false)
  }

  let fillModel = (key, val) => {
    model[key] = val
    setModel({ ...model })
  }

  let submit = () => {
    console.log(model)

    // Send data to firebase
    sendData(model, `courses/`)
      .then((res) => {
        console.log(res);
        alert('Course form has been submitted')
      })
      .catch((err) => {
        console.log(err);
        alert('There is an error while submitting the form, Plz! submit again')
      })
  }

  let [course, setCourse] = useState("")

  let getCourse = () => {
    setIsLoading(true)
    getData(`courses/`)
      .then((res) => {
        setIsLoading(false)
        // setIsLoader(false)
        setCourse(res)
        console.log(res)
      })
      .catch((err) => {
        setIsLoading(false)
        // setIsLoader(false)
        alert(err)
      })

  }
  console.log(course)
  useEffect(() => { getCourse() }, [])

  return (
    <>
      <Typography variant='h3' sx={{ fontWeight: 'bold', fontFamily: 'cursive' }}>Courses</Typography>
      <MyButton label='Create Course' onClick={create}></MyButton>
      <MyButton label='Available Courses' onClick={available}></MyButton>

      {isCreateCourse &&
        <Container>
          <Paper>
            <Grid container mt={4} spacing={2} padding={5}>
              <Grid item md={6} mb={2}>
                <Input label='Course Name' onChange={(e) => fillModel('courseName', e.target.value)} />
              </Grid>
              <Grid item md={3}>
                <SelectBox label='Course Duration (Months)' onChange={(e) => fillModel('courseDuration', e.target.value)} datasource={[
                  {
                    id: 4,
                    fullName: 4
                  },
                  {
                    id: 8,
                    fullName: 8
                  }
                ]} />
              </Grid>
              <Grid item md={3}>
                <Input label='Number of Quizes' onChange={(e) => fillModel('numberOfQuizes', e.target.value)} />
              </Grid>
              <Grid item md={3} mb={2}>
                <SelectBox label='Form Open (Y/N)' onChange={(e) => fillModel('formOpen', e.target.value)} datasource={[
                  {
                    id: 'Y',
                    fullName: "Yes"
                  },
                  {
                    id: 'N',
                    fullName: "No"
                  }
                ]} />
              </Grid>
              <Grid item md={3} mb={2}>
                <Input label='Fee in Rupees' onChange={(e) => fillModel('feeInRupees', e.target.value)} />
              </Grid>
              <Grid item md={6} mb={2}>
                <Input label='Lead Trainer ID' onChange={(e) => fillModel('leadTrainerID', e.target.value)} />
              </Grid>
              <Grid item md={6} mb={2}>
                <SelectBox label='Assistant Trainers' onChange={(e) => fillModel('assistantTrainers', e.target.value)} datasource={[
                  {
                    id: 'Abdul Basit Ahmed',
                    fullName: "Abdul Basit Ahmed"
                  },
                  {
                    id: 'Ghous Ahmed',
                    fullName: "Ghous Ahmed"
                  }
                ]} />
              </Grid>
              <Grid item md={12} mb={2}>
                <MyButton label='Submit' onClick={submit} />
              </Grid>
            </Grid>
          </Paper>
        </Container>
      }

      {isShowCourse &&
        (isLoading ? <img src={loaderImage} style={{display:'block', margin: '0 auto', height:'100px'}} alt='loader' />
          :
          <Container>
            <Paper>
              <Grid container mt={4} spacing={2} padding={5}>
                <SMGrid datasource={course} onRowClick={(e) => console.log(e)} Cols={[
                  {
                    displayName: 'Course Name',
                    key: 'courseName'
                  },
                  {
                    displayName: 'Duration',
                    key: 'courseDuration'
                  },
                  {
                    displayName: 'Fees',
                    key: 'feeInRupees'
                  },
                  {
                    displayName: 'Form (Open/Close)',
                    key: 'formOpen'
                  },
                  {
                    displayName: 'Assistant Trainers',
                    key: 'assistantTrainers'
                  },
                  {
                    displayName: 'No of Quiz',
                    key: 'numberOfQuizes'
                  },
                  {
                    displayName: 'Lead Trainer ID',
                    key: 'leadTrainerID'
                  }
                ]} />
              </Grid>
            </Paper>
          </Container>
        )
      }

    </>
  )
}

export default CourseForm

// courseName
// course duration
// no of quizes (which is included in course)
// form open y/n
// Fee in Rupees
// Trainer Id
// Assistant Trainer Array