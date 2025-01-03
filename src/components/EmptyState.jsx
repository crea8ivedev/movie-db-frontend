import React from "react";
import Button from '@/components/Button'
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function EmptyState() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div className="grid place-content-center h-screen">
      <div className="space-y-6 flex flex-col items-center">
        <h1 className="text-4xl text-white font-semibold">
          {t("emptyState.heading")}
        </h1>
        <Button onClick={()=>navigate("/movies/create")}>{t("emptyState.addMovie")}</Button>
      </div>
    </div>
  );
}
