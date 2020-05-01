import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTutorials, postTutorial, putTutorial, deleteTutorial } from '../store/actions/tutorial.action';
import Loader from 'react-loader-spinner';
import { Link } from 'react-router-dom'
import Tutorial from './Tutorial'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components';
const D = styled.div`
display:flex;
font-size: 40px;
`

const TutorialList = () => {
    const dispatch = useDispatch()
    const id = useSelector(state => state.login.user.subject)
    const tutorials = useSelector(state => state.tutorial.tutorials)
    const isLoading = useSelector(state => state.tutorial.isLoading)
    useEffect(() => {
        dispatch(getTutorials())
    },[dispatch])

    const removeTutorial = tutorialId => {
        dispatch(deleteTutorial(tutorialId))
        
    }
    return (
        <div>
            {isLoading && <Loader type='RevolvingDot' color='#45933E' height={100} width={100} /> }
            {/* {tutorials && tutorials.map((tutorial, index) => {
                return <Tutorial tutorial={tutorial} />
            })} */}
           {tutorials && tutorials.map( tutorial => {
               if(tutorial.instructor_id === id) 
               return <div>
               <D  onClick={e => {
                e.stopPropagation();
                removeTutorial(tutorial.id)
                }
                }>
              x
             </D>{" "}
                    <Link key={tutorial.id} to={`/tutorial/${tutorial.id}`}>
                   <Tutorial  tutorial={tutorial} />
                   </Link>
                </div>}
                   )}
            <Link to='/tutorialForm'>
            <button>Create Tutorial</button>
            </Link>
        </div>
    )
}
export default TutorialList
