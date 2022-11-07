import { Box, Grid } from '@mui/material'
import React, { useState } from 'react'
import MyButton from '../../Component/Button'
import SelectBox from '../../Component/Select'
import SMSwitch from '../../Component/Switch'
// import SMSwitch from '../../Component/Switch'

function CreateResult() {
  const [model, setModel] = useState({})
  const [courseStatus, setCourseStatus] = useState(false)
  const [resultData, setResultData] = useState([
    {
      name:'ABC',
      marks: 80,
      rollNum: 'ABC123',
      result:'Pass'
    },
    {
      name:'ABC',
      marks: 80,
      rollNum: 'ABC123',
      result:'Pass'
    },
    {
      name:'ABC',
      marks: 80,
      rollNum: 'ABC123',
      result:'Pass'
    },
  ])

  let submitForm = () => {
    model.isShowResult = courseStatus
    model.result = resultData
    console.log(model)
  }

  return (
    <>
      <Box>
        <Grid container>
          <Grid item md={4}>
            <SMSwitch label='ABC' onChange={(e) => setCourseStatus(e.target.checked)} />
          </Grid>
          <Grid item md={4}>
            <SelectBox label='Course' onChange={(e)=>setModel({...model, course: e.target.value})} datasource={[
              {
                id: 'wm',
                fullName: 'Web & Mobile'
              },
              {
                id: 'gd',
                fullName: 'Graphic Designing'
              },
            ]} />
          </Grid>
          <Grid item md={4}>
            <MyButton label='Submit' variant='contained' onClick={submitForm} />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default CreateResult