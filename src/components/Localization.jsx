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
      // className="bg-transparent border-gray-400 rounded-md pl-2 pr-5 py-1 text-xs  text-gray-300"
      className="text-white bg-transparent focus:ring-4 focus:ring-primary-light font-medium rounded-lg text-sm py-1 px-1.5 text-center border border-transparent focus:border-primary transition-colors duration-100"
    >
      <option value="en">English</option>
      <option value="es">Español</option>
    </select>
  );
}

export default Localization;
