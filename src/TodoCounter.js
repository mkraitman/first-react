import React from "react";
import './TodoCounter.css'

function TodoCounter() {
  return (
    <h2
      style={{
        color: "green",
        backgroundColor: "yellow",
      }}
    >
      Has Completado 2 de 3 TODOs
    </h2>
  );
}

export { TodoCounter };
