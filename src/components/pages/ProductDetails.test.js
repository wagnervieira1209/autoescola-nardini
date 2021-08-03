import React from "react";

import { render, screen } from "test-utils";

import ProductDetails from "./ProductDetails";

test("render product details page", () => {
    render(<ProductDetails />);
    expect(screen.getByText("Nomes Do Serviço")).toBeInTheDocument();
});
