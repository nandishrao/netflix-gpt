import { MovieCardIMG_CDN_URL } from "../Utils/Constants";

const MovieCard=({posterPath})=>{
   return(
     <div className="w-36 sm:w-40 md:w-44 lg:w-48 flex-shrink-0">
        <img 
         className="w-full h-auto rounded-lg hover:scale-105 transition-transform duration-200" 
        alt="Movie-poster"
        src={MovieCardIMG_CDN_URL+posterPath}/>
    </div>
   )
}
export default MovieCard;