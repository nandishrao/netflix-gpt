import { NETFLIX_BG_IMG } from "../Utils/Constants";
import GptMovies from "./GptMovies";
import GPTSeacrhBar from "./GPTSeacrchBar";


const GptSearch=()=>{
    return(
      <>
       <div className="fixed inset-0 -z-10">
  <img
    className="w-full h-full object-cover"
    src={NETFLIX_BG_IMG}
    alt="background"
  />
</div>

<div className="relative">
  <GPTSeacrhBar />
  <GptMovies />
</div>
      </>

       
    )
}
export default GptSearch;