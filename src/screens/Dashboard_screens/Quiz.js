import { Box, Checkbox, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import MyButton from '../../Component/Button'
import Input from '../../Component/Input'
import SelectBox from '../../Component/Select'

function Quiz() {
    const [isCreateQuiz, setIsCreateQuiz] = useState(false)
    const [model, setModel] = useState({})
    const [question, setQuestion] = useState({})
    const [option, setOption] = useState('')
    const [optionsArr, setOptionsArr] = useState([])

    console.log(question)

    let fillModel = (key, val) => {
        model[key] = val
        setModel({ ...model })
        console.log(model)
    }

    let createQuiz = () => {
        setIsCreateQuiz(true)
        setModel({})
        console.log('Quiz Created')
    }
    let addOption = () => {
        setOptionsArr([...optionsArr, option])
    }
    return (
        <>
            <Box>
                <Typography variant='h1'>Quiz</Typography>
                <Box>
                    <Grid container spacing={4}>
                        <Grid item md={12}>
                            <Input label='Quiz Name' placeholder="Enter" disabled={isCreateQuiz} onChange={(e) => fillModel('question', e.target.value)} />
                        </Grid>
                        <Grid item md={6}>
                            <Input label='Quiz Duration' placeholder="Enter" disabled={isCreateQuiz} onChange={(e) => fillModel('options', e.target.value)} />
                        </Grid>
                        <Grid item md={6}>
                            <SelectBox label='Courses' datasource={[
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
                        <Grid item>
                            <MyButton label='Create Quiz' variant='contained' sx={{ width: 1 }} onClick={createQuiz} />
                        </Grid>
                    </Grid>
                    {isCreateQuiz && (
                        <Grid container mt={4}>
                            <Grid item md={12}>
                                <Input label='Question' onChange={(e) => setQuestion({ ...question, question: e.target.value })} />
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
                                <MyButton onClick={addOption}  label='Add' sx={{ width: '100%' }} />
                            </Grid>
                            <Grid item md={12} mt={4}>
                                <MyButton label='Submit Question' sx={{ width: '100%' }} />
                            </Grid>
                        </Grid>
                    )}
                </Box>
            </Box>
        </>
    )
}

export default Quiz