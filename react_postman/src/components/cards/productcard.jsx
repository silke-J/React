import { useState } from "react";
import styles from "./cards.module.css";
import ProductForm from "../forms/ProductFrom";
const ProductCard = ({ product, onDelete, onRefetch }) => {
 const [isEditing, setIsEditing] = useState(false);

 const handleEditClick = () => {
   setIsEditing(!isEditing);
 };
  return (
    <div key={product._id} className={styles.card}>
      <h1> {product.title} </h1>
      <p> {product.category} </p>
      {product.image && <img alt={product.title} src={product.image} />}
      <h3> {product.description}</h3>
      <h2> {product.price} kr. </h2>

      <div className={styles.cardButton}>
        <button
          onClick={() => {
            onDelete(product._id);
            // onRefetch();
          }}
        >
          Slet produkt
        </button>

        <button onClick={handleEditClick}>Redigér produkt</button>
      </div>
      {isEditing && (
        <ProductForm
          onProductCreated={onRefetch}
          isEditMode={true}
          id={product._id}
        />
      )}
    </div>
  );
};

export default ProductCard;
