import { axiosWithAuth } from "../../utils/axiosWithAuth";
export const LOGIN_POST_START = 'LOGIN_POST_START';
export const LOGIN_POST_SUCCESS = 'LOGIN_POST_SUCCESS';
export const LOGIN_POST_FAILURE = 'LOGIN_POST_FAILURE';

const getUserFromToken = token => {
    if (token) {
      try {
        return JSON.parse(atob(token.split('.')[1]));
      } catch (error) {
        // ignore
      }
    }
  
    return null;
  };

export const postUserLogin = (value) => (dispatch) => {
    dispatch({ type: LOGIN_POST_START, payload: value });
    axiosWithAuth()
    .post('/users/login', value)
    .then((res) => {
        console.log({res})
        localStorage.setItem('token',res.data.token)
        const token = JSON.parse(localStorage.getItem('token'))
        console.log({token})
        dispatch({
            type: LOGIN_POST_SUCCESS,
            payload: token
        })
    })
    .catch((err) => {
        dispatch({
            type: LOGIN_POST_FAILURE,
            payload: err,
        })
    })
}

export const postInstructorLogin = (value) => (dispatch) => {
    console.log({value})
    dispatch({ type: LOGIN_POST_START });
    axiosWithAuth()
    .post('/instructors/login', value)
    .then((res) => {
        console.log({res})
        localStorage.setItem('token',res.data.token)
        // const token = JSON.parse(localStorage.getItem('token'))
        const token = getUserFromToken(res.data.token)
        console.log({token})
        dispatch({
            type: LOGIN_POST_SUCCESS,
            payload: token
        })
    })
    .catch((err) => {
        console.log({err})
        dispatch({
            type: LOGIN_POST_FAILURE,
            payload: err,
        })
    })
}