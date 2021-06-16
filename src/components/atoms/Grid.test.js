import React from "react";

import { render } from "test-utils";

import Grid from "./Grid";

// Como é visual testamos com snapshot
test("match snapshot with no params", () => {
    const { asFragment } = render(<Grid></Grid>);

    expect(asFragment()).toMatchSnapshot();
});

test("match snapshot with params", () => {
    const { asFragment } = render(<Grid sm={2} md={3} lg={4} xl={5}></Grid>);

    expect(asFragment()).toMatchSnapshot();
});

test("match snapshot with lg and xl", () => {
    const { asFragment } = render(<Grid lg={8} xl={10}></Grid>);

    expect(asFragment()).toMatchSnapshot();
});
