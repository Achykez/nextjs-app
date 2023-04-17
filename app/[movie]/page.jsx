import Image from "next/image";

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
        <h2 className="text-2xl"></h2>
        <h2 className="text-lg"></h2>
        <h2>Runtime: {res.runtime} minutes</h2>
        <h2 className={statusStyle(res.status)}>{res.status}</h2>
      </div>
    </div>
  );
}
