import { useState } from "react";
import { useFetchproduct } from "../../hooks/UseFetchproduct";
import styles from "./cards.module.css";
import ProductForm from "../forms/ProductFrom";
import Productcard from "./productcard";

const Cards = () => {
  const { products, refetch, error, isLoading, deleteProduct } = useFetchproduct();
  const [showForm, setShowForm] = useState(false);
  console.log(products);

  const handleAddProduct = () => {
    setShowForm(!showForm);
  };

const handleDeleteProduct = async (productId) => {
  const result = await deleteProduct(productId);
  console.log(result)
};
  if (isLoading) return <p>Indlæser produkter...</p>;
  if (error) return <p>Fejl: {error}</p>;

  return (
    <article className={styles.cards}>
      <h4>Produkter</h4>
      <button onClick={() => handleAddProduct()}>tilføj product</button>
      {showForm && <ProductForm onProductCreated={refetch} />}
      {products.map((product) => (
        <Productcard
          product={product}
          key={product._id}
          onDelete={() => handleDeleteProduct}
          onRefetch={refetch}
        />
      ))}
    </article>
  );
};
export default Cards;
