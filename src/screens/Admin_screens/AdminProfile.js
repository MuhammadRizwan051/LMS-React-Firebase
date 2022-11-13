import { Box, Divider, Grid, Paper, Typography } from '@mui/material';
import React from 'react'
import { useParams } from 'react-router-dom';

function AdminProfile() {
    const params = useParams();
    const paramsId = params.id


    return (
        <>
            <Box>
                <Typography variant='h2' sx={{ fontWeight: 'bold', fontFamily: 'cursive' }} color='error'>Profile</Typography>
                <Grid container>
                    <Grid item md={3} >
                        <Paper sx={{ height: '100%', minHeight: '50vh', backgroundColor:'lightBlue' }}>
                            <Box>
                                <Box sx={{ padding: 3 }}>
                                    <Typography variant='h5' sx={{ fontWeight: 'bold' }} >Name</Typography>
                                </Box>
                                <Divider />
                                <Box sx={{ padding: 3 }}>
                                    <Typography variant='h5' sx={{ fontWeight: 'bold' }} >Course</Typography>
                                </Box>
                                <Divider />
                                <Box sx={{ padding: 3 }}>
                                    <Typography variant='h5' sx={{ fontWeight: 'bold' }} >CNIC</Typography>
                                </Box>
                                <Box sx={{ padding: 3 }}>
                                    <Typography variant='h5' sx={{ fontWeight: 'bold' }} >Contact</Typography>
                                </Box>
                                <Divider />
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default AdminProfile