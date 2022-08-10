import { useDispatch, useSelector } from 'react-redux';
import { inputText } from './redux/actions';


//cпособ через хуки

function Title(props) {
   console.log('props title>', props);

   const text = useSelector(state=> {
      const { inputReduser } = state
      return inputReduser.text
      
   })

   const dispatch = useDispatch();

   const handleChange = (e) => {
      console.log("hendle text >>", e.target.value);
      dispatch(inputText(e.target.value))
   }

   return (
      <div className="card-title">
         <div className="card-title-top">
            <input type="text" onChange={handleChange}></input>
         </div>
         <p>{text}</p>
      </div>
   )

}

export default Title;
