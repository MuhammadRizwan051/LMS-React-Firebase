// import * as React from 'react';
// import PropTypes from 'prop-types';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
// import Divider from '@mui/material/Divider';
// import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import MailIcon from '@mui/icons-material/Mail';
// import MenuIcon from '@mui/icons-material/Menu';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import { useNavigate } from 'react-router-dom';
// import { Route, Routes } from "react-router-dom";
// import Enrolled_Students from './Dashboard_screens/Enrolled_Students';
// import CourseForm from './Dashboard_screens/courseForm';
// import Quiz from './Dashboard_screens/createQuiz';
// import CreateResult from './Dashboard_screens/createResult';
// import Countries from './countries';
// import Cities from './cities';
// import { signoutUser } from '../config/firebasemethod';
// import { Menu, MenuItem } from '@mui/material';
// import { AccountCircle } from '@mui/icons-material';



// const drawerWidth = 240;

// function Dashboard(props) {
//     const { window } = props;
//     const [mobileOpen, setMobileOpen] = React.useState(false);
//     let navigate = useNavigate()

//     const [auth, setAuth] = React.useState(true);
//     const [anchorEl, setAnchorEl] = React.useState(null);

//     const handleDrawerToggle = () => {
//         setMobileOpen(!mobileOpen);
//     };

//     const handleChange = (event) => {
//         setAuth(event.target.checked);
//     };

//     const handleMenu = (event) => {
//         setAnchorEl(event.currentTarget);
//     };

//     const signout = () => {
//         setAnchorEl(null);
//         signoutUser(`${nodeName}/${userId}`)
//             .then(() => {
//                 // setLoader(false)
//                 navigate(`/${nodeName}`)
//             })
//             .catch((err) => {
//                 // setLoader(false)
//                 console.log(err)
//             })
//     };

//     const profile = () => {
//         setAnchorEl(null);
//         navigate(`${profileNode}`, { state: state })

//     };

//     const handleClose = () => {
//         setAnchorEl(null);
//     };

//     const list = [
//         {
//             name: 'Enrolled Students',
//             url: 'enrolled-students',
//             element: <Enrolled_Students />
//         },
//         {
//             name: 'Course',
//             url: 'courseform',
//             element: <CourseForm />
//         },
//         {
//             name: 'Quiz',
//             url: 'quizform',
//             element: <Quiz />
//         },
//         {
//             name: 'Result',
//             url: 'result',
//             element: <CreateResult />
//         },
//         {
//             name: 'Countries',
//             url: 'countries',
//             element: <Countries />
//         },
//         {
//             name: 'Cities',
//             url: 'cities',
//             element: <Cities />
//         },
//     ]

//     const drawer = (
//         <div>
//             <Toolbar />
//             <Divider />
//             <List>
//                 {list.map((text, index) => (
//                     <ListItem key={index} disablePadding>
//                         <ListItemButton onClick={() => navigate(text.url)}>
//                             <ListItemIcon>
//                                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                             </ListItemIcon>
//                             <ListItemText primary={text.name} />
//                         </ListItemButton>
//                     </ListItem>
//                 ))}
//             </List>
//         </div>
//     );

//     const container = window !== undefined ? () => window().document.body : undefined;

//     return (
//         <Box sx={{ display: 'flex' }}>
//             <CssBaseline />
//             <AppBar
//                 position="fixed"
//                 sx={{
//                     width: { sm: `calc(100% - ${drawerWidth}px)` },
//                     ml: { sm: `${drawerWidth}px` },
//                 }}
//             >
//                 <Toolbar>
//                     <IconButton
//                         color="inherit"
//                         aria-label="open drawer"
//                         edge="start"
//                         onClick={handleDrawerToggle}
//                         sx={{ mr: 2, display: { sm: 'none' } }}
//                     >
//                         <MenuIcon />
//                     </IconButton>
//                     <Typography variant="h6" noWrap component="div">
//                         Dashboard
//                     </Typography>
//                     <div>
//                         <IconButton
//                             size="large"
//                             aria-label="account of current user"
//                             aria-controls="menu-appbar"
//                             aria-haspopup="true"
//                             onClick={handleMenu}
//                             color="inherit"
//                         >
//                             <AccountCircle />
//                         </IconButton>
//                         <Menu
//                             id="menu-appbar"
//                             anchorEl={anchorEl}
//                             anchorOrigin={{
//                                 vertical: 'top',
//                                 horizontal: 'right',
//                             }}
//                             keepMounted
//                             transformOrigin={{
//                                 vertical: 'top',
//                                 horizontal: 'right',
//                             }}
//                             open={Boolean(anchorEl)}
//                             onClose={handleClose}
//                         >
//                             <MenuItem onClick={profile}>Profile</MenuItem>
//                             <MenuItem onClick={signout}>Log Out</MenuItem>
//                         </Menu>
//                     </div>
//                 </Toolbar>
//             </AppBar>
//             <Box
//                 component="nav"
//                 sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
//                 aria-label="mailbox folders"
//             >
//                 {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
//                 <Drawer
//                     container={container}
//                     variant="temporary"
//                     open={mobileOpen}
//                     onClose={handleDrawerToggle}
//                     ModalProps={{
//                         keepMounted: true, // Better open performance on mobile.
//                     }}
//                     sx={{
//                         display: { xs: 'block', sm: 'none' },
//                         '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//                     }}
//                 >
//                     {drawer}
//                 </Drawer>
//                 <Drawer
//                     variant="permanent"
//                     sx={{
//                         display: { xs: 'none', sm: 'block' },
//                         '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//                     }}
//                     open
//                 >
//                     {drawer}
//                 </Drawer>
//             </Box>
//             <Box
//                 component="main"
//                 sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
//             >
//                 <Toolbar />

//                 {/* Right Side */}
//                 <Routes>
//                     {list.map((e, i) => (
//                         <Route path={e.url} element={e.element} key={i} />
//                     ))}
//                 </Routes>
//             </Box>
//         </Box>
//     );
// }

// Dashboard.propTypes = {
//     /**
//      * Injected by the documentation to work in an iframe.
//      * You won't need it on your project.
//      */
//     window: PropTypes.func,
// };

// export default Dashboard;
