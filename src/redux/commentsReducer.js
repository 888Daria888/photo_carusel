import { COMMENT_CREATE,
   COMMENT_UPDATE,
   COMMENT_DELETE,
   COMMENTS_LOAD 
} from './types'

const initiaState = {
   comments: [],
}

export const commentReduser = (state = initiaState, action) => {
   console.log('comments Reducer>', action);

   switch (action.type) {
      case COMMENT_CREATE:
         return {
            ...state,
            comments: [...state.comments, action.data]
         }
      case COMMENTS_LOAD:
         const commtntsNew = action.data.map(res =>{
            return {
               text:res.name,
               id: res.id
            }
         })
         return{
            ...state,
            comments:commtntsNew
         }
         
      case COMMENT_UPDATE:
         const { data } = action;
         const { comments } = state;
         const itemIndex = comments.findIndex(res => res.id === data.id)
         const nextComments = [
            ...comments.slice(0, itemIndex),
            data,
            ...comments.slice(itemIndex + 1)
         ]; 
         return {
            ...state,
            comments: nextComments
         }
      //значения находятся в глобальной облатсти видимости, поэтому помещаем его в ретурн в колбек функцию
      // такая логика изолирована, потому что data уже использовалась. 
      case COMMENT_DELETE:
         return (() => {
            const { id } = action;
            const { comments } = state;
            const itemIndex = comments.findIndex(res => res.id === id);

            const nextComments = [
               ...comments.slice(0, itemIndex),
               ...comments.slice(itemIndex + 1)
            ];
            return {
               ...state,
               comments: nextComments
            }
         })();
      default:
         return state
   }
}