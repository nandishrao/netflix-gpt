import MovieCard from "./MovieCard";

const Movielist = ({ title, movies }) => {
  return (
    <div className="px-4">
      {/* Title */}
      <h1 className=" text-lg md:text-3xl mb-3 py-4 text-white font-bold">{title}</h1>

      {/* Scrollable row */}
      <div className="flex gap-2 overflow-x-scroll scroll-smooth">
        {movies?.map((movie) => (
          <MovieCard 
            key={movie?.id} 
            posterPath={movie?.poster_path} 
          />
        ))}
      </div>
    </div>
  );
};

export default Movielist;
