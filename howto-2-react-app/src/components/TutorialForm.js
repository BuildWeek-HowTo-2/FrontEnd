import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  postTutorial } from '../store/actions/tutorial.action'
import { useHistory } from 'react-router-dom'



const TutorialForm = () => {
    let history = useHistory()
    const dispatch = useDispatch()
    // const tutorialState = useSelector(state => state.tutorial.tutorialState)
    // const step_number = useSelector(state => state.step_number)
    // const directions = useSelector(state => state.tutorial.directions)
    const instructorId = useSelector(state => state.login.user.subject)
    
    const [ formState, setFormState] = useState(
        { 
            title: '',
            summary:'',
            instructor_id: instructorId
        } 
    )
    // const [ step_number, setStepNumber ] = useState('')
    // const incrementStep = () => {
    //     setStepNumber({step_number: step_number + 1})
    // }

    const handleChange = e => {
        e.preventDefault()
        setFormState({...formState,[e.target.name]:e.target.value})
    } 

    // const addStep =  e => {
    //     e.preventDefault()
    //     console.log({tutorialState})
    //     // dispatch(createTutorialForm(formState.instructions))
    //     setFormState( { instructions: ''} )
    // }

    const publishTutorial = e => {
        e.preventDefault()
        console.log({formState})
        // console.log({tutorialState})
        console.log({instructorId})
        dispatch(postTutorial(formState))
        // history.push('/instructor/dashboard')
    }
    
    return (
        <div>
            <form>
            <label htmlFor='title'>Title</label>
            <input 
            id='title'
            name='title'
            value={formState.title}
            onChange={handleChange}
            />
            <label htmlFor='summary'>Summary</label>
            <textarea
            id='summary'
            name='summary'
            value={formState.summary}
            onChange={handleChange}
            />
            {/* <button onClick={addStep}>Add Step</button>   
            {tutorialState && tutorialState.map( step => (
            <Tutorial step={step} />
            ))} */}
                {/* {directions && <p>{directions}</p>} */}
            <button onClick={publishTutorial}>Add</button>
            </form>
        </div>
    )
}

export default TutorialForm