import React from "react";
import { Link } from "react-router-dom";

export default function GridItem({ movie }) {
  return (
    <div className="bg-primary-darker rounded-xl p-4">
      <img src={movie.poster} alt={movie.title} className="rounded-lg mb-3" />
      <h2 className="text-xl font-semibold text-gray-300 mb-2">
        <Link to={`/movies/${movie.id}/edit`} className="hover:underline">{movie.title}</Link>
      </h2>
      <p className="text-gray-400">{movie.year}</p>
    </div>
  );
}
