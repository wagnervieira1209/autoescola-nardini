import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { BreakAt, BreakpointSizes } from "../styles/Breakpoints";

const colorYellow = "#FFC107";

const Root = styled.div`
    color: #fff;
    padding: 100px 0;

    ${(props) => css`
        background: url(${props.image}), rgba(0, 0, 0, 0.4);
        background-size: cover;
        background-position: center;
        background-blend-mode: overlay;
    `}
`;

const Content = styled.div`
    p,
    li {
        font-size: 20px;
        font-weight: 300;
    }

    ul {
        list-style: none;
        padding-left: 0;
    }

    li::before {
        content: "\\2713\\0020";
        color: ${colorYellow};
    }
`;

const Container = styled.div`
    width: 100%;
    padding: 0 8px;

    ${BreakAt(BreakpointSizes.sm)} {
        padding: 0 16px;
    }

    ${BreakAt(BreakpointSizes.lg)} {
        width: 1140px;
        padding: 0;
        margin: 0 auto;
    }
`;

const Hero = ({ image, title, children }) => (
    <Root image={image} data-testid="hero">
        <Container>
            <Content>{children}</Content>
        </Container>
    </Root>
);

Hero.propTypes = {
    /**
     * Background image
     **/
    //image: PropTypes.string.isRequired,
    image: PropTypes.string,
    //children: PropTypes.node,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

Hero.defaultProps = {
    title: "Meu título",
};

export default Hero;
