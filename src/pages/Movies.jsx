import Button from "@/components/Button";
import EmptyState from "@/components/EmptyState";
import GridItem from "@/components/GridItem";
import MovieGrid from "@/components/MovieGrid";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "@/utils/axios";
import useAuth from "@/hooks/useAuth";
import { useTranslation } from "react-i18next";
import DropdownUser from "@/components/Dropdown";
import Loading from "@/components/Loading";

export default function Movies() {
  const { t } = useTranslation();

  const [movies, setMovies] = useState([]);
  const setIsLogin = useAuth((state) => state.setIsLogin);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  async function logout() {
    await axios.delete("/api/auth/logout");
    setIsLogin(false);
    navigate("/");
  }

  async function fetchMovies() {
    const { data: movies } = await axios.get(`/api/movies`);
    setIsLoading(false)
    setMovies(movies.data);
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  if(isLoading) return <Loading/>

  return movies.length < 1 ? (
    <EmptyState />
  ) : (
    <div className="container mx-auto max-w-7xl px-4">
      <div className="flex justify-between w-full mb-6">
        <div className="flex items-end space-x-4">
          <h1 className="text-4xl text-white font-semibold leading-none">
            {t("viewMovie.heading")}
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
        <DropdownUser logout={logout} />
      </div>
      <MovieGrid>
        {movies.map((movie, index) => (
          <GridItem movie={movie} key={index} />
        ))}
      </MovieGrid>
    </div>
  );
}
