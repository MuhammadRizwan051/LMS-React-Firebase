import { Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import MyButton from '../../Component/Button'
import Input from '../../Component/Input'
import SelectBox from '../../Component/Select'

function CourseForm() {

  let create = () => {

  }

  let available = () => {

  }

  return (
    <>
      <Typography variant='h3' sx={{ fontWeight: 'bold', fontFamily: 'cursive' }}>Courses</Typography>
      <MyButton label='Create Course' onClick={create}></MyButton>
      <MyButton label='Available Courses' onClick={available}></MyButton>

      <Container>
        <Grid container mt={4} spacing={2}>
          <Grid item md={6} mb={2}>
            <Input label='Course Name' />
          </Grid>
          <Grid item md={6}>
            <SelectBox label='Course Duration' datasource={[]} />
          </Grid>
          <Grid item md={6}>
            <Input label='Number of Quizes' />
          </Grid>
        </Grid>
      </Container>
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