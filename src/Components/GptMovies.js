import { useSelector } from "react-redux"
import Movielist from "./Movielist"
const GptMovies =()=>{
const { movieNames, movieResults } = useSelector(store => store.gpt)

if (!movieNames) return null;

return (
  <div className="bg-black">
      <div>
   {movieNames.map((movieName, index) => (
  <Movielist
    key={movieName}
    title={movieName}
    movies={movieResults[index]}
  />
))}

  </div>
    </div>
)

}
export default GptMovies;