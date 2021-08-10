import React from "react";

import { render, screen } from "test-utils";
import { useProduct } from "hooks/products";
import ProductDetailRoute from "./index";
import { buildProduct } from "models/builders/products";

jest.mock("hooks/products");

test("renders with a Product", () => {
    useProduct.mockReturnValue(buildProduct());

    render(<ProductDetailRoute />);

    expect(
        screen.getByText("Rustic Cotton Car", { selector: "h1" })
    ).toBeInTheDocument();
});

test("not found Product", () => {
    useProduct.mockReturnValue(null);

    render(<ProductDetailRoute />);

    expect(
        screen.getByText("Página não encontrada!", { selector: "h1" })
    ).toBeInTheDocument();
});
