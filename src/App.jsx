import { useState } from "react";
import { ProductProvider } from "./contexts/ProductContext";
import Header from "./components/Header/Header.jsx";
import Banner from "./components/Banner/Banner.jsx";
import ProductList from "./components/ProductList/ProductList.jsx";
import CategorySearch from "./components/CategorySearch/CategorySearch.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./App.css";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <ProductProvider>
      <Header onSearch={handleSearch} />
      <Banner />
      <CategorySearch />
      <ProductList searchTerm={searchTerm} />
      <Footer />
    </ProductProvider>
  );
};

export default App;
