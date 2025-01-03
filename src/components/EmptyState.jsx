import React from "react";
import Button from '@/components/Button'
import { useNavigate } from "react-router-dom";

export default function EmptyState() {
  const navigate = useNavigate();
  return (
    <div className="grid place-content-center h-screen">
      <div className="space-y-6 flex flex-col items-center">
        <h1 className="text-4xl text-white font-semibold">
          Your movie list is empty
        </h1>
        <Button onClick={()=>navigate("/movies/create")}>Add a new movie</Button>
      </div>
    </div>
  );
}
