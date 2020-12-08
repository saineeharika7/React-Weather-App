import Todo from './Components/Todo'
import TodoList from './Components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
function App() {
  return (
    <div className="Todo-App" >
        <TodoList /> 
        <Todo />



    </div>
  );
}

export default App;
