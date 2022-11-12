import React, { useEffect, useState } from 'react'
import { CircularProgress, Container, Grid, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getData } from '../../config/firebasemethod';
import loaderImage from "../../assets/loader.gif";



export default function Enrolled_Students() {

    let [stdData, setStdData] = useState([])
    const [isLoading, setisLoading] = useState(true)

    let sendStdData = () => {
        setisLoading(true)
        getData(`studentsRecord/`)
            .then((res) => {
                setisLoading(false)
                setStdData(res)
                console.log(res)
            })
            .catch((err) => {
                setisLoading(false)
                alert(err)
            })
    }
    useEffect(() => { sendStdData() }, [])

    return (
        <>
            <Container sx={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;", backgroundColor: "white", padding: "15px", borderRadius: "5px", width: { xs: "100%", md: "100%" } }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={12}>
                        <Typography variant='h5' sx={{ fontWeight: "bold" }}>Enrolled Students</Typography>
                    </Grid>


                    <Grid item xs={12} sm={12} md={12} sx={{ overflow: "hidden", width: { xs: "300px", md: "100%", lg: "100%" } }}>

                        {isLoading ? <img src={loaderImage} width='100vw' alt='loader' />
                            :
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
                                                    >
                                                        <TableCell component="th" scope="row">
                                                            {`${row.firstName} ${row.lastName}`}
                                                        </TableCell>
                                                        <TableCell align="right">{row.fatherName}</TableCell>
                                                        <TableCell align="right">{row.contact}</TableCell>
                                                        <TableCell align="right">{row.course}</TableCell>
                                                        <TableCell align="right">{row.section}</TableCell>
                                                        <TableCell align="right">{row.cnic}</TableCell>
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
                        }
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}