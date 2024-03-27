import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailPage = () => {
  const { productId } = useParams();

  return (
    <div className="product-detail-page">
      <h1>Product Detail</h1>
      <p>Product ID: {productId}</p>
      {/* Fetch and display product details */}
    </div>
  );
};

export default ProductDetailPage;
