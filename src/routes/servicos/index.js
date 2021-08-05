import React from "react";
import { useParams } from "react-router-dom";
import ProductDetailsPage from "components/pages/ProductDetails";
import { useScrollToTop } from "hooks/scroll";
import { useProduct } from "hooks/products";

const ProductDetails = () => {
    useScrollToTop();

    // Retorna todos os parâmetros da rota
    const { slang } = useParams();

    const product = useProduct({ slang });
    return <ProductDetailsPage product={product} />;
};

export default ProductDetails;
