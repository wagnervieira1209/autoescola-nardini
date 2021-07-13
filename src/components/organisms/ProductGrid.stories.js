import React from 'react';

import ProductGrid from './ProductGrid';
import PlaceHolderImage from "stories/assets/car.jpg";

export default {
    title: "Components/Organisms/ProductGrid",
    component: ProductGrid
}

export const usage = () => (
    <ProductGrid
    products={[
        { Id: 3, image: PlaceHolderImage, title: "Título 1", summary: "Lorem ipsum dolor sit amet", },
        { Id: 2, image: PlaceHolderImage, title: "Título 2", summary: "Lorem ipsum dolor sit amet", },
        { Id: 3, image: PlaceHolderImage, title: "Título 3", summary: "Lorem ipsum dolor sit amet", },
        { Id: 4, image: PlaceHolderImage, title: "Título 4", summary: "Lorem ipsum dolor sit amet", },
        { Id: 5, image: PlaceHolderImage, title: "Título 5", summary: "Lorem ipsum dolor sit amet", },
        { Id: 6, image: PlaceHolderImage, title: "Título 6", summary: "Lorem ipsum dolor sit amet", }
    ]}>

    </ProductGrid>
)

