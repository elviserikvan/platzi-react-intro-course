import React from "react";
import { TodoIcon } from './TodoIcon';

function CompleteIcon ({ completed, onComplete }) {
  return <TodoIcon type="check" 
    onClick={ onComplete }
    color={completed ? 'green' : 'gray'} /> ;
}

export { CompleteIcon }
