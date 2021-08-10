import React from "react";
import { render, screen } from "test-utils";
import ProductDetails from "./ProductDetails";
import { buildProduct } from "models/builders/products";

test("render product details page", () => {
    render(<ProductDetails product={buildProduct()} />);
    expect(
        screen.getByText("Rustic Cotton Car", { selector: "h1" })
    ).toBeInTheDocument();
});
