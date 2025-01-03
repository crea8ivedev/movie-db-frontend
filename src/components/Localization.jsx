import { useTranslation } from "react-i18next";

function Localization() {
  const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <select
      onChange={changeLanguage}
      value={i18n.language}
      className="bg-transparent rounded-md pl-2 pr-5 py-1 text-xs  text-gray-300 border-gray-300 "
    >
      <option value="en">English</option>
      <option value="es">Español</option>
    </select>
  );
}

export default Localization;
