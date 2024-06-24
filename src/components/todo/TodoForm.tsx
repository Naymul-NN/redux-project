import React, { FormEvent, useContext, useState } from 'react';
import { TodoContext } from '../../context/TodoProvider'; // Adjust the import path as necessary

const TodoForm: React.FC = () => {
    const {state, dispatch } = useContext(TodoContext);
    
    const [task , setTask] = useState('');
    
 console.log(state);

    const handleSubmit = (e: FormEvent) => {
          e.preventDefault();

          const todo = {
            id: Math.random().toString(36).substring(2,7),
            title: task,
            isCompleated: false,

          }
          dispatch({type: 'addTodo',payload: todo});
    }

    return (
        <div>
            <h1>Add todo</h1>
           <form onSubmit={handleSubmit}>
            <label htmlFor='Todo'> Task</label>
            <input className=' border border-purple-700' type="text" name='todo' id ="todo" onBlur={(e)=> setTask(e.target.value)}/>
            <button className='btn ml-10 btn-primary' type='submit'> submit</button>
           </form>
        </div>
    );
}

export default TodoForm;