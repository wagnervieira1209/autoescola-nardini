import React from "react";
import About from "./about";
import { render } from "test-utils";

test("scroll top in the first render", () => {
    render(<About />);
    expect(window.scrollTo).toBeCalledTimes(1);
});
