import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

//#region Card Body

const StyledBody = styled.div`
    padding: 16px;

    h6 {
        margin-top: 0;
    }
`;

export const CardBody = ({ children }) => <StyledBody>{children}</StyledBody>;

CardBody.defaultProps = {
    children: undefined,
};

CardBody.propTypes = {
    children: PropTypes.node,
};

//#endregion

//#region Card Media

const StyledMedia = styled.div`
    display: flex;
    background-image: url(${(props) => props.image});
    background-position: center center;
    background-size: cover;
    height: 270px;
`;

export const CardMedia = ({ image, children }) => (
    <StyledMedia image={image}>{children}</StyledMedia>
);

CardMedia.defaultProps = {
    image: undefined,
    children: undefined,
};

CardMedia.propTypes = {
    image: PropTypes.string,
    children: PropTypes.node,
};

//#endregion

//#region Card Media Description

const StyledMediaDescription = styled.div`
    background-color: rgba(0, 0, 0, 0.4);
    padding: 8px 16px;
    color: #fff;
    align-self: flex-end;
    flex: 1;

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin: 0;
    }
`;

export const CardMediaDescription = ({ children }) => (
    <StyledMediaDescription>
        <h5>{children}</h5>
    </StyledMediaDescription>
);

CardMediaDescription.defaultProps = {
    children: undefined,
};

CardMediaDescription.propTypes = {
    children: PropTypes.node,
};

//#endregion

//#region Card
const StyledCard = styled.div`
    background-color: #fff;
    border-radius: 4px;
    border: solid 1px ${(props) => props.theme.colors.border};
    overflow: hidden;
`;

const Card = ({ children }) => <StyledCard>{children}</StyledCard>;

Card.defaultProps = {
    children: undefined,
};

Card.propTypes = {
    children: PropTypes.node,
};

export default Card;

//#endregion
