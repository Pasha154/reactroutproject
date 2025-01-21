import {useSelector, useDispatch} from "react-redux";
import {incremenet, decrement} from "../../store_count/action/action";
import './Counter.css'

export default function Counter(){
    const count = useSelector((state) => state.count);
    const dispath = useDispatch();
    return(
        <div>
            <button className='btn-count' onClick={()=>dispath(incremenet())}>Increment</button>
            <span>{count}</span>
            <button className='btn-count' onClick={()=>dispath(decrement())}>Decrement</button>
        </div>
    )
}