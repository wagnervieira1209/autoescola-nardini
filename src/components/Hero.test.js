import React from "react";
import { render } from "@testing-library/react";

import Hero from "./Hero";

test("renders Hero with children", () => {
    const { getByText } = render(
        <Hero>
            <p>Wagner Vieira</p>
        </Hero>
    );

    expect(getByText("Wagner Vieira")).toBeInTheDocument();
});

test("renders Hero image backgroung", () => {
    const image = "http://testImage.jpg";

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
