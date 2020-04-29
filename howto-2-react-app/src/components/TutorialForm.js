import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTutorial } from '../store/actions/tutorial.action'
import Tutorial from './Tutorial';



const TutorialForm = () => {
    
    const dispatch = useDispatch()
    const tutorialState = useSelector(state => state.tutorial.tutorialState)
    // const step_number = useSelector(state => state.step_number)
    // const directions = useSelector(state => state.tutorial.directions)
    console.log({tutorialState})
    
    const [ formState, setFormState] = useState({ instructions: ''} )
    // const [ step_number, setStepNumber ] = useState('')
    // const incrementStep = () => {
    //     setStepNumber({step_number: step_number + 1})
    // }

    const handleChange = e => {
        e.preventDefault()
        setFormState({[e.target.name]:e.target.value})
    } 

    const addStep =  e => {
        console.log({tutorialState})
        dispatch(createTutorial(formState.instructions))
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
       <button onClick={addStep}>Add Step</button>   
    {tutorialState && tutorialState.map( step => (
       <Tutorial step={step} />
    ))}
        {/* {directions && <p>{directions}</p>} */}
    </div>
    
    )
}

export default TutorialForm