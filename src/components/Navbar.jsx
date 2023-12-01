import CountryFilter from "./CountryFilter";
import CountrySearch from "./CountrySearch";

export default function NavBar() {
  return (
    <nav className="w-11/12 m-auto  flex flex-col md:flex-row justify-between py-8 mt-4">
      <CountrySearch />
      <CountryFilter />
    </nav>
  );
}
