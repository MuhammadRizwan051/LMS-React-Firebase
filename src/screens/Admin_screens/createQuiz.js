
import { Box, Checkbox, FormControl, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import MyButton from '../../Component/Button'
import Input from '../../Component/Input'
import SelectBox from '../../Component/Select'
import { getData, sendData } from '../../config/firebasemethod'

function CreateQuiz() {
    const [isCreateQuiz, setIsCreateQuiz] = useState(false)
    const [model, setModel] = useState({})

    const [questions, setQuestions] = useState([])

    const [question, setQuestion] = useState({})
    const [option, setOption] = useState('')
    const [optionsArr, setOptionsArr] = useState([])
    const [correctOptionsArr, setCorrectOptionsArr] = useState([])

    const [display, setDisplay] = useState('inlineBlock')
    const [showQuiz, setShowQuiz] = useState(false)


    let createQuiz = () => {
        setIsCreateQuiz(true)
        console.log('Quiz Created')
        console.log(model)
    }
    let fillModel = (key, val) => {
        model[key] = val
        setModel({ ...model })
    }

    let addOption = () => {
        setOptionsArr([...optionsArr, { value: option }])
        setOption('')
    }

    let submitQuestion = () => {
        question.options = optionsArr.map(x => x.value)
        question.correctAns = optionsArr.find((x) => x.isChecked).value
        console.log(question)
        setQuestions([...questions, question])
    }

    let lockQuiz = () => {
        model.questionsArray = questions
        console.log(model)
        sendData(model, `Quiz/`)
            .then((StudentInfo => {
                console.log(StudentInfo);
                alert('Your Quiz has been submitted')
            }))
            .catch((err => {
                console.log(err);
                alert('Plz! submit again')
            }))
    }


    // let [course, setCourse] = useState("")

    // let getCourse = () => {
    //     getData(`courses/`)
    //         .then((res) => {
    //             // setIsLoader(false)
    //             setCourse(res)
    //             console.log(res)
    //         })
    //         .catch((err) => {
    //             // setIsLoader(false)
    //             alert(err)
    //         })

    // }
    // console.log(course)
    // useEffect(() => { getCourse() }, [])


    // setQuestions([{ 'question': question, 'options': optionsArr, 'correct': correctOptionsArr }])
    // setQuestion('')
    // setOption('')
    // setOptionsArr([])
    // console.log(questions)
    // setShowQuiz(false)
    // setModel({ ...model, questions })
    // console.log(model)

    // let lockQuiz = () => {
    //     setDisplay('none')
    //     setShowQuiz(true)
    // }
    // let back = () => {
    //     setDisplay('inlineBlock')
    //     setShowQuiz(false)
    // }
    // let finalizeQuiz = () => {
    //     sendData(model,
    //         `Quiz/`)
    //         .then((StudentInfo => {
    //             console.log(StudentInfo);
    //             alert('Your Quiz has been submitted')
    //         }))
    //         .catch((err => {
    //             console.log(err);
    //             alert('Plz! submit again')
    //         }))
    //     setDisplay('inlineBlock')
    //     setShowQuiz(false)
    // }
    return (
        <>
            <Box>
                <Typography variant='h3'>Quiz</Typography>
                <Box>
                    <Grid container rowSpacing={4} columnSpacing={2} mt={2} sx={{ display: display }}>
                        <Grid item md={6}>
                            <Input label='Quiz Name' placeholder="Enter" disabled={isCreateQuiz} onChange={(e) => fillModel('quizName', e.target.value)} />
                        </Grid>
                        <Grid item md={2}>
                            <Input label='Quiz Duration' placeholder="Enter" disabled={isCreateQuiz} onChange={(e) => fillModel('duration', e.target.value)} />
                        </Grid>
                        <Grid item md={4}>
                            <SelectBox label='Courses' disabled={isCreateQuiz} onChange={(e) => fillModel('course', e.target.value)} displayField='courseName' valueField='courseName' nodeName='courses' datasource={[]}
                            />
                        </Grid>
                        <Grid item md={2}>
                            <Input label='Quiz Marks' placeholder="Enter" disabled={isCreateQuiz} onChange={(e) => fillModel('marks', e.target.value)} />
                        </Grid>
                        <Grid item md={2}>
                            <Input label='Security Key' placeholder="Enter" disabled={isCreateQuiz} onChange={(e) => fillModel('securityKey', e.target.value)} />
                        </Grid>
                        <Grid item sx={{ margin: '0 auto' }}>
                            <MyButton label='Create Quiz' variant='contained' sx={{ width: 1 }} onClick={createQuiz} />
                        </Grid>
                    </Grid>
                    {isCreateQuiz && (
                        <>
                            <Grid container rowSpacing={4} columnSpacing={2} mt={4} sx={{ display: display }}>
                                <Grid item md={12}>
                                    <FormControl fullWidth>
                                        <Input label='Question' onChange={(e) => setQuestion({ ...question, question: e.target.value })} />
                                    </FormControl>
                                </Grid>
                                <Grid item md={10} mt={4}>
                                    <Input value={option} label='Option' onChange={(e) => setOption(e.target.value)} size='small' />
                                    {optionsArr.map((x, i) => (
                                        <>
                                            <Typography key={i}><Checkbox onChange={(e) => (x.isChecked = e.target.value)} />{x.value}</Typography>
                                        </>
                                    ))}
                                </Grid>
                                <Grid item md={2} mt={4}>
                                    <MyButton onClick={addOption} label='Add' sx={{ width: 1 }} size='large' />
                                </Grid>
                                <Grid item md={12} mt={4}>
                                    <MyButton onClick={submitQuestion} label='Submit Question' />
                                    {/* </Grid>
                                <Grid item md={6} mt={4}> */}
                                    <MyButton onClick={lockQuiz} label='Lock Quiz' />
                                </Grid>
                            </Grid>

                            {/* {showQuiz && (
                                <>
                                    <Grid container>
                                        <Grid item md={12} mt={4}>
                                            <MyButton onClick={back} label='Back' />
                                        </Grid>
                                        <Grid item md={12} mt={4}>
                                            {questions.map((e, i) => (
                                                <>
                                                    <Grid container mb={5} pt={3} pb={5} sx={{ justifyContent: 'center' }}>
                                                        <Box sx={{ textAlign: 'center', width: 1 }} pb={2}>
                                                            <Typography variant='h5' color='error' sx={{ fontWeight: 'bold' }}>{` Question: ${i + 1}`}</Typography>
                                                        </Box>
                                                        <Grid item md={6} mx={3} mb={4} sx={{ textAlign: 'left', borderRadius: '15px', backgroundColor: 'lightGrey' }}>
                                                            <Box p={3}>
                                                                <Typography>{`${e.question}`}</Typography>
                                                            </Box>
                                                        </Grid>
                                                        {e.options.map((o, index) => (
                                                            <Grid item md={6} mt={2} mx={3} sx={{ textAlign: 'left', borderRadius: '15px', borderBottom: '1px solid black' }}>
                                                                <Box px={1} py={0} >
                                                                    <Typography><Checkbox />{`${o}`}</Typography>
                                                                </Box>
                                                            </Grid>
                                                        ))}
                                                    </Grid>
                                                </>
                                            ))}
                                        </Grid>
                                        <Grid item md={12} mx={3} >
                                            <MyButton label='Finalize Quiz' onClick={finalizeQuiz} />
                                        </Grid>
                                    </Grid>
                                </>
                            )} */}

                        </>
                    )}


                </Box>
            </Box>
        </>
    )
}

export default CreateQuiz




























// import { Box, Checkbox, FormControl, Grid, Typography } from '@mui/material'
// import React, { useState } from 'react'
// import { Navigate, useNavigate } from 'react-router-dom'
// import MyButton from '../../Component/Button'
// import Input from '../../Component/Input'
// import SelectBox from '../../Component/Select'
// import { sendData } from '../../config/firebasemethod'

// function CreateQuiz() {
//     const [isCreateQuiz, setIsCreateQuiz] = useState(false)
//     const [model, setModel] = useState({})


//     const [question, setQuestion] = useState('')
//     const [option, setOption] = useState('')
//     const [optionsArr, setOptionsArr] = useState([])
//     const [correctOptionsArr, setCorrectOptionsArr] = useState([])

//     const [questions, setQuestions] = useState([])

//     const [display, setDisplay] = useState('inlineBlock')
//     const [showQuiz, setShowQuiz] = useState(false)

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
//         setOption('')
//     }

//     let submitQuestion = () => {
//         setQuestions([{ 'question': question, 'options': optionsArr, 'correct': correctOptionsArr }])
//         setQuestion('')
//         setOption('')
//         setOptionsArr([])
//         console.log(questions)
//         setShowQuiz(false)
//         setModel({ ...model, questions })
//         console.log(model)
//     }

//     let lockQuiz = () => {
//         setDisplay('none')
//         setShowQuiz(true)
//     }
//     let back = () => {
//         setDisplay('inlineBlock')
//         setShowQuiz(false)
//     }
//     let finalizeQuiz = () => {
//         sendData(model,
//             `Quiz/`)
//             .then((StudentInfo => {
//                 console.log(StudentInfo);
//                 alert('Your Quiz has been submitted')
//             }))
//             .catch((err => {
//                 console.log(err);
//                 alert('Plz! submit again')
//             }))
//         setDisplay('inlineBlock')
//         setShowQuiz(false)
//     }
//     return (
//         <>
//             <Box>
//                 <Typography variant='h3'>Quiz</Typography>
//                 <Box>
//                     <Grid container rowSpacing={4} columnSpacing={2} mt={2} sx={{ display: display }}>
//                         <Grid item md={6}>
//                             <Input label='Quiz Name' placeholder="Enter" disabled={isCreateQuiz} onChange={(e) => fillModel('quizName', e.target.value)} />
//                         </Grid>
//                         <Grid item md={2}>
//                             <Input label='Quiz Duration' placeholder="Enter" disabled={isCreateQuiz} onChange={(e) => fillModel('duration', e.target.value)} />
//                         </Grid>
//                         <Grid item md={4}>
//                             <SelectBox label='Courses' disabled={isCreateQuiz} onChange={(e) => fillModel('course', e.target.value)} datasource={[
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
//                         <Grid item sx={{ margin: '0 auto' }}>
//                             <MyButton label='Create Quiz' variant='contained' sx={{ width: 1 }} onClick={createQuiz} />
//                         </Grid>
//                     </Grid>
//                     {isCreateQuiz && (
//                         <>
//                             <Grid container rowSpacing={4} columnSpacing={2} mt={4} sx={{ display: display }}>
//                                 <Grid item md={12}>
//                                     <FormControl fullWidth>
//                                         <Input value={question} label='Question' onChange={(e) => setQuestion(e.target.value)} />
//                                     </FormControl>
//                                 </Grid>
//                                 <Grid item md={10} mt={4}>
//                                     <Input value={option} label='Option' onChange={(e) => setOption(e.target.value)} size='small' />
//                                     {optionsArr.map((x, i) => (
//                                         <>
//                                             <Typography key={i}><Checkbox value={x} name={x} onChange={(x) => setCorrectOptionsArr(x.target.value)} />{x}</Typography>
//                                         </>
//                                     ))}
//                                 </Grid>
//                                 <Grid item md={2} mt={4}>
//                                     <MyButton onClick={addOption} label='Add' sx={{ width: 1 }} size='large' />
//                                 </Grid>
//                                 <Grid item md={12} mt={4}>
//                                     <MyButton onClick={submitQuestion} label='Submit Question' />
//                                     {/* </Grid>
//                                 <Grid item md={6} mt={4}> */}
//                                     <MyButton onClick={lockQuiz} label='Lock Quiz' />
//                                 </Grid>
//                             </Grid>

//                             {showQuiz && (
//                                 <>
//                                     <Grid container>
//                                         <Grid item md={12} mt={4}>
//                                             <MyButton onClick={back} label='Back' />
//                                         </Grid>
//                                         <Grid item md={12} mt={4}>
//                                             {questions.map((e, i) => (
//                                                 <>
//                                                     <Grid container mb={5} pt={3} pb={5} sx={{ justifyContent: 'center' }}>
//                                                         <Box sx={{ textAlign: 'center', width: 1 }} pb={2}>
//                                                             <Typography variant='h5' color='error' sx={{ fontWeight: 'bold' }}>{` Question: ${i + 1}`}</Typography>
//                                                         </Box>
//                                                         <Grid item md={6} mx={3} mb={4} sx={{ textAlign: 'left', borderRadius: '15px', backgroundColor: 'lightGrey' }}>
//                                                             <Box p={3}>
//                                                                 <Typography>{`${e.question}`}</Typography>
//                                                             </Box>
//                                                         </Grid>
//                                                         {e.options.map((o, index) => (
//                                                             <Grid item md={6} mt={2} mx={3} sx={{ textAlign: 'left', borderRadius: '15px', borderBottom: '1px solid black' }}>
//                                                                 <Box px={1} py={0} >
//                                                                     <Typography><Checkbox />{`${o}`}</Typography>
//                                                                 </Box>
//                                                             </Grid>
//                                                         ))}
//                                                     </Grid>
//                                                 </>
//                                             ))}
//                                         </Grid>
//                                         <Grid item md={12} mx={3} >
//                                             <MyButton label='Finalize Quiz' onClick={finalizeQuiz} />
//                                         </Grid>
//                                     </Grid>
//                                 </>
//                             )}

//                         </>
//                     )}


//                 </Box>
//             </Box>
//         </>
//     )
// }

// export default CreateQuiz




