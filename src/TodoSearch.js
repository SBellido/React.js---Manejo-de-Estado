import React from 'react';
import './TodoSearch.css';

function TodoSearch() {
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <input 
      placeholder="Escriba la tarea a realizar" 
      className="TodoSearch" 
      value={searchValue}
      onChange={(e) => {
        setSearchValue(e.target.value);
      }}
    /> 
  );
}

export { TodoSearch };