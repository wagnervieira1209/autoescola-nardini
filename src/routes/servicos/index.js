import React from "react";
import { useParams } from "react-router-dom";
import ProductDetailsPage from "components/pages/ProductDetails";
import { useScrollToTop } from "hooks/scroll";
import { useProduct } from "hooks/products";
import Error from "components/pages/Error";
import ImagePageNotFound from "draws/PageNotFound";

const ProductDetails = () => {
    useScrollToTop();

    // Retorna todos os parâmetros da rota
    const { slang } = useParams();
    const product = useProduct({ slang });

    if (!product) {
        return (
            <Error
                image={<ImagePageNotFound />}
                title="Página não encontrada!"
                description="Ops! Página acessada não foi encontrada"
            />
        );
    }

    return <ProductDetailsPage product={product} />;
};

export default ProductDetails;
