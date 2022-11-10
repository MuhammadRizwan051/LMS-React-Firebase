// import { Grid, Typography } from '@mui/material'
// import { Box } from '@mui/system'
// import React, { useEffect, useState } from 'react'
// import MyButton from '../Component/Button'
// import Input from '../Component/Input'
// import SelectBox from '../Component/Select'
// import { getData } from '../config/firebasemethod'

// function Result() {

//   let [allResults, setAllResults] = useState([])
//   let [selectedCourse, setSelectedCourse] = useState("")
//   let [dropDownList, setDropDownList] = useState([])
//   let [resultTableData, setResultTableData] = useState([])
//   let [rollNum, setRollNum] = useState("")
//   let [courseResults, setCourseResults] = useState([])
//   let [studentResult, setStudentResult] = useState([])


//   let getResultData = () => {
//     getData('results')
//       .then((res) => {
//         setAllResults(res)
//         console.log(res)
//         let arr = res.filter((x) => x.isShowResult)
//         setAllResults([...arr])
//         console.log(arr)
//       })
//       .catch((err) => {
//         console.log(err)
//       })
//   }

//   useEffect(() => {
//     getResultData()
//   }, [])


//   let showResult = (e) => {
//     setSelectedCourse(e)
//     console.log(selectedCourse)
//     let arr = allResults.find((x) => x.course == selectedCourse)
//     setCourseResults([...arr.result])
//   }

//   let showstudentResult = () => {
//     // setRollNum(e)
//     // console.log(rollNum)
//     let arr = courseResults.filter((x) => x.rollNumber.includes(rollNum));
//     console.log(arr);
//     setStudentResult(arr)
//   }



//   return (
//     <>
//       <Box>
//         <Typography variant='h3' sx={{ fontWeight: 'bold' }} color='primary'>Result</Typography>
//       </Box>
//       <Box>
//         <Grid container spacing={2}>
//           <Grid item md={5}>
//             <SelectBox label='Course' valueField='course' displayField='course' onChange={(e) => showResult(e.target.value)} datasource={allResults} />
//           </Grid>
//           <Grid item md={5}>
//             <Input label='Roll Number' />
//           </Grid>
//           <Grid item md={2} >
//             <MyButton label='Search' onClick={showstudentResult} />
//           </Grid>
//         </Grid>
//       </Box>
//     </>
//   )
// }

// export default Result






















import { Container, Grid, selectClasses, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import MyButton from '../Component/Button'
import SelectBox from '../Component/Select'
import Input from '../Component/Input'
import { getData } from '../config/firebasemethod'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';

export default function StudentResult() {

  let [allResults, setAllResults] = useState([])   // filtered data which showResult is true only
  let [courseResults, setCourseResults] = useState([])
  let [studentResult, setStudentResult] = useState([])
  
  let [selectedCourse, setSelectedCource] = useState("")
  let [rollNum, setRollNum] = useState("")

  let getResultData = () => {
    getData(`results/`)
      .then((res) => {
        console.log(res)
        let arr = res.filter((x) => x.isShowResult == true)
        setAllResults([...arr])
      })
      .catch((err) => {
        alert(err)
      })
  }
  console.log(allResults)

  let showResult = (e) => {
    setSelectedCource(e)
    let obj = allResults.find((x) => x.course == e);
    setCourseResults([...obj.result])
  }
  console.log(selectedCourse)
  console.log(courseResults)


  let showstudentResult = () => {
    // setRollNum(e)
    // console.log(rollNum)
    let obj = courseResults.filter((x) => x.rollNum.includes(rollNum));
    console.log(obj);
    setStudentResult(obj)
  }
  console.log(studentResult)
  useEffect(() => {
    getResultData()
  }, [])
  return (
    < >

      <Container sx={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;", backgroundColor: "white", padding: "15px", borderRadius: "5px", width: { xs: "100%", md: "100%" } }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12}>
            <Typography variant='h5' sx={{ fontWeight: "bold" }}>Search Result</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={5}>
            <SelectBox
              label="Cource"
              valueField="course"
              displayField="course"
              onChange={(e) => showResult(e.target.value)}
              datasource={allResults}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={5}>
            <Input
              label="Enter Roll No"
              onChange={(e) => setRollNum(e.target.value)}

            />
          </Grid>
          <Grid item xs={12} sm={12} md={2}>
            <MyButton
              onClick={showstudentResult}
              label="Search"
              variant='contained'
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} sx={{ overflow: "hidden", width: { xs: "300px", md: "100%", lg: "100%" } }}>
            <TableContainer component={Paper}>
              <Table size="small" aria-label="a dense table">
                {studentResult && studentResult.length > 0 ? studentResult.map((row, i) => (
                  <>
                    <TableBody>
                      <TableRow align="left">
                        <TableCell align="left">Name </TableCell>
                        <TableCell align="left">{row.name}</TableCell>
                      </TableRow>
                      <TableRow align="left">
                        <TableCell align="left">Roll number </TableCell>
                        <TableCell align="left">{row.rollNum}</TableCell>
                      </TableRow>
                      <TableRow align="left">
                        <TableCell align="left">Result </TableCell>
                        <TableCell align="left">{row.result}</TableCell>
                      </TableRow>
                      <TableRow align="left">
                        <TableCell align="left">Marks </TableCell>
                        <TableCell align="left">{row.marks}</TableCell>
                      </TableRow>
                    </TableBody>
                  </>
                )) : (
                  ""
                )

                }
              </Table>
            </TableContainer>

          </Grid>
        </Grid>
      </Container></>
  )
}