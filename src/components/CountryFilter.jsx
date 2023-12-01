import { useContext } from "react";
import { CountriesContext } from "../Context";

export default function CountryFilter() {
  const { regionFilter, setRegionFilter } = useContext(CountriesContext); 

  const handleFilterRegion = ({ target }) => {
    setRegionFilter(target.value)
  }

  return (
    <div
      className="mt-4 md:mt-0 text-very-dark-blue-text-light font-semibold"
    >
      <select
        value={regionFilter} 
        onChange={(e) => handleFilterRegion(e)}
        name="Filter by Region"
        className="p-2 dark:bg-dark-blue-elements-dark dark:text-white-color dark:shadow-md dark:shadow-slate-800 bg-white w-44  h-12 flex  shadow-md shadow-gray-100 rounded-md"
      >
        <option disabled>Filter by region</option>
        <option value="none">Todas las regiones</option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceani">Oceani</option>
      </select>
    </div>
  );
}
