import React from "react";
import Button from '@/components/Button'

export default function EmptyState() {
  return (
    <div className="grid place-content-center h-screen">
      <div className="space-y-6 flex flex-col items-center">
        <h1 className="text-4xl text-white font-semibold">
          Your movie list is empty
        </h1>
        <Button>Add a new movie</Button>
      </div>
    </div>
  );
}
