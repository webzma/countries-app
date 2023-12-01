import { useContext } from "react";
import CardCountry from "../components/CardCountry";
import { CountriesContext } from "../Context";

export default function Home() {
  const context = useContext(CountriesContext);

  return (
    <div className="pb-10 w-11/12 pt-14 grid xl:grid-cols-4  gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center m-auto">
      {context.filterBy.map((country) => (
        <CardCountry country={country} key={country.name} />
      ))}
    </div>
  );
}
