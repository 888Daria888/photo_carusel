import {INCREMENT, DECREMENT} from './types'
const initiaState = {
   likes:0
}
export const likesReduser = (state=initiaState, action)=>{
   
   switch (action.type) {
      case INCREMENT:
         return {
            ...state,
            likes: state.likes + 1
         }
      case DECREMENT:
         return {
            ...state,
            likes: state.likes - 1
            }
      default:
         return state
   }
}
