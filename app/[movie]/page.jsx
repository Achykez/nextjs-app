// import Typewriter from "typewriter-effect";
export async function generateStaticParams() {
  const data = await fetch(`
    https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}
  `);
  const res = await data.json();
  return res.results.map((movie) => ({
    movie: toString(movie.id),
  }));
}

export default async function MovieDetails({ params }) {
  const { movie } = params;

  const data = await fetch(`
    https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}
  `);
  const res = await data.json();
  const statusStyle = (statuses) => {
    return statuses === "Released"
      ? "bg-green-400 inline-block py-2 px-4 rounded"
      : "bg-red-900 inline-block py-2 px-4 rounded";
  };

  return (
    <div>
      <div>
        <h2 className=" mt-2 bg-gradient-to-r from-red-500 to-gray-500 text-transparent bg-clip-text text-2xl font-semibold">
          {res.title}
        </h2>
        <h2 className="text-lg"></h2>
        <h2>Runtime: {res.runtime} minutes</h2>
        <h2 className={statusStyle(res.status)}>{res.status}</h2>
        <img
          className="my-8 w-500 h-500 rounded-20"
          src={`https://image.tmdb.org/t/p/w500${res.backdrop_path}`}
          alt={res.title}
        />

        <p>{res.overview}</p>
      </div>
    </div>
  );
}
