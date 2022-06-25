import {INPUT_TEXT} from './types'

const initiaState = {
   text:''
}

export const inputReduser = (state=initiaState, action)=>{
   console.log('input text Reducer>', action);
   
   switch (action.type) {
      case INPUT_TEXT:
         return {
            ...state,
            text: action.text
         }
      default:
         return state
   }
}