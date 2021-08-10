import React from "react";

import ProductDetails from "./ProductDetails";
import { buildProduct } from "models/builders/products";

export default {
    title: "Components/Pages/ProductDetails",
    component: ProductDetails,
};

export const usage = () => <ProductDetails product={buildProduct()} />;
