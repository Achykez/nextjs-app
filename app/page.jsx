import Link from "next/link";

export default async function Home() {

  const data = await fetch(`
    https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}
  `);
  const res = await data.json();
  console.log(res);
  return (
    <main className="flex flex-wrap justify-center">
      <h1 className="w-full text-center text-3xl font-bold mb-4">
        Popular Movies
      </h1>
      {res.results.map((movie) => (
        <div
          className="flex items-center justify-center w-1/2 p-2"
          key={movie.id}>
          <Link href={`/asd`}>
            <img
              className="w-24 h-36 object-cover rounded"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <h2>{movie.release_date}</h2>
          </Link>

          <h1 className="text-lg font-semibold ml-2">{movie.title}</h1>
        </div>
      ))}
    </main>
  );
}
