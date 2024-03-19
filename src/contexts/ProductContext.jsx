/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import axios from "axios";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsResponse = await axios.get(
          "https://dummyjson.com/products"
        );
        const categoriesResponse = await axios.get(
          "https://dummyjson.com/products/categories"
        );

        setProducts(productsResponse.data.products);
        setCategories(categoriesResponse.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        categories,
        loading,
        selectedCategory,
        setSelectedCategory,
        searchTerm,
        setSearchTerm,
      }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
