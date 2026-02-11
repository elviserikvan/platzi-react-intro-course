import './App.css';
import { TodoCounter } from './TodoCounter.js'
import { TodoSearch } from './TodoSearch.js'
import { TodoList } from './TodoList.js'
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

function App() {
  return (
    <div className="App">
      <TodoCounter />
      <TodoSearch />
      
      <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>

      <CreateTodoButton />
    </div>
  );
}



export default App;
