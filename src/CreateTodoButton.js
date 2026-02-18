import './CreateTodoButton.css';

function CreateTodoButton() {
  return (
    <button
      onClick={ () => console.log('Click')}
      className="CreateTodoButton"
    >x</button>
  );
}

export { CreateTodoButton };
