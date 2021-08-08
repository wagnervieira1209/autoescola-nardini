import React from "react";
import { buildProductList } from "models/builders/products";
import Home from "./Home";

export default {
    title: "Components/Pages/Home",
    component: Home,
};

const products = buildProductList(8);

export const usage = () => <Home products={products} />;
