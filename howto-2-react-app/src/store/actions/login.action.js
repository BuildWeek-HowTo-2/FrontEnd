import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const LOGIN_POST_START = 'LOGIN_POST_START';
export const LOGIN_POST_SUCCESS = 'LOGIN_POST_SUCCESS';
export const LOGIN_POST_FAILURE = 'LOGIN_POST_FAILURE';

export const postUserLogin = (value) => (dispatch) => {
    dispatch({ type: LOGIN_POST_START, payload: value });
    axiosWithAuth()
    .post('/user/login', value)
    .then((res) => {
        dispatch({
            type: LOGIN_POST_SUCCESS,
            payload:res.data.payload
        })
        //JSON.stringify(res.data.payload)
        console.log({res})
        localStorage.setItem('token',res.data.payload)
        //props.history.push()
        window.location.href= '/login'
    })
    .catch((err) => {
        dispatch({
            type: LOGIN_POST_FAILURE,
            payload: err,
        })
    })
}

export const postInstructorLogin = (value) => (dispatch) => {
    dispatch({ type: LOGIN_POST_START, payload: value });
    axiosWithAuth()
    .post('/instructors/login', value)
    .then((res) => {
        dispatch({
            type: LOGIN_POST_SUCCESS,
            payload:res.data.payload
        })
        console.log({res})
        //JSON.stringify(res.data.payload)
        localStorage.setItem('token',res.data.payload)
        //props.history.push()
        window.location.href= '/login'
    })
    .catch((err) => {
        dispatch({
            type: LOGIN_POST_FAILURE,
            payload: err,
        })
    })
}