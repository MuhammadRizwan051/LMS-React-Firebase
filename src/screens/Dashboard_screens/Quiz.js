// import { Box, Checkbox, Grid, Typography } from '@mui/material'
// import React, { useState } from 'react'
// import MyButton from '../../Component/Button'
// import Input from '../../Component/Input'
// import SelectBox from '../../Component/Select'

// function Quiz() {
//     const [isCreateQuiz, setIsCreateQuiz] = useState(false)
//     const [model, setModel] = useState({})
//     const [question, setQuestion] = useState({})
//     const [option, setOption] = useState('')

//     const [optionsArr, setOptionsArr] = useState([])
//     const [questions, setQuestions] = useState([])


//     let createQuiz = () => {
//         setIsCreateQuiz(true)
//         console.log('Quiz Created')
//     }
//     let fillModel = (key, val) => {
//         model[key] = val
//         setModel({ ...model })
//     }

//     let addOption = () => {
//         setOptionsArr([...optionsArr, option])
//     }

//     let submitQuestion = () => {
        
//         // setQuestion({question, option: optionsArr})
//         // console.log(question)

//         setQuestions([question, optionsArr])
//         console.log(questions[0])
//         console.log(questions[1])

//     }
//     return (
//         <>
//             <Box>
//                 <Typography variant='h3'>Quiz</Typography>
//                 <Box>
//                     <Grid container rowSpacing={4} columnSpacing={2} mt={2}>
//                         <Grid item md={6}>
//                             <Input label='Quiz Name' placeholder="Enter" disabled={isCreateQuiz} onChange={(e) => fillModel('question', e.target.value)} />
//                         </Grid>
//                         <Grid item md={2}>
//                             <Input label='Quiz Duration' placeholder="Enter" disabled={isCreateQuiz} onChange={(e) => fillModel('options', e.target.value)} />
//                         </Grid>
//                         <Grid item md={4}>
//                             <SelectBox label='Courses' datasource={[
//                                 {
//                                     id: 'wm',
//                                     fullName: 'Web & Mobile'
//                                 },
//                                 {
//                                     id: 'gd',
//                                     fullName: 'Graphic Designing'
//                                 }
//                             ]} />
//                         </Grid>
//                         <Grid item sx={{margin:'0 auto'}}>
//                             <MyButton label='Create Quiz' variant='contained' sx={{ width: 1 }} onClick={createQuiz} />
//                         </Grid>
//                     </Grid>
//                     {isCreateQuiz && (
//                         <>
//                             <Grid container mt={4}>
//                                 <Grid item md={12}>
//                                     <Input label='Question' onChange={(e) => setQuestion({ ...question, question: e.target.value })} />
//                                 </Grid>
//                                 <Grid item md={8} mt={4}>
//                                     <Input label='Option' onChange={(e) => setOption(e.target.value )} />
//                                     {optionsArr.map((x, i) => (
//                                         <>
//                                             <Typography key={i}><Checkbox />{x}</Typography>
//                                         </>
//                                     ))}
//                                 </Grid>
//                                 <Grid item md={4} mt={4}>
//                                     <MyButton onClick={addOption} label='Add' sx={{ width: '100%' }} />
//                                 </Grid>
//                                 <Grid item md={12} mt={4}>
//                                     <MyButton onClick={submitQuestion} label='Submit Question' sx={{ width: '100%' }} />
//                                 </Grid>
//                             </Grid>
//                             <Grid container>
//                                 {/* <Grid item md={12} mt={4}>
//                                     <Typography>{questions[0]}</Typography>
//                                 </Grid> */}
//                             </Grid>
//                         </>
//                     )}
//                 </Box>
//             </Box>
//         </>
//     )
// }

// export default Quiz



















// // import React, { useEffect, useState } from 'react'
// // import { Container, Divider, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material';
// // import MyTextField from '../../Component/Input';
// // // import sendData from '../../config/firebasemethods';
// // import {sendData} from '../../config/firebasemethod';
// // import Button from '@mui/material/Button';
// // import SelectBox from '../../Component/Select';
// // import Box from '@mui/material/Box';
// // import FormLabel from '@mui/material/FormLabel';
// // import FormGroup from '@mui/material/FormGroup';
// // import FormControlLabel from '@mui/material/FormControlLabel';
// // import FormHelperText from '@mui/material/FormHelperText';
// // import Checkbox from '@mui/material/Checkbox';

// // export default function Quiz() {
// //   let [module, setModule] = useState({});
// //   let [selectedCourse, setSelectedCourse] = useState("");
// //   let [btnDisabled, setBtnDisabled] = useState(false);
// //   const [question, setQuestion] = useState({})
// //   const [options, setOptions] = useState(["jnjjj","uuyqgywd"])
// //   let [course, setCourse] = useState([
// //     {
// //       fullName: "Web and Mobile",
// //       id: "Web and Mobile"
// //     },
// //     {
// //       fullName: "Flutter",
// //       id: "Flutter"
// //     },
// //     {
// //       fullName: "Graphic Designing",
// //       id: "Graphic Designing"
// //     },
// //     {
// //       fullName: "Amazon",
// //       id: "Amazon"
// //     }
// //   ]
// //   );
// //   let nextSection = () => {
// //     setBtnDisabled(true)
// //   }
// //   let fillModule = (key, val) => {
// //     module[key] = val;
// //     setModule({ ...module })
// //     console.log(module)
// //   }
// //   let sendStdData = () => {
// //     console.log(module)

// //     sendData({
// //       quiz: module,
// //       // time: new Date(),
// //       // userId: userId
// //     },
// //       `Quiz/`)
// //       .then((quiz => { console.log(quiz) }))
// //       .catch((err => { console.log(err) }))
// //   }

// //   //------------------
// //   const handleChange = (event) => {
// //     setOptions({
// //       ...options,
// //       [event.target.name]: event.target.checked,
// //     });
// //   };

// //   const {} = options;
// //   const error = [].filter((v) => v).length !== 2;
// //   return (
// //     <>
// //       <Container sx={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;", backgroundColor: "white", padding: "15px", borderRadius: "5px", width: { xs: "100%", md: "100%" } }}>
// //         <Grid container spacing={2}>

// //           <Grid item xs={12} sm={12} md={12}>
// //             <Typography variant='h5' sx={{ fontWeight: "bold" }}>Create Quiz</Typography>
// //           </Grid>

// //           {/* Section 1 */}
// //           <Grid item xs={12} sm={12} md={12} sx={{ display: "flex" }}>
// //             <MyTextField
// //               // -------------------------------------> Quiz Name
// //               label={"Quiz Name"}
// //               required={true}
// //               type={"text"}
// //               onChange={(e) => { fillModule("quizName", e.target.value) }}
// //             />
// //             <MyTextField
// //               // -------------------------------------> Course Name
// //               label={"Quiz Duration"}
// //               required={true}
// //               type={"text"}
// //               onChange={(e) => { fillModule("quizDuration", e.target.value) }}
// //             />
// //             <FormControl fullWidth>
// //               <InputLabel id="demo-simple-select-label">Course</InputLabel>
// //               <Select
// //                 // -------------------------------------> Course 
// //                 labelId="demo-simple-select-label"
// //                 id="demo-simple-select"
// //                 // value={co}
// //                 label="Course"
// //                 onChange={(e) => { fillModule("course", e.target.value) }}
// //               >
// //                 {course.map((x, i) => {
// //                   return <MenuItem key={i} value={x.fullName}>{x.fullName}</MenuItem>

// //                 })}
// //               </Select>
// //             </FormControl>
// //             <Grid item xs={12} sm={12} md={12}>
// //               <Button variant="contained" sx={{ backgroundImage: "linear-gradient( 109.6deg, rgb(107 155 227) 11.2%, rgba(110,123,251,1) 91.1% );" }} disabled={btnDisabled} onClick={nextSection}>Next</Button>
// //             </Grid>
// //           </Grid>
// //           {btnDisabled &&

// //             <>
// //               <Divider />
// //               <Grid item xs={12} sm={12} md={12} sx={{ display: "flex" }}>
// //                 <MyTextField
// //                   // -------------------------------------> Course Name
// //                   label={"Question"}
// //                   required={true}
// //                   type={"text"}
// //                   onChange={(e) => { fillModule({ ...question, question: e.target.value }) }}
// //                 />
// //                 <MyTextField
// //                      // -------------------------------------> Course Name
// //                      label={"Option"}
// //                      required={true}
// //                      type={"text"}
// //                      onChange={(e) => { setOptions([ ...options, e.target.value ]) }}
// //                    />
// //                 </Grid>
// //               <Grid item xs={12} sm={12} md={12} sx={{ display: "flex" }}>

// //                 {options.length > 0 ?<Box sx={{ display: 'flex' }}>
// //                   <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
// //                     <FormLabel component="legend">Options</FormLabel>
// //                     <FormGroup>
// //                       {options.map((e,i) => {
// //                         return<>
      
// //                         <FormControlLabel
// //                         control={
// //                           <Checkbox checked={e[i]} onChange={handleChange} name={e[i]} />
// //                         }
// //                         label={e[i]}
// //                       />
// //                       </>
// //                     })}
// //                     </FormGroup>
// //                   </FormControl>
// //                 </Box>:null}
// //                 </Grid>
// //               <Grid item xs={12} sm={12} md={12} sx={{ display: "flex" }}>

// //                     <MyTextField
// //                      // -------------------------------------> Course Name
// //                      label={"Option"}
// //                      required={true}
// //                      type={"text"}
// //                      onChange={(e) => { setOptions([ ...options, e.target.value ]) }}
// //                    />
// //                   <Button variant="contained" sx={{ backgroundImage: "linear-gradient( 109.6deg, rgb(107 155 227) 11.2%, rgba(110,123,251,1) 91.1% );" }} onClick={handleChange}>Add Option</Button>

// //               </Grid>
// //               <Grid item xs={12} sm={12} md={12}>
// //                   <Button variant="contained" sx={{ backgroundImage: "linear-gradient( 109.6deg, rgb(107 155 227) 11.2%, rgba(110,123,251,1) 91.1% );" }} disabled={!btnDisabled} onClick={sendStdData}>Add Question</Button>
// //                 </Grid>
// //                 <Grid item xs={12} sm={12} md={12}>
// //                   <Button variant="contained" sx={{ backgroundImage: "linear-gradient( 109.6deg, rgb(107 155 227) 11.2%, rgba(110,123,251,1) 91.1% );" }} disabled={!btnDisabled} onClick={sendStdData}>Submit Form</Button>
// //                 </Grid>

// //             </>

// //           }


// //           {/* <Grid item xs={12} sm={12} md={12} sx={{ display: "flex" }}>
// //             <MyTextField
// //               // -------------------------------------> Question
// //               label={"Question"}
// //               required={true}
// //               type={"text"}
// //               onChange={(e) => { fillModule("Question 1", e.target.value) }}
// //             />
// //           </Grid>
// //           <Grid item xs={12} sm={12} md={12} sx={{ display: "flex", justifyContent: "space-between" }}>
// //             <MyTextField
// //               // -------------------------------------> Option 1
// //               label={"Option 1"}
// //               required={false}
// //               type={"text"}
// //               onChange={(e) => { fillModule("option 1", e.target.value) }}
// //             />
// //             <MyTextField
// //               // -------------------------------------> Option 2
// //               label={"Option 2"}
// //               required={true}
// //               type={"text"}
// //               onChange={(e) => { fillModule("option 2", e.target.value) }}
// //             />
// //             <MyTextField
// //               // -------------------------------------> Option 3
// //               label={"Option 3"}
// //               required={true}
// //               type={"text"}
// //               onChange={(e) => { fillModule("option 3", e.target.value) }}
// //             />

// //             <MyTextField
// //               // -------------------------------------> Option 4
// //               label={"Option 4"}
// //               required={true}
// //               type={"text"}
// //               onChange={(e) => { fillModule("option 4", e.target.value) }}
// //             />
// //           </Grid> */}
// //         </Grid>
// //       </Container></>
// //   )
// // }






















































import { Box, Checkbox, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import MyButton from '../../Component/Button'
import Input from '../../Component/Input'
import SelectBox from '../../Component/Select'

function Quiz() {
    const [isCreateQuiz, setIsCreateQuiz] = useState(false)
    const [model, setModel] = useState({})
    
    
    const [question, setQuestion] = useState('')
    const [option, setOption] = useState('')
    const [optionsArr, setOptionsArr] = useState([])
    
    const [questions, setQuestions] = useState([])

    let createQuiz = () => {
        setIsCreateQuiz(true)
        console.log('Quiz Created')
    }
    let fillModel = (key, val) => {
        model[key] = val
        setModel({ ...model })
    }

    let addOption = () => {
        setOptionsArr([...optionsArr, option])
    }

    let submitQuestion = () => {
        
        setQuestions([...questions,{'question':question, 'options':optionsArr}])
        console.log(questions)
        
    }
    return (
        <>
            <Box>
                <Typography variant='h3'>Quiz</Typography>
                <Box>
                    <Grid container rowSpacing={4} columnSpacing={2} mt={2}>
                        <Grid item md={6}>
                            <Input label='Quiz Name' placeholder="Enter" disabled={isCreateQuiz} onChange={(e) => fillModel('quizName', e.target.value)} />
                        </Grid>
                        <Grid item md={2}>
                            <Input label='Quiz Duration' placeholder="Enter" disabled={isCreateQuiz} onChange={(e) => fillModel('duration', e.target.value)} />
                        </Grid>
                        <Grid item md={4}>
                            <SelectBox label='Courses' disabled={isCreateQuiz} onChange={(e) => fillModel('course', e.target.value)} datasource={[
                                {
                                    id: 'wm',
                                    fullName: 'Web & Mobile'
                                },
                                {
                                    id: 'gd',
                                    fullName: 'Graphic Designing'
                                }
                            ]} />
                        </Grid>
                        <Grid item sx={{margin:'0 auto'}}>
                            <MyButton label='Create Quiz' variant='contained' sx={{ width: 1 }} onClick={createQuiz} />
                        </Grid>
                    </Grid>
                    {isCreateQuiz && (
                        <>
                            <Grid container mt={4}>
                                <Grid item md={12}>
                                    <Input label='Question' onChange={(e) => setQuestion(e.target.value)} />
                                </Grid>
                                <Grid item md={8} mt={4}>
                                    <Input label='Option' onChange={(e) => setOption(e.target.value )} />
                                    {optionsArr.map((x, i) => (
                                        <>
                                            <Typography key={i}><Checkbox />{x}</Typography>
                                        </>
                                    ))}
                                </Grid>
                                <Grid item md={4} mt={4}>
                                    <MyButton onClick={addOption} label='Add' sx={{ width: '100%' }} />
                                </Grid>
                                <Grid item md={12} mt={4}>
                                    <MyButton onClick={submitQuestion} label='Submit Question' sx={{ width: '100%' }} />
                                </Grid>
                            </Grid>
                            <Grid container>
                                
                                <Grid item md={12} mt={4}>
                                    {questions.map((e,i)=> (
                                        <>
                                            <Grid container sx={{border:'1px solid black',borderRadius: '20px', textAlign:'left'}} mb={5}>
                                                <Grid item md={12} sx={{backgroundColor:'green', borderTopRightRadius:'20px',borderTopLeftRadius:'20px'}}>
                                                    <Box p={2}>
                                                        <Typography>{`${i+1}.  ${e.question}`}</Typography>
                                                    </Box>
                                                </Grid>
                                                    {e.options.map((o,index)=> (
                                                        <Grid item md={6} sx={{}}>
                                                            <Box p={2}>
                                                                <Typography>{`${index+1} ${o}`}</Typography>
                                                            </Box>

                                                        </Grid>
                                                    ))}
                                            </Grid>
                                        </>
                                    ))}
                                </Grid>
                            </Grid>
                        </>
                    )}
                </Box>
            </Box>
        </>
    )
}

export default Quiz



















// import React, { useEffect, useState } from 'react'
// import { Container, Divider, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material';
// import MyTextField from '../../Component/Input';
// // import sendData from '../../config/firebasemethods';
// import {sendData} from '../../config/firebasemethod';
// import Button from '@mui/material/Button';
// import SelectBox from '../../Component/Select';
// import Box from '@mui/material/Box';
// import FormLabel from '@mui/material/FormLabel';
// import FormGroup from '@mui/material/FormGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormHelperText from '@mui/material/FormHelperText';
// import Checkbox from '@mui/material/Checkbox';

// export default function Quiz() {
//   let [module, setModule] = useState({});
//   let [selectedCourse, setSelectedCourse] = useState("");
//   let [btnDisabled, setBtnDisabled] = useState(false);
//   const [question, setQuestion] = useState({})
//   const [options, setOptions] = useState(["jnjjj","uuyqgywd"])
//   let [course, setCourse] = useState([
//     {
//       fullName: "Web and Mobile",
//       id: "Web and Mobile"
//     },
//     {
//       fullName: "Flutter",
//       id: "Flutter"
//     },
//     {
//       fullName: "Graphic Designing",
//       id: "Graphic Designing"
//     },
//     {
//       fullName: "Amazon",
//       id: "Amazon"
//     }
//   ]
//   );
//   let nextSection = () => {
//     setBtnDisabled(true)
//   }
//   let fillModule = (key, val) => {
//     module[key] = val;
//     setModule({ ...module })
//     console.log(module)
//   }
//   let sendStdData = () => {
//     console.log(module)

//     sendData({
//       quiz: module,
//       // time: new Date(),
//       // userId: userId
//     },
//       `Quiz/`)
//       .then((quiz => { console.log(quiz) }))
//       .catch((err => { console.log(err) }))
//   }

//   //------------------
//   const handleChange = (event) => {
//     setOptions({
//       ...options,
//       [event.target.name]: event.target.checked,
//     });
//   };

//   const {} = options;
//   const error = [].filter((v) => v).length !== 2;
//   return (
//     <>
//       <Container sx={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;", backgroundColor: "white", padding: "15px", borderRadius: "5px", width: { xs: "100%", md: "100%" } }}>
//         <Grid container spacing={2}>

//           <Grid item xs={12} sm={12} md={12}>
//             <Typography variant='h5' sx={{ fontWeight: "bold" }}>Create Quiz</Typography>
//           </Grid>

//           {/* Section 1 */}
//           <Grid item xs={12} sm={12} md={12} sx={{ display: "flex" }}>
//             <MyTextField
//               // -------------------------------------> Quiz Name
//               label={"Quiz Name"}
//               required={true}
//               type={"text"}
//               onChange={(e) => { fillModule("quizName", e.target.value) }}
//             />
//             <MyTextField
//               // -------------------------------------> Course Name
//               label={"Quiz Duration"}
//               required={true}
//               type={"text"}
//               onChange={(e) => { fillModule("quizDuration", e.target.value) }}
//             />
//             <FormControl fullWidth>
//               <InputLabel id="demo-simple-select-label">Course</InputLabel>
//               <Select
//                 // -------------------------------------> Course 
//                 labelId="demo-simple-select-label"
//                 id="demo-simple-select"
//                 // value={co}
//                 label="Course"
//                 onChange={(e) => { fillModule("course", e.target.value) }}
//               >
//                 {course.map((x, i) => {
//                   return <MenuItem key={i} value={x.fullName}>{x.fullName}</MenuItem>

//                 })}
//               </Select>
//             </FormControl>
//             <Grid item xs={12} sm={12} md={12}>
//               <Button variant="contained" sx={{ backgroundImage: "linear-gradient( 109.6deg, rgb(107 155 227) 11.2%, rgba(110,123,251,1) 91.1% );" }} disabled={btnDisabled} onClick={nextSection}>Next</Button>
//             </Grid>
//           </Grid>
//           {btnDisabled &&

//             <>
//               <Divider />
//               <Grid item xs={12} sm={12} md={12} sx={{ display: "flex" }}>
//                 <MyTextField
//                   // -------------------------------------> Course Name
//                   label={"Question"}
//                   required={true}
//                   type={"text"}
//                   onChange={(e) => { fillModule({ ...question, question: e.target.value }) }}
//                 />
//                 <MyTextField
//                      // -------------------------------------> Course Name
//                      label={"Option"}
//                      required={true}
//                      type={"text"}
//                      onChange={(e) => { setOptions([ ...options, e.target.value ]) }}
//                    />
//                 </Grid>
//               <Grid item xs={12} sm={12} md={12} sx={{ display: "flex" }}>

//                 {options.length > 0 ?<Box sx={{ display: 'flex' }}>
//                   <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
//                     <FormLabel component="legend">Options</FormLabel>
//                     <FormGroup>
//                       {options.map((e,i) => {
//                         return<>
      
//                         <FormControlLabel
//                         control={
//                           <Checkbox checked={e[i]} onChange={handleChange} name={e[i]} />
//                         }
//                         label={e[i]}
//                       />
//                       </>
//                     })}
//                     </FormGroup>
//                   </FormControl>
//                 </Box>:null}
//                 </Grid>
//               <Grid item xs={12} sm={12} md={12} sx={{ display: "flex" }}>

//                     <MyTextField
//                      // -------------------------------------> Course Name
//                      label={"Option"}
//                      required={true}
//                      type={"text"}
//                      onChange={(e) => { setOptions([ ...options, e.target.value ]) }}
//                    />
//                   <Button variant="contained" sx={{ backgroundImage: "linear-gradient( 109.6deg, rgb(107 155 227) 11.2%, rgba(110,123,251,1) 91.1% );" }} onClick={handleChange}>Add Option</Button>

//               </Grid>
//               <Grid item xs={12} sm={12} md={12}>
//                   <Button variant="contained" sx={{ backgroundImage: "linear-gradient( 109.6deg, rgb(107 155 227) 11.2%, rgba(110,123,251,1) 91.1% );" }} disabled={!btnDisabled} onClick={sendStdData}>Add Question</Button>
//                 </Grid>
//                 <Grid item xs={12} sm={12} md={12}>
//                   <Button variant="contained" sx={{ backgroundImage: "linear-gradient( 109.6deg, rgb(107 155 227) 11.2%, rgba(110,123,251,1) 91.1% );" }} disabled={!btnDisabled} onClick={sendStdData}>Submit Form</Button>
//                 </Grid>

//             </>

//           }


//           {/* <Grid item xs={12} sm={12} md={12} sx={{ display: "flex" }}>
//             <MyTextField
//               // -------------------------------------> Question
//               label={"Question"}
//               required={true}
//               type={"text"}
//               onChange={(e) => { fillModule("Question 1", e.target.value) }}
//             />
//           </Grid>
//           <Grid item xs={12} sm={12} md={12} sx={{ display: "flex", justifyContent: "space-between" }}>
//             <MyTextField
//               // -------------------------------------> Option 1
//               label={"Option 1"}
//               required={false}
//               type={"text"}
//               onChange={(e) => { fillModule("option 1", e.target.value) }}
//             />
//             <MyTextField
//               // -------------------------------------> Option 2
//               label={"Option 2"}
//               required={true}
//               type={"text"}
//               onChange={(e) => { fillModule("option 2", e.target.value) }}
//             />
//             <MyTextField
//               // -------------------------------------> Option 3
//               label={"Option 3"}
//               required={true}
//               type={"text"}
//               onChange={(e) => { fillModule("option 3", e.target.value) }}
//             />

//             <MyTextField
//               // -------------------------------------> Option 4
//               label={"Option 4"}
//               required={true}
//               type={"text"}
//               onChange={(e) => { fillModule("option 4", e.target.value) }}
//             />
//           </Grid> */}
//         </Grid>
//       </Container></>
//   )
// }





