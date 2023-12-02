import { useContext } from "react"
import { CountriesContext } from "../Context"
import CardCountry  from "./CardCountry"

export function CountriesList() {
  const { filterBy } = useContext(CountriesContext) 

  return (
    <div className="pb-10 w-11/12 pt-14 grid xl:grid-cols-4  gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center m-auto">
      {filterBy.map((country) => (
        <CardCountry country={country} key={country.name} />
      ))}
    </div>
  )
}