import { connect } from 'react-redux';

import { incrementLikes, decrementLikes } from './redux/actions';

function Likes(props) {
   console.log('render>',props);
   return (
      <div className="button-controls">
         <button onClick={props.onIncrementLikes}>❤{props.like}</button>
         <button onClick={props.onDecrementLikes}>Dislike</button>
      </div>
   )
   
}

function mapStateToProps(state){
   const {likesReduser} = state
   return{
      like: likesReduser.likes
   }
}

function mapDispatchToProps(dispatch){
   return {
      onIncrementLikes: ()=>{
         return dispatch(incrementLikes())
      },
      onDecrementLikes: ()=>{
         return dispatch(decrementLikes())
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes);
