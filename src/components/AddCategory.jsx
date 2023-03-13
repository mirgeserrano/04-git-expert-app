import { useState } from "react";
import React from "react";
//import { GitExpertApp } from "../GitExpertApp";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setinputValue] = useState("");

  const onInputChange = ({ target }) => {
    //Obtiene el valor del imput
    setinputValue(target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    //esta interaccion no permite incertar valores menor de 1 string
    if (inputValue.trim().length <= 1) return;

    //setCategories((categories) => [inputValue, ...categories]);
    // el imput no puede estar bacio
    onNewCategory(inputValue.trim());

    setinputValue("");
  };

  return (
    <form action="" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
