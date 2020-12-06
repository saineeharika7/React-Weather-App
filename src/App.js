import Todo from './Components/Todo'
import TodoList from './Components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="Todo-App" >
      <div className="d-flex justify-content-center ">
        <TodoList /> 
        <Todo />
      </div>



    </div>
  );
}

export default App;
