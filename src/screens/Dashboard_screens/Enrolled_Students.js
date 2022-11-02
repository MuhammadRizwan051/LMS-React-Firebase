import React, { useEffect, useState } from 'react'
import { CircularProgress, Container, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material';
// import MyTextField from '../components/mytextfield';
// import { getData } from '../../config/firebasemethod';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getDatabase, onValue, ref } from 'firebase/database';
import app from '../../config/firebaseconfig';



export default function Enrolled_Students() {
    // let [module, setModule] = useState({});
    let [stdData, setStdData] = useState([])

    const database = getDatabase(app)
    console.log(stdData)

    useEffect(() => {
        const reference = ref(database, 'studentsRecord')
        onValue(reference, e => {
            const val = e.val()
            setStdData(Object.values(val))
        })
    }, [])
    return (
        <>
            <Container sx={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;", backgroundColor: "white", padding: "15px", borderRadius: "5px", width: { xs: "100%", md: "100%" } }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={12}>
                        <Typography variant='h5' sx={{ fontWeight: "bold" }}>Enrolled Students</Typography>
                    </Grid>


                    <Grid item xs={12} sm={12} md={12} sx={{ overflow: "hidden", width: { xs: "300px", md: "100%", lg: "100%" } }}>

                        {/* <table>
                            <tr>
                                <td>Full Name</td>
                                <td>Father Name</td>
                                <td>Contact</td>
                                <td>Course</td>
                                <td>Section</td>
                                <td>CNIC</td>
                            </tr>
                            {
                                stdData.length > 0 ?
                                    stdData.map((row, i) => (
                                        <tr
                                            key={i}
                                        // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <td component="th" scope="row">
                                                {`${row.firstName} ${row.lastName}`}
                                            </td>
                                            <td align="right">{row.fatherName}</td>
                                            <td align="right">{row.contact}</td>
                                            <td align="right">{row.course}</td>
                                            <td align="right">{row.section}</td>
                                            <td align="right">{row.cnic}</td>
                                        </tr>
                                    ))
                                    : (
                                        <tr>
                                            <td align="center"><CircularProgress /></td>
                                            <td align="center"><CircularProgress /></td>
                                            <td align="center"><CircularProgress /></td>
                                            <td align="center"><CircularProgress /></td>
                                            <td align="center"><CircularProgress /></td>
                                            <td align="center"><CircularProgress /></td>
                                        </tr>

                                    )
                            }
                        </table> */}

                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align='center'>Full Name</TableCell>
                                        <TableCell align="center">Father</TableCell>
                                        <TableCell align="center">Contact</TableCell>
                                        <TableCell align="center">Course</TableCell>
                                        <TableCell align="center">Section</TableCell>
                                        <TableCell align="center">CNIC</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        stdData.length > 0 ?
                                            stdData.map((row, i) => (
                                                <TableRow
                                                    key={i}
                                                // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell component="th" scope="row">
                                                        {`${row.StudentInfo.firstName} ${row.StudentInfo.lastName}`}
                                                    </TableCell>
                                                    <TableCell align="right">{row.StudentInfo.fatherName}</TableCell>
                                                    <TableCell align="right">{row.StudentInfo.contact}</TableCell>
                                                    <TableCell align="right">{row.StudentInfo.course}</TableCell>
                                                    <TableCell align="right">{row.StudentInfo.section}</TableCell>
                                                    <TableCell align="right">{row.StudentInfo.cnic}</TableCell>
                                                </TableRow>
                                            ))
                                            : (
                                                <TableRow>
                                                    <TableCell align="center"><CircularProgress /></TableCell>
                                                    <TableCell align="center"><CircularProgress /></TableCell>
                                                    <TableCell align="center"><CircularProgress /></TableCell>
                                                    <TableCell align="center"><CircularProgress /></TableCell>
                                                    <TableCell align="center"><CircularProgress /></TableCell>
                                                    <TableCell align="center"><CircularProgress /></TableCell>
                                                </TableRow>

                                            )
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>

                    </Grid>
                </Grid>
            </Container>
        </>
    )
}