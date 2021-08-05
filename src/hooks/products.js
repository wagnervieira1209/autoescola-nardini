import PlaceHolderImage from "stories/assets/car.jpg";

const products = [
    {
        id: 1,
        title: "1a Habilitação",
        slang: "primeira-habilitacao",
        image: PlaceHolderImage,
        summary: "Lorem ipsum dolor sit amet",
    },
    {
        id: 2,
        title: "Moto e carro",
        slang: "moto-e-carro",
        image: PlaceHolderImage,
        summary: "Lorem ipsum dolor sit amet",
    },
    {
        id: 3,
        title: "Testes práticos",
        slang: "testes-praticos",
        image: PlaceHolderImage,
        summary: "Lorem ipsum dolor sit amet",
    },
    {
        id: 4,
        title: "Aulas virtuais",
        slang: "aulas-virtuais",
        image: PlaceHolderImage,
        summary: "Lorem ipsum dolor sit amet",
    },
    {
        id: 5,
        title: "Aulas presenciais",
        slang: "aulas-presenciais",
        image: PlaceHolderImage,
        summary: "Lorem ipsum dolor sit amet",
    },
];

export const useProducts = () => {
    return products;
};

export const useProduct = ({ slang }) => {
    return products.find((p) => p.slang === slang);
};
