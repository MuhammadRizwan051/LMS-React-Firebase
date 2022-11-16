import {
    Button,
    Container,
    Divider,
    Grid,
    Paper,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import Avatar from "@mui/material/Avatar";
import { checkUser, getData, logoutUser } from "../config/firebasemethod";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function StudentProfile() {

    const navigate = useNavigate()
    const params = useParams()
    const location = useLocation()

    const [userDetails, setUserDetails] = useState([])
    // let [data, setData] = useState([])
    const [profileDetails, setProfiledetails] = useState([])

    let getUser = () => {
        getData(`users/`)
            .then((res) => {
                console.log(res)
                let arr = res.filter((x) => x.id === params.id)
                console.log(arr)
                // let obj = arr.find((x) => x.email)
                // console.log(obj)
                setUserDetails(arr)
            })
            .catch((err) => {
                // setIsLoader(false)
                alert(err)
            })
    }
    console.log(userDetails)

    const logout = () => {
        logoutUser().then(() => {
            navigate('/')
        }).catch((err) => {
            console.log(err)
        })
    }

    let [arr, setArr] = useState([])

    let getProfile = () => {
        getData(`studentsRecord/`)
            // setLoader(true)
            .then((res) => {
                console.log(res)
                let a = res.filter((x) => x.email === 'user1@gmail.com')
                setArr([...arr,a])
                console.log(arr)
                // let obj = arr.find((x) => x.email)
                // // console.log(obj)
                // setProfiledetails(obj)
                // setLoader(false)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        getUser()
        getProfile()
    }, [])

    return (
        <>
            <div
                style={{
                    width: "100%",
                    minHeight: "100vh",
                    height: "100%",
                    margin: 0,
                }}
                className="bgLight"
            >
                <Container>
                    <Grid container>
                        <Grid sx={{ padding: 1 }} md={3} item>
                            <Paper sx={{ padding: 2, textAlign: "center" }}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <Avatar
                                        alt="Remy Sharp"
                                        src="https://www.dgvaishnavcollege.edu.in/dgvaishnav-c/uploads/2021/01/dummy-profile-pic.jpg"
                                        sx={{ width: 100, height: 100 }}
                                    />
                                </Box>
                                <Box>
                                    <Typography variant="h5">ABC</Typography>

                                    <Box pt={2}>
                                        <Typography sx={{ fontWeight: "bold" }} variant="p">
                                            Course
                                        </Typography>
                                    </Box>
                                    <Box pb={2}>
                                        {arr.map((x, i) => (
                                            <Typography variant="p">
                                                {x.course}
                                            </Typography>
                                        ))}
                                    </Box>
                                    <Divider />
                                    <Box pt={2}>
                                        <Typography sx={{ fontWeight: "bold" }} variant="p">
                                            Email
                                        </Typography>
                                    </Box>
                                    <Box pb={2}>
                                        {userDetails.map((x, i) => (
                                            <Typography variant="p">
                                                {x.email}
                                            </Typography>
                                        ))}
                                    </Box>
                                    <Divider />
                                    <Box pt={2}>
                                        <Typography sx={{ fontWeight: "bold" }} variant="p">
                                            Father Name
                                        </Typography>
                                    </Box>
                                    <Box pb={2}>
                                        {userDetails.map((x, i) => (
                                            <Typography variant="p">
                                                {x.email}
                                            </Typography>
                                        ))}
                                    </Box>
                                    <Divider />
                                    <Box pt={2}>
                                        <Typography sx={{ fontWeight: "bold" }} variant="p">
                                            CNIC
                                        </Typography>
                                    </Box>
                                    <Box pb={2}>
                                        {userDetails.map((x, i) => (
                                            <Typography variant="p">
                                                {x.email}
                                            </Typography>
                                        ))}
                                    </Box>
                                    <Divider />
                                    <Box pt={2}>
                                        <Typography sx={{ fontWeight: "bold" }} variant="p">
                                            Contact
                                        </Typography>
                                    </Box>
                                    <Box pb={2}>
                                        {userDetails.map((x, i) => (
                                            <Typography variant="p">
                                                {x.email}
                                            </Typography>
                                        ))}
                                    </Box>
                                    <Divider />
                                    <Box >
                                        <Button variant="contained" onClick={logout}>Logout</Button>
                                    </Box>
                                </Box>
                            </Paper>
                        </Grid>
                        <Grid sx={{ padding: 1 }} md={9} item>
                            <Paper sx={{ padding: 2 }}>
                                <Typography>Result</Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>
    );
}

export default StudentProfile