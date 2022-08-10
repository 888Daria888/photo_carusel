import { combineReducers } from 'redux';
import { likesReduser } from './likeReducer';
import { inputReduser } from './inputReducer';
import { commentReduser } from './commentsReducer';
import { appReduser } from './appReduser';

export const rootReducer = combineReducers({
   likesReduser,
   inputReduser,
   commentReduser,
   appReduser,
});