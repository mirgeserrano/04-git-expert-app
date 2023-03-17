import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GitExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    //[... variable ]asi se hace la desectruturacion
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GitExpertApp</h1>

      <AddCategory
        onNewCategory={(value) => onAddCategory(value)}
        //  setCategories={setCategories}
      />

      <ol>
        {categories.map((category) => {
          return <GifGrid key={category} category={category} />;
        })}
      </ol>
    </>
  );
};
