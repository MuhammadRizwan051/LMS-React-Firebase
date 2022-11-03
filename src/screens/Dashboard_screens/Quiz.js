
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
                                            <Grid container sx={{border:'1px solid black'}} mb={5}>
                                                <Box sx={{textAlign:'center'}}>
                                                    <Typography align='center'>{` Question ${i+1}`}</Typography>
                                                </Box>
                                                <Grid item md={12} mb={4} className='adminQuestion' sx={{textAlign:'left'}}>
                                                    <Box p={2}>
                                                        <Typography>{` ${e.question}`}</Typography>
                                                    </Box>
                                                </Grid>
                                                    {e.options.map((o,index)=> (
                                                        <Grid item md={12} m1={2} className='adminQuestion' sx={{textAlign:'left'}}>
                                                            <Box p={2} >
                                                                <Typography>{`${index+1}. ${o}`}</Typography>
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