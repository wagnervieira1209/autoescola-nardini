import React, { useState } from "react";
import PropTypes from "prop-types";

import Grid from "components/atoms/Grid";
import Card, { CardBody, CardMedia } from "components/atoms/Card";
import Heading from "components/atoms/Heading";
import Button from "components/atoms/Button";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ProductType from "models/types/ProductType";

const ToolBar = styled.div`
    margin-top: 40px;
    text-align: center;
`;

const ProductList = ({ products }) => {
    const [showAll, setShowAll] = useState(false);
    const filteresProducts = showAll ? products : products.slice(0, 3);

    return (
        <>
            <Grid md={3}>
                {filteresProducts.map((product) => (
                    <div key={product.id}>
                        <Card>
                            <CardMedia image={product.image} />
                            <CardBody>
                                <Heading>
                                    <h6>{product.title}</h6>
                                </Heading>
                                <p>{product.summary}</p>
                                <div>
                                    <Button
                                        color="primary"
                                        variant="link"
                                        as={Link}
                                        to={`/servicos/${product.slang}`}
                                    >
                                        Saiba mais
                                    </Button>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                ))}
            </Grid>
            {!showAll && (
                <ToolBar>
                    <Button
                        variant="outlined"
                        onClick={() => {
                            setShowAll(true);
                        }}
                    >
                        Lista completa de servi??os
                    </Button>
                </ToolBar>
            )}
        </>
    );
};

ProductList.defaultProps = {
    products: [],
};

ProductList.propTypes = {
    products: PropTypes.arrayOf(ProductType),
};

export default ProductList;
