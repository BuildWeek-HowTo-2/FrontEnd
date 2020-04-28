import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import registerReducer from './registerReducer';
import loginReducer from './loginReducer';

const persistConfig = {
    key: 'root',
    storage
}

const rootReducer = combineReducers({
    login: loginReducer,
    register: registerReducer
})

export default persistReducer(persistConfig,rootReducer)