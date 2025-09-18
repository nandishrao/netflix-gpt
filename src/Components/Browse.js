import Header               from "./Header";
import MainContainer        from "./MainContainer";
import SecondaryContainer   from "./SecondaryContainer";
import useNowPlayingMovie   from "../Hooks/useNowPlayingMovie";
import usePopularMovies     from "../Hooks/usePopularMovies";
import useTopRated          from "../Hooks/useTopRated";
import { useSelector }      from "react-redux";
import GptSearch from "./GptSearch";
const Browse = () => {
  const showGptSearch =useSelector(store=>store.gpt.showGptSearch)
  useNowPlayingMovie();
  usePopularMovies();
  useTopRated();
  return (
    <div className="relative">
      <Header />
      {showGptSearch ? <GptSearch/>
      : <>
       <MainContainer/>
      <SecondaryContainer/>
      </>
        
      }
    </div>
  );
};
export default Browse;
