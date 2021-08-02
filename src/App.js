import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ThemeProvider from "styles/ThemeProvider";
import GlobalStyle from "styles/GlobalStyle";

import Home from "components/pages/Home";
import About from "components/pages/About";
import PoductDetails from "components/pages/ProductDetails";
import ProductDetails from "components/pages/ProductDetails";

function App() {
    return (
        <ThemeProvider>
            <GlobalStyle />
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/sobre" element={<About />} />
                    <Route path="/servicos" element={<ProductDetails />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
