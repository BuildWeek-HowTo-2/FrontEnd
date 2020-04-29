import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTutorial } from '../store/actions/tutorial.action'



const TutorialForm = () => {
    
    const dispatch = useDispatch()
    // const tutorial = useSelector(state => state.tutorial)
    const step_number = useSelector(state => state.step_number)
    const directions = useSelector(state => state.tutorial.directions)
    console.log({directions})
    const [ formState, setFormState] = useState({ instructions: ''} )
    // const [ step_number, setStepNumber ] = useState('')
    // const incrementStep = () => {
    //     setStepNumber({step_number: step_number + 1})
    // }

    const handleChange = e => {
        e.preventDefault()
        setFormState({[e.target.name]:e.target.value})
    } 
    
    return (
    <div>
            

      <label htmlFor='instructions'></label>
      <textarea
        id='instructions'
        name='instructions'
        value={formState.instructions}
        onChange={handleChange}
      />
       <button onClick={() => dispatch(createTutorial(formState.instructions))}>Add Step</button>   
    {/* {tutorialR.tutorial && tutorialR.tutorial.map( step => (
        <div>
        <p>{step.step_number}</p>
        <p>{step.instructions}</p>
        </div>
    ))} */}
        {tutorial.directions && <p>{tutorial.directions}</p>}
    </div>
    
    )
}

export default TutorialForm