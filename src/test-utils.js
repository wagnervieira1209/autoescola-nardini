import React from "react";
import { render } from "@testing-library/react";
import ThemeProvider from "styles/ThemeProvider";
import { MemoryRouter as Router } from "react-router-dom";

const TestProvider = ({ children }) => (
    <Router>
        <ThemeProvider>{children}</ThemeProvider>
    </Router>
);

// * (exporta tudo)
export * from "@testing-library/react";

// Sobreescrevendo método render do testing library
const customRender = (ui, options) =>
    render(ui, { wrapper: TestProvider, ...options });

export { customRender as render };
