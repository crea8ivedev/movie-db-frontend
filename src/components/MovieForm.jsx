import { useState } from "react";
import ImageUpload from "./ImageUpload";
import Input from "./Input";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function MovieForm({
  defaultValue = {
    title: "",
    publishingYear: "",
    poster: "",
  },
}) {
  const [form, setForm] = useState(defaultValue);
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const { t } = useTranslation();

  function setValue(key, value) {
    setForm({ ...form, [key]: value });
  }

  return (
    <div className="container mx-auto max-w-7xl px-4">
      <div className="flex justify-between w-full mb-10">
        <div className="flex items-end space-x-4">
          <h1 className="text-4xl text-white font-semibold leading-none">
            {t("addMove.heading")}
          </h1>
        </div>
      </div>
      <div className="flex flex-col items-center md:items-start md:flex-row  gap-10 lg:gap-20">
        <ImageUpload
          file={form.poster}
          placeholder={t("addMove.placeholder.file")}
          setFile={(file) => setValue(file)}
        />
        <div className="space-y-6 w-full px-10 md:px-0 md:w-[60%] lg:w-[55%]">
          <Input
            value={form.title}
            onChange={(e) => setValue("title", e.target.value)}
            type="text"
            placeholder={t("addMove.placeholder.title")}
            className="w-full"
          />
          <Input
            value={form.year}
            onChange={(e) => setValue("year", e.target.value)}
            type="number"
            min="1900"
            max="2099"
            step="1"
            placeholder={t("addMove.placeholder.publish")}
            className="w-1/2 sm:w-2/5"
          />
          <div className="flex items-center w-full space-x-4 pt-4">
            <Button
              onClick={() => navigate("/movies")}
              className="flex-1 bg-transparent !border-gray-300 focus:bg-primary focus:border-primary hover:border-primary"
            >
              {t("addMove.button.cancel")}
            </Button>
            <Button type="submit" className="flex-1">
              {t("addMove.button.submit")}{" "}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
