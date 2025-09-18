import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/Constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo  } from "../Utils/movies-slice";

const useGetTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
      API_OPTIONS,
    );
    const json = await data.json();
    const filteredtrailer = json.results.filter(
      (video) => video.type == "Trailer" && video.name == "Official Trailer",
    );
    const trailer = filteredtrailer.length
      ? filteredtrailer[0]
      : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
};


export default useGetTrailer;
