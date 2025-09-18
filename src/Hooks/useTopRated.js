import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import {addTopRatedMovies } from "../Utils/movies-slice";

const useTopRated=()=>{
const dispatch = useDispatch();
const TopRatedMovies= useSelector(store=>store.movies.TopRatedMovies)
  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS,
    );
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };
  useEffect(() => {
  if(!TopRatedMovies) getTopRatedMovies();
  }, []);
}
export default useTopRated;
