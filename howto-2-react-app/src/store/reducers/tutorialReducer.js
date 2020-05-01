import { TUTORIALS_GET_START, TUTORIALS_GET_SUCCESS, TUTORIALS_GET_FAILURE,
        TUTORIAL_GET_START, TUTORIAL_GET_SUCCESS, TUTORIAL_GET_FAILURE, 
        TUTORIAL_POST_START, TUTORIAL_POST_SUCCESS, TUTORIAL_POST_FAILURE,
        TUTORIAL_PUT_START,TUTORIAL_PUT_SUCCESS,TUTORIAL_PUT_FAILURE,
        TUTORIAL_DELETE_START,TUTORIAL_DELETE_SUCCESS,TUTORIAL_DELETE_FAILURE, 
        TUTORIAL_CREATE_DIRECTIONS
} from '../actions/tutorial.action';

const initialState = {
    isLoading: false,
    tutorials:[],
    tutorialState:{},
    // tutorial_directions:[],
    step_number: 1,
    directions:'',
    // title:'',
    // summary:'',
    // likes:'',
    tutorial_directions: 
    [
        // {
        //     step_number: '',
        //     instructions: ''
        // },     
    ]
}

const tutorialReducer = (state = initialState, action) => {
    switch (action.type) {
        case TUTORIALS_GET_START:
            return {
                ...state,
                isLoading: true
            }
        case TUTORIALS_GET_SUCCESS:
            return {
                ...state,
                tutorials:action.payload,
                isLoading: false
            }
        case TUTORIALS_GET_FAILURE:
            return {
                ...state,
                error:action.payload,
                isLoading:false
            }
        case TUTORIAL_GET_START:
            return {
                ...state,
                isLoading: true
            }
        case TUTORIAL_GET_SUCCESS:
            return {
                ...state,
                tutorialState:action.payload,
                isLoading: false
            }
        case TUTORIAL_GET_FAILURE:
            return {
                ...state,
                error:action.payload,
                isLoading:false
            }
        case TUTORIAL_POST_START:
            return {
                ...state,
                isLoading: true
            }
        case TUTORIAL_POST_SUCCESS:
            return {
                ...state,
                tutorials:[...state.tutorials,action.payload],
                isLoading: false
            }
        case TUTORIAL_POST_FAILURE:
            return {
                ...state,
                error:action.payload,
                isLoading:false
            }
        case TUTORIAL_PUT_START:
            return {
                ...state,
                isLoading: true
            }
        case TUTORIAL_PUT_SUCCESS:
            return {
                ...state,
                tutorials: state.tutorials.map(tutorial =>{
                    if (tutorial.id === action.payload.id){
                        tutorial = action.payload
                        return tutorial
                    } 
                    else { return tutorial}
                }),
                isLoading: false
            }
        case TUTORIAL_PUT_FAILURE:
            return {
                ...state,
                error:action.payload,
                isLoading:false
            }
        case TUTORIAL_DELETE_START:
            return {
                ...state,
                isLoading: true
            }
        case TUTORIAL_DELETE_SUCCESS:
            return {
                ...state,
                tutorials: state.tutorials.filter( tutorial => action.payload !== tutorial.id),
                isLoading: false
            }
        case TUTORIAL_DELETE_FAILURE:
            return {
                ...state,
                error:action.payload,
                isLoading:false
            }
        case TUTORIAL_CREATE_DIRECTIONS:
            return {
                ...state,
                // directions: action.payload
                tutorial_directions: [...state.tutorial_directions, { instructions:action.payload, step_number:state.step_number}],
                step_number: state.step_number + 1,
                // instructions:action.payload,
                // tutorial:[ {state.step_number,state.instructions}]  
            }
        default:
            return state
    }
}

export default tutorialReducer