import { useEffect, useState } from "react";

const useFetchproduct = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Get all products
  const fetchProduct = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:3042/products");
      const data = await response.json();
      console.log(data);
      setProducts(data.data);
    } catch (error) {
      setError(error.message);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  // Create product
  const createProduct = async (productData) => {
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:3042/product", {
        method: "POST",
        body: productData,
      });

      if (response.status === "error") {
        throw new Error("Fejl ved oprettelse af ophold");
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  // Refetch
  const refetch = () => {
    fetchProduct();
  };

  // Update product
 const updateProduct = async (productData) => {
  try{
 const response = await fetch(`http://localhost:3042/product/${id}`, {
  method: "PUT",
  body: productData
 });


      if (response.status === "error") {
        console.log("fejl");
      }

 const result =await response.json()
 console.log(result)
  }catch(error){
console.log(error)
  }
 };

  // Delete product
  const deleteProduct = async (id) => {
    try {
      const response = await fetch(`http://localhost:3042/product/${id}`, {
        method: "DELETE",
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  // Get be ID
    const fetchProductById = async (id) => {
       try {
      const response = await fetch(`http://localhost:3042/product/${id}`, {
        method: "GET",
      });

      const data = await response.json();
      console.log(data);
      return data.data
    } catch (error) {
      console.log(error);
    }
  };
    

  

  useEffect(() => {
    fetchProduct();
  }, []);

  return { products, fetchProductById, isLoading, error,updateProduct, refetch, createProduct, deleteProduct, };
};
export { useFetchproduct };
