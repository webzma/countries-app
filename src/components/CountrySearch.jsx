import { useContext } from "react";
import { CountriesContext } from "../Context";
import { FaSearch } from "react-icons/fa";

export default function CountrySearch() {
  const context = useContext(CountriesContext);

  function handleSearch(e) {
    context.setSearchCountry(e.target.value);
  }

  return (
    <div className="bg-white md:w-96 dark:bg-dark-blue-elements-dark dark:text-white-color dark:shadow-md dark:shadow-slate-800 w-full px-6 h-12 py-4 flex items-center shadow-md shadow-gray-100 rounded-md">
      <span className="flex  justify-center items-center"></span>
      <FaSearch className="fill-dark-gray" />
      <div>
        <input
          onChange={handleSearch}
          value={context.searchCountry}
          type="text"
          placeholder="Search for a country"
          className="dark:bg-dark-blue-elements-dark border-none outline-none  ml-4  flex flex-1 w-full p-2 placeholder:font-semibold placeholder:dark-gray font-semibold"
        />
      </div>
    </div>
  );
}
