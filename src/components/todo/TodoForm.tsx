import React, { useContext } from 'react';
import { TodoContext } from '../../context/TodoProvider'; // Adjust the import path as necessary

const TodoForm: React.FC = () => {
    const { state } = useContext(TodoContext);
    
    console.log(state);

    return (
        <div>
            <h1>Add todo</h1>
           <form >
            <label htmlFor='Todo'> Task</label>
            <input type="text" name='todo' id ="todo" />
            <button type='submit'> submit</button>
           </form>
        </div>
    );
}

export default TodoForm;