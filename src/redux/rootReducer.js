import { combineReducers } from 'redux';
import { likesReduser } from './likeReducer';
import { inputReduser } from './inputReducer';
import {commentReduser} from './commentsReducer'

export const rootReducer = combineReducers({
   likesReduser,
   inputReduser,
   commentReduser
});