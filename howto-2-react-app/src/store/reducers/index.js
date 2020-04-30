import { combineReducers } from 'redux';
import registerReducer from './registerReducer';
import loginReducer from './loginReducer';
import tutorialReducer from './tutorialReducer';


const rootReducer = combineReducers({
    login: loginReducer,
    register: registerReducer,
    tutorial: tutorialReducer
})

export default rootReducer