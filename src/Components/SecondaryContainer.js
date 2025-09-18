import { useSelector } from "react-redux";
import Movielist from "./Movielist";

const SecondaryContainer=()=>{
    const movies = useSelector(store=>store.movies)
    return (
     movies.nowPlayingMovies &&  ( 
     <div className="bg-black">
            <div className=" mt-0 md:-mt-60 md:pl-12 pl-2 relative z-20">
                <Movielist title={"Now Playing"} movies={movies.nowPlayingMovies}/>
                <Movielist title={"Top Rated"} movies={movies.TopRatedMovies}/>
                <Movielist title={"Popular"} movies={movies.popularMovies}/>
                <Movielist title={"Romance"} movies={movies.nowPlayingMovies}/>
            </div>
        </div>
        )
    )
}
export default SecondaryContainer;