import React from 'react';

function TodoHeader({ children, loading }) {
  return (
    <header>
      {/* convertimos en un array todo el contenido que haya en children con React.Children, y con map vamos a utilizar el método React.cloneElement para clonar cada elemento (cada child) y pasarle la prop loading a cada una de esas copias */}
      {React.Children
        .toArray(children)
        .map(child => React.cloneElement(child, {loading}))
        }
    </header>
  );
}

export { TodoHeader };