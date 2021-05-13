import { BreakAt, BreakpointSizes } from "./Breakpoints";

test.each([
    [BreakpointSizes.sm],
    [BreakpointSizes.md],
    [BreakpointSizes.lg],
    [BreakpointSizes.xl],
])("break at %i", (size) => {
    expect(BreakAt(size)).toEqual(`@media (min-width: ${size}px)`);
});

/*test("break at small device", () => {
    expect(BreakAt(BreakpointSizes.sm)).toEqual("@media (min-width: 576px)");
});*/
