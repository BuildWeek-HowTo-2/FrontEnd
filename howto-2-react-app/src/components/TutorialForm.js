import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTutorial, postTutorial } from '../store/actions/tutorial.action'
import Tutorial from './Tutorial';
import { useHistory } from 'react-router-dom'



const TutorialForm = () => {
    let history = useHistory()
    const dispatch = useDispatch()
    // const tutorialState = useSelector(state => state.tutorial.tutorialState)
    // const step_number = useSelector(state => state.step_number)
    // const directions = useSelector(state => state.tutorial.directions)
    
    
    const [ formState, setFormState] = useState(
        { 
            title: '',
            summary:''
        } 
    )
    // const [ step_number, setStepNumber ] = useState('')
    // const incrementStep = () => {
    //     setStepNumber({step_number: step_number + 1})
    // }

    const handleChange = e => {
        e.preventDefault()
        console.log({formState})
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
        // console.log({tutorialState})
        dispatch(postTutorial(formState))
        history.push('/tutorialList')
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