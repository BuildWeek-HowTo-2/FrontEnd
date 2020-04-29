import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import registerReducer from './registerReducer';
import loginReducer from './loginReducer';
import tutorialReducer from './tutorialReducer';

// const persistConfig = {
//     key: 'root',
//     storage
// }

const rootReducer = combineReducers({
    login: loginReducer,
    register: registerReducer,
    tutorial: tutorialReducer
})

export default rootReducer