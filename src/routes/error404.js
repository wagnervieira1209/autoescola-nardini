import React from "react";
import Error from "components/pages/Error";
import ImagePageNotFound from "draws/PageNotFound";

const error404 = () => (
    <Error
        image={<ImagePageNotFound />}
        title="Página não encontrada!"
        description="Ops! Página acessada não foi encontrada"
    />
);

export default error404;
