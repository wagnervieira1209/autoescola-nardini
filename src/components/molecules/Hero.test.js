import React from "react";
import { render } from "test-utils";

import Hero from "./Hero";

test("renders Hero with children", () => {
    const { getByText } = render(
        <Hero>
            <p>Bruno Nardini</p>
        </Hero>
    );

    expect(getByText("Bruno Nardini")).toBeInTheDocument();
});

test("renders image background", () => {
    const image = "http://test/image.jpg";

    const { getByTestId } = render(<Hero image={image} />);

    expect(getByTestId("hero")).toHaveStyleRule({
        backgroundImage: image,
    });
});

/*
test("renders Hero with children", () => {
    const { debug, getByText } = render(
        <Hero>
            <p>Wagner Vieira</p>
        </Hero>
    );

    debug();

    expect(getByText("Wagner Vieira")).toBeInTheDocument();
});

test("renders Hero with children", () => {
    const component = render(
        <Hero>
            <p>Wagner Vieira</p>
        </Hero>
    );

    component.debug();

    expect(component.getByText("Wagner Vieira")).toBeTruthy();    
});*/
