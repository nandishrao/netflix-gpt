const VideoTitle =({title,overview})=>{
    return(
        <div className=" w-screen aspect-video pt-[21%] px-6 md:px-24 absolute bg-gradient-to-r from-black">
         <h1 className=" font-bold text-white md:text-3xl text-2xl">{title}</h1>
         <p className="py-6 w-1/4 text-white text-xl hidden md:inline-block ">{overview}</p>
         <div>
            <button className="bg-white text-black p-2 font-bold rounded-md md:mr-3 hover:bg-opacity-70 0.5 mt-4">Play Now</button>
            <button className="bg-slate-400 text-black font-bold p-2 rounded-md hidden md:inline-block">More Info</button>  
         </div>
        </div>
    )
}
export default VideoTitle