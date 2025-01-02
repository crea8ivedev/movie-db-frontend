import React from "react";
import MovieForm from "@/components/MovieForm";

export default function EditMovie() {
  return (
    <MovieForm
      defaultValue={{
        id: 4,
        title: "Inside Out 2",
        poster:
          "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
        year: "2024",
      }}
    />
  );
}
