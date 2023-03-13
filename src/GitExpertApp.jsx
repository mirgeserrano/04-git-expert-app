import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GitExpertApp = () => {
  const [categories, setCategories] = useState(["one punch", "Dragon Balll"]);
  const onAddCategory = (newCategory) => {
    console.log(newCategory);
    //[... variable ]asi se hace la desectruturacion
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      {/* titulo */}
      <h1>GitExpertApp</h1>
      {/* input */}
      <AddCategory
        onNewCategory={(value) => onAddCategory(value)}
        //  setCategories={setCategories}
      />
      {/* listado de gif */}
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};
