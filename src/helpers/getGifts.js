export const getGitfs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/trending?api_key=7tq55gRTihgiYzFmtrBt5ThKYH3BmiE5&q=${category}&limit=${10}`;

  const resp = await fetch(url);
  const { data } = await resp.json();
  //propiedades que me interensan de los gift
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  return gifs;
};
//7tq55gRTihgiYzFmtrBt5ThKYH3BmiE5
