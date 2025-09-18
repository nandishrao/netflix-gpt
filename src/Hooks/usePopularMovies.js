import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../Utils/movies-slice";

const usePopularMovies=()=>{
const dispatch = useDispatch();
const popularMovies=useSelector(store=>store.movies.popularMovies)
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS,
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };
  useEffect(() => {
    if(!popularMovies) getPopularMovies();
  }, []);
}
export default usePopularMovies;
