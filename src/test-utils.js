import React from "react";
import { render } from "@testing-library/react";
import ThemeProvider from "styles/ThemeProvider";

const TestProvider = ({ children }) => (
    <ThemeProvider>{children}</ThemeProvider>
);

// * (exporta tudo)
export * from "@testing-library/react";

// Sobreescrevendo método render do testing library
const customRender = (ui, options) =>
    render(ui, { wrapper: TestProvider, ...options });

export { customRender as render };
