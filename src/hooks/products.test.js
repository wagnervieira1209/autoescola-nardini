import { useProduct, useProducts } from "./products";

describe("useProduct()", () => {
    test("returns a product", () => {
        const slang = "primeira-habilitacao";

        const product = useProduct({ slang });

        expect(product.title).toEqual("1a Habilitação");
    });

    test("returns undefined if a product was not found", () => {
        const slang = "invalid-slang";

        const product = useProduct({ slang });

        expect(product).toBeUndefined();
    });
});

describe("useProducts()", () => {
    test("returns a product list", () => {
        const products = useProducts();

        expect(products.length).toBeGreaterThan(1);
    });
});
