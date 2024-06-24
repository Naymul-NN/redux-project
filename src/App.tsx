
import TodoForm from './components/todo/TodoForm';
import TodoProvider from './context/TodoProvider';



function App() {
  // const [count, setCount] = useState(0);
  return (
   
<TodoProvider>

     
        <TodoForm/>
      
</TodoProvider>
   
  );
}

export default App;
