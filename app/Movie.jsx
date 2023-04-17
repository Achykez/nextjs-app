import Link from "next/link";

export default function Movie ({Title, id, Poster_path, Ratings, Release_date, Backdrop_path}) {
    return (
        <div
        className="flex flex-col items-center justify-center p-2 relative group w-full sm:w-1/2 md:w-1/3"
        key={id}>
        <Link href={`${id}`}>
          <img
            className="w-full h-36 object-cover rounded transition duration-500 transform group-hover:scale-105"
            src={`https://image.tmdb.org/t/p/w500${Poster_path}`}
            alt={Title}
          />
          <div className="absolute inset-0 bg-black opacity-0 transition duration-500 group-hover:opacity-100 z-10 pointer-events-none">
            <img
              className="w-full h-36 object-cover rounded transition duration-500 transform group-hover:scale-105"
              src={`https://image.tmdb.org/t/p/w500${Backdrop_path}`}
              alt={Title}
            />
          </div>
        </Link>
        <div className="w-full">
          <h1 className="bg-gradient-to-r from-blue-500 to-white text-transparent bg-clip-text py-2 text-lg font-semibold text-center">
            {Title}
          </h1>
          <h2 className="text-gradient from-blue-500 to-red mt-1 text-lg font-semibold text-center">
            Ratings⭐️: {Ratings} / 10
          </h2>
          <h2 className="text-lg font-semibold text-center">
            {Release_date}
          </h2>
        </div>
      </div>
    )
}