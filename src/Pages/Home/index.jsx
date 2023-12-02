import { CountriesList } from "../../components/CountriesList";
import Layout from "../../components/Layout";
import NavBar from "../../components/Navbar";

export default function Home() {
  return (
    <Layout>
      <NavBar />
      <CountriesList />
    </Layout>
  );
}
