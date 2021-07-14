import React from "react";

import { render, screen, fireEvent } from "test-utils";

import Accordion from "./Accordion";

const text = "My children text";
const title = "My Title";

test("renders with title", () => {
    render(<Accordion title={title}></Accordion>);
    expect(screen.getByText(title)).toBeInTheDocument();
});

test("renders without children", () => {
    render(<Accordion>{text}</Accordion>);
    expect(screen.queryByText(text)).not.toBeInTheDocument();
});

test("triggers onChange when it is clicked", async () => {
    const handleChange = jest.fn();

    render(<Accordion title={title} onChange={handleChange}></Accordion>);

    await fireEvent.click(screen.getByText(title));

    expect(handleChange).toBeCalledTimes(1);
});

describe("When is controlled", () => {
    describe("When starts opened", () => {
        test("render with children", () => {
            render(<Accordion open>{text}</Accordion>);
            expect(screen.queryByText(text)).toBeInTheDocument();
        });

        test("triggers onChange when it is clicked", async () => {
            const handleChange = jest.fn();

            render(
                <Accordion title={title} onChange={handleChange}></Accordion>
            );

            await fireEvent.click(screen.getByText(title));

            expect(handleChange).toBeCalledTimes(1);
        });

        test("hide children when open changes to false", () => {
            const { rerender } = render(<Accordion open>{text}</Accordion>);

            rerender(<Accordion open={false}>{text}</Accordion>);

            expect(screen.queryByText(text)).not.toBeInTheDocument();
        });

        test("call default function when it is clicked", async () => {
            render(<Accordion title={title}></Accordion>);

            await fireEvent.click(screen.getByText(title));
        });
    });

    describe("When starts closed", () => {
        test("render without children", () => {
            render(<Accordion open={false}>{text}</Accordion>);
            expect(screen.queryByText(text)).not.toBeInTheDocument();
        });
    });
});
