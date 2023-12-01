import Header from "../components/Header";
import NavBar from "../components/Navbar";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import CountriesProvider from "../Context";

function App() {
  return (
    <CountriesProvider>
      <Layout>
        <Header />
        <NavBar />
        <Home />
      </Layout>
    </CountriesProvider>
  );
}

export default App;
