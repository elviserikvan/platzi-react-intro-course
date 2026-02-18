import { TodoCounter } from './TodoCounter.js'
import { TodoSearch } from './TodoSearch.js'
import { TodoList } from './TodoList.js'
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tormar el curso de introduccion a reactjs', completed: false },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'Testing', completed: true },
  { text: 'Usar estados derivados', completed: true },
  { text: 'LALALALA', completed: false }
]

function App() {
  const [ todos, setTodos ] = React.useState(defaultTodos);
  const [ searchValue, setSearchValue ] = React.useState('');
  console.log('testing: ' + searchValue)

  const completedTodos = todos.filter(element => !!element.completed).length ;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(todo => !!todo.text.toLowerCase().includes(searchValue.toLowerCase()));

  return (
   <> 
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue} />
      
      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
        ))}
      
      </TodoList>

      <CreateTodoButton />
   </> 
  );
}



export default App;
