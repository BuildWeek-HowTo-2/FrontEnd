import { REGISTER_POST_START, REGISTER_POST_SUCCESS, REGISTER_POST_FAILURE } from '../actions/register.action';

const initialState = {
    username: '',
    password: '',
    isLoading: false,
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_POST_START:
            return {
                ...state,
                isLoading: true
            }
        case REGISTER_POST_SUCCESS:
            return {
                ...state,
                username: action.payload,
                isLoading: false
            }
        case REGISTER_POST_FAILURE:
            return {
                ...state,
                error:action.payload,
                isLoading:false
            }
        default:
            return state
    }
}

export default loginReducer