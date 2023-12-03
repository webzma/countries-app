import { Link } from "react-router-dom"
import { CountryInfo } from "../../components/CountryInfo"
import { FaArrowLeft } from "react-icons/fa";

export default function Country() {
  return (
    <div className="pb-10 w-10/12 pt-14 m-auto">
      <Link to="/countries-app">
        <button className="focus:border-2 focus:border-black mb-14 gap-2 flex justify-center items-center dark:text-white text-lg font-medium w-28 h-9 rounded-md dark:shadow-md dark:shadow-slate-900 dark:bg-dark-blue-elements-dark shadow-gray-200 shadow-lg bg-white">
          <FaArrowLeft  />
          Back
        </button>
      </Link>

      <CountryInfo key={crypto.randomUUID()} />
    </div>
  );
}
