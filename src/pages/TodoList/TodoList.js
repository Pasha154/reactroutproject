import {useDispatch}  from "react-redux";
import {deleteTask, editTask} from "../../store_todo/slices/todoSlice";
import "./TodoList.css";

const List =({id, label}) => {
    const dispatch = useDispatch();

    return (
        <div className="container-todo">
            <div className="todolist" onClick={() => dispatch(editTask({ id, label }))}>
                {label}
            </div>
            <button onClick={() => dispatch(deleteTask(id))}>Delete</button>
        </div>
    );
};

export default List;