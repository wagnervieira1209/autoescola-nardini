import React from "react";

import { render, screen } from "test-utils";

import About from "./About";

beforeEach(() => {
    jest.resetAllMocks();
});

test("renders about page", () => {
    render(<About />);
    expect(screen.getByText("Auto escola Nardini")).toBeInTheDocument();
});

test("scroll top in the first render", () => {
    render(<About />);
    expect(window.scrollTo).toBeCalledTimes(1);
});
