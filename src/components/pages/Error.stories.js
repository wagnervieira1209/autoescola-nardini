import React from "react";

import Error from "./Error";
import ImagePageNotFound from "draws/PageNotFound";

export default {
    title: "Components/Pages/Error",
    component: Error,
};

export const usage = () => (
    <Error
        image={<ImagePageNotFound />}
        title="Página não encontrada!"
        description="Ops! Página acessada não foi encontrada"
    />
);
