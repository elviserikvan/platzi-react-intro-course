import React from 'react';
import './TodoSearch.css'

function TodoSearch({searchValue, setSearchValue}) {
  return (
    <input
      value={searchValue}
      onChange={event => {
        setSearchValue(event.target.value)
      }}
      className="TodoSearch"
      placeholder="Cortar cebolla"
      type="text" />
  );
}

export { TodoSearch };
