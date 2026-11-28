import React, { useState, useMemo } from 'react';

const PRODUCTS = Array.from({ length: 1000 }, (_, i) => ({
  id: i,
  name: `Produit ${i + 1}`,
  price: Math.floor(Math.random() * 100) + 1,
}));

const findMostExpensiveProduct = (products) => {
  console.log("Calcul du produit le plus cher...");
  if (products.length === 0) return null;
  return products.reduce((max, p) => (p.price > max.price ? p : max), products[0]);
};

export default function ProductDashboard() {
  const [showDetails, setShowDetails] = useState(true);

  const mostExpensiveProduct = useMemo(() => findMostExpensiveProduct(PRODUCTS), []);

  return (
    <div>
      <button onClick={() => setShowDetails(s => !s)}>
        {showDetails ? 'Cacher' : 'Afficher'} les détails
      </button>
      {showDetails && (
        <p>
          Produit le plus cher : {mostExpensiveProduct.name} ({mostExpensiveProduct.price}€)
        </p>
      )}
    </div>
  );
}