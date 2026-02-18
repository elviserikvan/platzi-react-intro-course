import { TodoCounter } from './TodoCounter.js'
import { TodoSearch } from './TodoSearch.js'
import { TodoList } from './TodoList.js'
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tormar el curso de introduccion a reactjs', completed: false },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'Testing', completed: true }
]

function App() {
  return (
   <> 
      <TodoCounter completed={16} total={25} />
      <TodoSearch />
      
      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
        ))}
      
      </TodoList>

      <CreateTodoButton />
   </> 
  );
}



export default App;
