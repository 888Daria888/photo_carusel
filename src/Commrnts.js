import SingleComment from "./SingleComment";
import { useState, useEffect } from 'react';
import uniqid from 'uniqid';
import { commentCreate, commentsLoad } from './redux/actions';
import { useDispatch, useSelector } from 'react-redux'

function Comments(props) {
   const [textComment, setTextComment] = useState('');
   const comments = useSelector(state => {
      console.log('redux state >>', state);
      const { commentReduser } = state;
      return commentReduser.comments;
   })
   // console.log('comments >', comments);

   const dispatch = useDispatch();
   const hendInput = (e) => {
      // console.log('input>>>', e.target.value);
      setTextComment(e.target.value);
   }
   const handleSubmit = (e) => {
      e.preventDefault();
      console.log('submit textComment >', textComment);
      const id = uniqid();
      dispatch(commentCreate(textComment, id))
   }
   useEffect(()=>{
      dispatch(commentsLoad())
   }, []);
   console.log('COMMENTS', comments);

   return (
      <div className="card-comments">
         <form onSubmit={handleSubmit} className="comments-item-create">
            <input type='text' value={textComment} onChange={hendInput} />
            {/* сабмитить по нажатии на enter */}
            <input type='submit' hidden />
         </form>
         {!!comments.length && comments.map(res => {
            return <SingleComment key={res.id} data={res} />
         })}

      </div>
   )
}

export default Comments;