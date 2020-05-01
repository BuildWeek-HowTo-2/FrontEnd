import { axiosWithAuth } from '../../utils/axiosWithAuth';
import axios from 'axios'

export const TUTORIALS_GET_START = 'TUTORIALS_GET_START'
export const TUTORIALS_GET_SUCCESS = 'TUTORIALS_GET_SUCCESS'
export const TUTORIALS_GET_FAILURE = 'TUTORIALS_GET_FAILURE'

export const TUTORIAL_GET_START = 'TUTORIAL_GET_START'
export const TUTORIAL_GET_SUCCESS = 'TUTORIAL_GET_SUCCESS'
export const TUTORIAL_GET_FAILURE = 'TUTORIAL_GET_FAILURE'

export const TUTORIAL_POST_START = 'TUTORIAL_POST_START'
export const TUTORIAL_POST_SUCCESS = 'TUTORIAL_POST_SUCCESS'
export const TUTORIAL_POST_FAILURE = 'TUTORIAL_POST_FAILURE'

export const TUTORIAL_PUT_START = 'TUTORIAL_PUT_START'
export const TUTORIAL_PUT_SUCCESS = 'TUTORIAL_PUT_SUCCESS'
export const TUTORIAL_PUT_FAILURE = 'TUTORIAL_PUT_FAILURE'

export const TUTORIAL_DELETE_START = 'TUTORIAL_DELETE_START'
export const TUTORIAL_DELETE_SUCCESS = 'TUTORIAL_DELETE_SUCCESS'
export const TUTORIAL_DELETE_FAILURE = 'TUTORIAL_DELETE_FAILURE'

export const TUTORIAL_CREATE_DIRECTIONS = 'TUTORIAL_CREATE_DIRECTIONS'

const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = 'https://cors-anywhere.herokuapp.com/http://how2s.herokuapp.com/api/tutorials'; // site that doesn't send Access-Control-*

export const getTutorials = value => (dispatch) => {
    dispatch({ type: TUTORIALS_GET_START });
    axiosWithAuth()
    .get(`/tutorials`)
    .then((res) => {
        console.log({res})
        dispatch({
            type: TUTORIALS_GET_SUCCESS,
            payload:res.data
        })
        //JSON.stringify(res.data.payload)
        
        // window.location.href= '/tutorialList'
    })
    .catch((err) => {
        dispatch({
            type: TUTORIALS_GET_FAILURE,
            payload: err,
        })
    })
}

export const postTutorial = (value) => (dispatch) => {
    console.log({value})
    dispatch({ type: TUTORIAL_POST_START,
    payload: value 
    });
    axiosWithAuth()
    .post('/tutorials',value)
    .then( res => {
        console.log({res})
        dispatch({
            type: TUTORIAL_POST_SUCCESS,
            payload:res.data
        })
    //     //JSON.stringify(res.data.payload)
        //props.history.push()
    })
    .catch((err) => {
        dispatch({
            type: TUTORIAL_POST_FAILURE,
            payload: err,
        })
    })
}

export const putTutorial = (id,formState) => (dispatch) => {
    dispatch({ type: TUTORIAL_PUT_START, payload:formState});
    axiosWithAuth()
    .put(`/tutorials/${id}`,formState)
    .then((res) => {
        dispatch({
            type: TUTORIAL_PUT_SUCCESS,
            payload:res.data
        })
        //JSON.stringify(res.data.payload)
        console.log({res})
        //props.history.push()
    })
    .catch((err) => {
        dispatch({
            type: TUTORIAL_PUT_FAILURE,
            payload: err,
        })
    })
}

export const deleteTutorial = (value) => (dispatch) => {
    dispatch({ type: TUTORIAL_DELETE_START, payload: value });
    axiosWithAuth()
    .delete(`/tutorials/${value}`)
    .then((res) => {
        dispatch({
            type: TUTORIAL_DELETE_SUCCESS,
            payload:value
        })
        //JSON.stringify(res.data.payload)
        console.log({res})
        //props.history.push()
         
    })
    .catch((err) => {
        dispatch({
            type: TUTORIAL_DELETE_FAILURE,
            payload: err,
        })
    })  
}

export const getTutorial = ({id,iId}) => (dispatch) => {
    dispatch({ type: TUTORIAL_GET_START, });
    axiosWithAuth()
    .get(`/tutorials/${id}`,iId)
    .then(res => {
        console.log({res})
        dispatch({
            type: TUTORIAL_GET_SUCCESS,
            payload:res.data
        })
        //JSON.stringify(res.data.payload)
        
        // window.location.href= '/tutorialList'
    })
    .catch((err) => {
        dispatch({
            type: TUTORIAL_GET_FAILURE,
            payload: err,
        })
    })
}

export const createTutorialDirections = (value) => (dispatch) => {
    console.log({value})
    dispatch( { type: TUTORIAL_CREATE_DIRECTIONS, payload: value})
}