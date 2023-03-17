import { useFetchGifs } from "../hooks/useFetchGifs";
import GifItem from "./GifItem";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      //condicones
      {isLoading && <h2>Cargando...</h2>}
      <div className="card-grid">
        {images.map((img) => (
          //(...)se muestra todas las propiedades del arreglo
          <GifItem key={img.id} {...img}></GifItem>
        ))}
      </div>
    </>
  );
};

export default GifGrid;
