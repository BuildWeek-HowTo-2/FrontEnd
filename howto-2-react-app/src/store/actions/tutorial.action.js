import axiosWithAuth from '../../utils/axiosWithAuth';

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


export const getTutorial = (value) => (dispatch) => {
    dispatch({ type: TUTORIAL_GET_START, payload: value });
    axiosWithAuth()
    .get(`/tutorials/${value}`)
    .then((res) => {
        dispatch({
            type: TUTORIAL_GET_SUCCESS,
            payload:res.data.payload
        })
        //JSON.stringify(res.data.payload)
        console.log({res})
        //props.history.push()
        window.location.href= '/tutorialList'
    })
    .catch((err) => {
        dispatch({
            type: TUTORIAL_GET_FAILURE,
            payload: err,
        })
    })
}

export const postTutorial = (value) => (dispatch) => {
    dispatch({ type: TUTORIAL_POST_START, payload: value });
    axiosWithAuth()
    .post(`/tutorials/${value}`)
    .then((res) => {
        dispatch({
            type: TUTORIAL_POST_SUCCESS,
            payload:res.data.payload
        })
        //JSON.stringify(res.data.payload)
        console.log({res})
        //props.history.push()
        window.location.href= '/tutorialList'
    })
    .catch((err) => {
        dispatch({
            type: TUTORIAL_POST_FAILURE,
            payload: err,
        })
    })
}

export const putTutorial = (value) => (dispatch) => {
    dispatch({ type: TUTORIAL_PUT_START, payload: value });
    axiosWithAuth()
    .put(`/tutorials/${value}`)
    .then((res) => {
        dispatch({
            type: TUTORIAL_PUT_SUCCESS,
            payload:res.data.payload
        })
        //JSON.stringify(res.data.payload)
        console.log({res})
        //props.history.push()
        window.location.href= '/tutorialList'
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
    .GET(`/tutorials/${value}`)
    .then((res) => {
        dispatch({
            type: TUTORIAL_DELETE_SUCCESS,
            payload:res.data.payload
        })
        //JSON.stringify(res.data.payload)
        console.log({res})
        //props.history.push()
        window.location.href= '/tutorialList'
    })
    .catch((err) => {
        dispatch({
            type: TUTORIAL_DELETE_FAILURE,
            payload: err,
        })
    })
}