import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const LOGIN_POST_START = 'LOGIN_POST_START';
export const LOGIN_POST_SUCCESS = 'LOGIN_POST_SUCCESS';
export const LOGIN_POST_FAILURE = 'LOGIN_POST_FAILURE';

export const postLogin = (value) => (dispatch) => {
    dispatch({ type: LOGIN_POST_START, payload: value });
    axiosWithAuth()
    .post('/login', value)
    .then((res) => {
        dispatch({
            type: LOGIN_POST_SUCCESS,
            payload:res.data.payload
        })
        //JSON.stringify(res.data.payload)
        localStorage.setItem('token',res.data.payload)
        //props.history.push()
        window.location.href= '/'
    })
    .catch((err) => {
        dispatch({
            type: LOGIN_POST_FAILURE,
            payload: err,
        })
    })
}