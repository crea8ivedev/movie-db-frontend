import Button from "@/components/Button";
import EmptyState from "@/components/EmptyState";
import GridItem from "@/components/GridItem";
import MovieGrid from "@/components/MovieGrid";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "@/utils/axios";
import useAuth from "@/hooks/useAuth";

const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    poster:
      "https://image.tmdb.org/t/p/w600_and_h900_bestv2/hE9SAMyMSUGAPsHUGdyl6irv11v.jpg",
    year: "2024",
  },
  {
    id: 2,
    title: "Moana 2",
    poster:
      "https://image.tmdb.org/t/p/w600_and_h900_bestv2/m0SbwFNCa9epW1X60deLqTHiP7x.jpg",
    year: "2024",
  },
  {
    id: 3,
    title: "Deadpool & Wolverine",
    poster:
      "https://image.tmdb.org/t/p/w600_and_h900_bestv2/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
    year: "2024",
  },
  {
    id: 1,
    title: "The Lord of the Rings",
    poster:
      "https://image.tmdb.org/t/p/w600_and_h900_bestv2/hE9SAMyMSUGAPsHUGdyl6irv11v.jpg",
    year: "2024",
  },
  {
    id: 2,
    title: "Moana 2",
    poster:
      "https://image.tmdb.org/t/p/w600_and_h900_bestv2/m0SbwFNCa9epW1X60deLqTHiP7x.jpg",
    year: "2024",
  },
  {
    id: 3,
    title: "Deadpool & Wolverine",
    poster:
      "https://image.tmdb.org/t/p/w600_and_h900_bestv2/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
    year: "2024",
  },
  {
    id: 4,
    title: "Inside Out 2",
    poster:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
    year: "2024",
  },
];

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const setIsLogin = useAuth((state)=>state.setIsLogin);
  const navigate = useNavigate();

  async function logout(){
    await axios.delete('/api/auth/logout')
    setIsLogin(false)
    navigate("/")
  }

  async function fetchMovies(){
    const { data: movies } = await axios.get(`/api/movies`)
    setMovies(movies.data)
  }

  useEffect(() =>{
     fetchMovies()
  }, [])

  return movies.length < 1 ? (
    <EmptyState />
  ) : (
    <div className="container mx-auto max-w-7xl py-10 px-4">
      <div className="flex justify-between w-full mb-6">
        <div className="flex items-end space-x-4">
          <h1 className="text-4xl text-white font-semibold leading-none">
            My Movies
          </h1>
          <Link to="/movies/create" className="text-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </Link>
        </div>
        <Button onClick={logout}>Logout</Button>
      </div>
      <MovieGrid>
        {movies.map((movie, index) => (
          <GridItem movie={movie} key={index} />
        ))}
      </MovieGrid>
    </div>
  );
}
