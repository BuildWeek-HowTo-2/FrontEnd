import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  putTutorial, getTutorial } from '../store/actions/tutorial.action'
import { useHistory, useParams } from 'react-router-dom'
import { axiosWithAuth } from '../utils/axiosWithAuth';



const EditTutorialForm = () => {
    const dispatch = useDispatch()
    const { id } = useParams();
    const { push } = useHistory();
    // const tutorialState = useSelector(state => state.tutorial.tutorialState)
    // const step_number = useSelector(state => state.step_number)
    // const directions = useSelector(state => state.tutorial.directions)
    const instructorId = useSelector(state => state.login.user.subject)
    const tutorialInfo = useSelector(state => state.tutorial.tutorialState)

    useEffect(() => {
           dispatch(getTutorial(id)) 
    },[id])
    
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

    const editTutorial = e => {
        e.preventDefault()
        console.log({formState})
        // console.log({tutorialState})
        console.log({instructorId})
        dispatch(putTutorial(id,formState))
        push('/instructor/dashboard')
        
    }

    
    
    return (
        <div>
            <form>
            <label htmlFor='title'>Title</label>
            <input 
            id='title'
            name='title'
            value={formState.title}
            placeholder={tutorialInfo.title}
            onChange={handleChange}
            />
            <label htmlFor='summary'>Summary</label>
            <textarea
            id='summary'
            name='summary'
            value={formState.summary}
            placeholder={tutorialInfo.summary}
            onChange={handleChange}
            />
            {/* <button onClick={addStep}>Add Step</button>   
            {tutorialState && tutorialState.map( step => (
            <Tutorial step={step} />
            ))} */}
                {/* {directions && <p>{directions}</p>} */}
            <button onClick={editTutorial}>Save</button>
            </form>
        </div>
    )
}

export default EditTutorialForm