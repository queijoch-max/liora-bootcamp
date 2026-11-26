import { useFetch } from "./useFetch";

function useProductDetail(productId) {
  const { data, loading, error } = useFetch(
    `https://fakestoreapi.com/products/${productId}`
  );

  return { product: data, loading, error };
}

export default useProductDetail;