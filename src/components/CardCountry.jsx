export default function CardCountry({ country }) {
  return (
    <article
      key={country.name}
      className="lg:w-full w-64 h-80 dark:shadow-md dark:shadow-slate-800 bg-white  dark:bg-dark-blue-elements-dark flex flex-col rounded-lg shadow-gray-200 shadow-md"
    >
      <img
        src={country.flags.png}
        className="w-full h-40 object-cover rounded-t-lg"
        alt={`photo of ${country.name}`}
      />
      <div className="py-6 px-4">
        <p className="text-xl font-bold mb-2 dark:text-white-color">
          {country.name}
        </p>
        <p className="flex flex-col text-sm">
          <span className="dark:text-gray-400">
            <strong className="font-semibold dark:text-white-color">
              Population:{" "}
            </strong>
            {country.population}
          </span>
          <span className="dark:text-gray-400">
            <strong className="font-semibold dark:text-white-color">
              Region:{" "}
            </strong>
            {country.region}
          </span>
          <span className="dark:text-gray-400">
            <strong className="font-semibold dark:text-white-color">
              Capital:{" "}
            </strong>
            {country.capital}
          </span>
        </p>
      </div>
    </article>
  );
}
