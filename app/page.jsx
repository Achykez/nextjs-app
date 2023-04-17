import Movie from "./Movie";

export default async function Home() {
  const data = await fetch(`
    https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}
  `);
  const res = await data.json();

  return (
    <main className="mx-4 sm:mx-8 md:mx-16 flex flex-wrap justify-center">
      <h1 className="w-full text-center text-3xl font-bold mb-4">
        Popular Movies
      </h1>
      {res.results.map((movie) => (
        <Movie
          Title={movie.title}
          key={movie.id}
          Poster_path={movie.poster_path}
          Ratings={movie.vote_average}
          Backdrop_path={movie.backdrop_path}
          Release_date={movie.release_date}
          id={movie.id}
        />
      ))}
    </main>
  );
}
