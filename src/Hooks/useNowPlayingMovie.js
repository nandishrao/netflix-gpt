import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../Utils/movies-slice";

const useNowPlayingMovie=()=>{
const dispatch = useDispatch();
const nowPlayingMovies=useSelector(store=>store.movies.nowPlayingMovies)
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS,
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };
  useEffect(() => {
    if(!nowPlayingMovies) getNowPlayingMovies();
  }, []);
}
export default useNowPlayingMovie;
