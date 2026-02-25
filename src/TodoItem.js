import { CompleteIcon } from './CompleteIcon';
import { DeleteIcon } from './DeleteIcon';
import './TodoItem.css';

function TodoItem({ text, completed, onComplete, onDelete }) {
  return (
    <li className="TodoItem">
      <CompleteIcon onComplete={ onComplete } completed={completed} />
      <p className={` TodoItem-p ${ completed && 'TodoItem-p--completed' } `}>{text}</p>
      <DeleteIcon onDelete={ onDelete } />
    </li>
  );
}

export { TodoItem }
