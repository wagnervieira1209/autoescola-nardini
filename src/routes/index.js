import React from "react";

import { Route, Routes } from "react-router-dom";

import Home from "routes/home";
import About from "routes/about";
import ProductDetails from "routes/servicos";

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/servicos/:slang" element={<ProductDetails />} />
    </Routes>
);

export default AppRoutes;
