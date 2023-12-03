import Home from "../Pages/Home";
import Header from "../components/Header";
import CountriesProvider from "../Context";
import  { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Country from "../Pages/Country";

function App() {
  return (
    <CountriesProvider>
      <BrowserRouter>
        <Layout>
          <Header />
          <Routes>
            <Route path="/countries-app" element={<Home />} />
            <Route path="/country/:id" element={<Country />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </CountriesProvider>
  );
}

export default App;
