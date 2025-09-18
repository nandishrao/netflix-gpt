import { useRef } from "react";
import GeminiAi from "../Utils/GeminiAi";
import { API_OPTIONS } from "../Utils/Constants";
import { addGeminiMovie } from "../Utils/GptSlice";
import { useDispatch } from "react-redux";

const GPTSearchBar = () => {
const dispatch = useDispatch()
const searchText = useRef(null);
const FetchGeminiMovie= async (movie)=>{
      const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1',API_OPTIONS)
      const json = await data.json()
      return json.results;}
  const handelGPTsearchClick = async () => {
  const geminiQuery =
    "Act as a movie recommendation system and give movie recommendation for" +
    searchText.current.value +
    "Give me just five movies , common separated like the result given ahead Example :Don,sholay,gadar,golmaal, koi mil gaya";
  if (!searchText.current || !searchText.current.value) return;
  const response = await GeminiAi.models.generateContent({
    model: "gemini-2.5-flash",
    contents: geminiQuery,
  });
  console.log(response.text);
  const GeminiMovies = response.text.split(",").map(m => m.trim());
  console.log(GeminiMovies)
  const promiseArray=GeminiMovies.map(movie=>FetchGeminiMovie(movie))//returns 5 promises before the results
  const TmdbGeminiResults=await Promise.all(promiseArray)// waits until all the promises are resolved;
  console.log(TmdbGeminiResults)
  dispatch(addGeminiMovie({ movieNames: GeminiMovies, movieResults: TmdbGeminiResults }))

  };
return (
  <div className="pt-[30%] md:pt-[10%] flex justify-center">
    <form
      className="bg-black w-full md:w-1/2 flex justify-between p-2 rounded-md"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        ref={searchText}
        type="text"
        className=" m-4 w-[80%] p-2 rounded text-slate-600"
        placeholder="Ask GPT for movie suggestion "
      />
      <button
        onClick={handelGPTsearchClick}
        className="focus:outline-none text-white bg-red-700 ml-4 font-medium rounded-lg text-sm px-6 py-2 mb-2 col-span-3"
      >
        Search
      </button>
    </form>
  </div>
);
};
export default GPTSearchBar;
