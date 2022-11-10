import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { getData } from '../config/firebasemethod'

function Result() {

  const [allResults, setAllResults] = useState([])
  const [dropDownList, setDropDownList] = useState([])

  let getResultData = () => {
    getData('results')
      .then((res) => {
        setAllResults(res)
        console.log(res)
        let arr = res.filter((x) => x.isShowResult)
        setAllResults([...arr])
        console.log(arr)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getResultData()
  }, [])

  return (
    <>
      <Box>
        <Typography variant='h3' sx={{fontWeight:'bold'}} color='primary'>Result</Typography>
      </Box>
      <Box>
        <Grid container>
          <Grid item md={6}>

          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Result