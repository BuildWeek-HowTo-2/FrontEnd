import react from 'react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTutorial, postTutorial, putTutorial, deleteTutorial } from '../store/actions/tutorial.action';
import Loader from 'react-loader-spinner';
import { Link } from 'react-router-dom'
import Tutorial from './Tutorial'


const TutorialList = () => {
    const dispatch = useDispatch()
    
    const tutorials = useSelector(state => state.tutorial.tutorials)
    const isLoading = useSelector(state => state.tutorial.isLoading)
    
    useEffect(() => {
        dispatch(getTutorial())
    },[])


    return (
        <div>
            {isLoading && <Loader type='RevolvingDot' color='#45933E' height={100} width={100} /> }
            {tutorials && tutorials.map((tutorial, index) => {
                return <Tutorial tutorial={tutorial} />
            })}
            <Link to='/tutorialForm'>
            <button>Create Tutorial</button>
            </Link>
        </div>
    )
}
export default TutorialList
