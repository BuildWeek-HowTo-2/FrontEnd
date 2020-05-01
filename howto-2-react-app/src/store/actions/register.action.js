import { axiosWithAuth } from "../../utils/axiosWithAuth";
import axios from 'axios';

export const REGISTER_POST_START = 'REGISTER_POST_START';
export const REGISTER_POST_SUCCESS = 'REGISTER_POST_SUCCESS';
export const REGISTER_POST_FAILURE = 'REGISTER_POST_FAILURE';




export const postUserRegister = (value) => (dispatch) => {
    dispatch({ type: REGISTER_POST_START, payload: value });
    axiosWithAuth()
    .post('/users/register', value)
    .then((res) => {
        dispatch({
            type: REGISTER_POST_SUCCESS,
        })
        console.log({res})
        console.log('res.data.payload',res.data.payload)
        
        //JSON.stringify(res.data.payload)
        // localStorage.setItem('token',res.data.token)
        //props.history.push()
    })
    .catch((err) => {
        dispatch({
            type: REGISTER_POST_FAILURE,
            payload: err,
        })
    })
}

export const postInstructorRegister = (value) => (dispatch) => {
    // let history = useHistory()
    dispatch({ type: REGISTER_POST_START });
    axiosWithAuth()
    .post('/instructors/register', value)
    .then((res) => {
        console.log({res})
        dispatch({
            type: REGISTER_POST_SUCCESS
        })
        // history.push('/instructor/login')
        
        
        //JSON.stringify(res.data.payload)
        // localStorage.setItem('token',res.data.token)
        //props.history.push()
        // window.location.href= '/instructor/login'
    })
    .catch((err) => {
        dispatch({
            type: REGISTER_POST_FAILURE,
            payload: err,
        })
    })
}