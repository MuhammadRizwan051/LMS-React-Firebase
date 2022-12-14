import React, { useEffect, useState } from 'react'
import Input from '../Component/Input'
import { Button, Grid, InputLabel, Typography } from '@mui/material'
import SelectBox from '../Component/Select'
import { Box } from '@mui/system'
import '../App.css'
import { getData, sendData } from '../config/firebasemethod'
import { setDate } from '../config/core/helperMethod'
// import Date_Picker from '../../Component/Date_Picker'


function Student_Form() {

  const [model, setModel] = useState({})

  let fillModel = (key, val) => {
    model[key] = val
    setModel({ ...model })
  }

  let addStudent = () => {
    model.registrationDate = setDate(new Date())
    model.isFeeSubmmitted = false
    model.isApproved = false
    model.isActive = false

    console.log(model)
    sendData(model, `studentsRecord/`)
      .then((StudentInfo => {
        console.log(StudentInfo);
        alert('Your Form has been submitted')
      }))
      .catch((err => {
        console.log(err);
        alert('Plz! submit again')
      }))
  }


  const [dtSource, setDtSource] = useState([])

  let getCourseData = () => {
    getData('courses').then((res) => {
      console.log(res)
      setDtSource(res)
    }).catch((err) => {
      console.log(err)
    })
  }


  useEffect(() => {
    getCourseData()
  }, [])

  console.log(dtSource)

  return (
    <>
      <Box className='form_container' >
        <Typography variant='h3' color='error' mt={5} sx={{ fontWeight: 'bold' }}>Student Registration Form</Typography>
        <Grid container spacing={2} p={2}>
          <Grid item mt={5} md={6} sm={12} xs={12}>
            <Input label='First Name' onChange={(e) => fillModel('firstName', e.target.value)} value={model.firstName} required={true} />
            {/* <Input label='First Name' onChange={(e) => setModel({ ...model, firstName: e.target.value })} /> */}
          </Grid>
          <Grid item mt={5} md={6} sm={12} xs={12}>
            <Input label='Last Name' onChange={(e) => fillModel('lastName', e.target.value)} value={model.lastName} />
          </Grid>
          <Grid item mt={5} md={6} sm={12} xs={12}>
            <Input label='Email' type='email' onChange={(e) => fillModel('email', e.target.value)} value={model.email} />
          </Grid>
          <Grid item mt={5} md={6} sm={12} xs={12}>
            <SelectBox label='Course' onChange={(e) => fillModel('course', e.target.value)} datasource={[]} displayField='courseName' valueField='courseName' nodeName='courses' />
            {/* <SelectBox label='Course' onChange={(e) => fillModel('course', e.target.value)} datasource={[
               {
                 id: 'wm',
                 fullName: 'Web And Mobile'
               }
             ]} /> */}
          </Grid>
          <Grid item mt={5} md={6} sm={12} xs={12}>
            {/* <InputLabel id="demo-simple-select-label">Section</InputLabel> */}
            <SelectBox label='Section' onChange={(e) => { fillModel('section', e.target.value) }} datasource={[
              {
                id: 'a',
                fullName: 'A'
              },
              {
                id: 'b',
                fullName: 'B'
              }
            ]} />
          </Grid>
          <Grid item mt={5} md={6} sm={12} xs={12}>
            <Input label='Contact' onChange={(e) => fillModel('contact', e.target.value)} value={model.contact} />
          </Grid>
          <Grid item mt={5} md={6} sm={12} xs={12}>
            <Input label='CNIC' onChange={(e) => fillModel('cnic', e.target.value)} value={model.cnic} />
          </Grid>
          <Grid item mt={5} md={6} sm={12} xs={12}>
            <Input label='Father Name' onChange={(e) => fillModel('fatherName', e.target.value)} value={model.fatherName} />
          </Grid>
          <Grid item mt={5} md={6} sm={12} xs={12}>
            <Input label='Father CNIC' onChange={(e) => fillModel('fathercnic', e.target.value)} value={model.fathercnic} />
          </Grid>
          <Grid item mt={5} md={6} sm={12} xs={12}>
            <Input label='Father Contact' onChange={(e) => fillModel('fatherContact', e.target.value)} value={model.fatherContact} />
          </Grid>
          <Grid item mt={5} md={6} sm={12} xs={12}>
            <Input label='Emergency Contact' onChange={(e) => fillModel('emergencyContact', e.target.value)} value={model.emergencyContact} />
          </Grid>
          {/* <Grid item mt={5} md={3}>
          <Date_Picker />
        </Grid> */}
          <Grid item mt={5} xs={12}>
            <Button variant='contained' sx={{ width: 1 }} onClick={addStudent} size='large'>Submit</Button>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Student_Form