//hooks personalizados, son simplemenetes funciones
import { useEffect, useState } from "react";
import { getGitfs } from "../helpers/getGifts";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImagen = await getGitfs(category);
    setImages(newImagen);
    setIsLoading(false);
  };
  useEffect(() => {
    getImages();
  }, []);
  return {
    images,
    isLoading,
  };
};
