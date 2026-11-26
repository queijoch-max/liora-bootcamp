import useProductDetail from "./hooks/useProductDetail";

function ProductDetailPage() {
    const { product, loading, error } = useProductDetail(1);

    if (loading) return <p>chargement du produit...</p>;
    if (error) return <p>Erreur : {error.message}</p>;
    if (!product) return null;

    return (
        <div>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
        </div>
    );
}

export default ProductDetailPage;