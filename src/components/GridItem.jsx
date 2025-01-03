import React from "react";
import { Link } from "react-router-dom";

export default function GridItem({ movie }) {
  return (
    <Link
      className="bg-primary-darker rounded-xl p-4"
      to={`/movies/${movie.id}/edit`}
    >
      <div className="w-full aspect-[9/14]">
        <img src={movie.poster} alt={movie.title} className="rounded-lg mb-3 object-cover h-full " />
      </div>
      <h2 className="text-xl font-semibold text-gray-300 mb-2 hover:underline">
        {movie.title}
      </h2>
      <p className="text-gray-400">{movie.year}</p>
    </Link>
  );
}
