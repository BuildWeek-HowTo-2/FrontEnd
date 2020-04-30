import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTutorialDirections, postTutorial } from '../store/actions/tutorial.action'
import Tutorial from './Tutorial';



const TutorialDirectionsForm = () => {
    
    const dispatch = useDispatch()
    const tutorial_directions = useSelector(state => state.tutorial.tutorial_directions)
    // const step_number = useSelector(state => state.step_number)
    // const directions = useSelector(state => state.tutorial.directions)
    
    
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
        e.preventDefault()
        console.log({tutorial_directions})
        dispatch(createTutorialDirections(formState.instructions))
        setFormState( { instructions: ''} )
    }

    const publishTutorial = e => {
        e.preventDefault()
        console.log({tutorial_directions})
        dispatch(postTutorial(tutorial_directions))
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
    {tutorial_directions && tutorial_directions.map( step => (
       <Tutorial step={step} />
    ))}
        {/* {directions && <p>{directions}</p>} */}
    <button onClick={publishTutorial}>Publish Tutorial</button>
    </div>
    )
}

export default TutorialDirectionsForm