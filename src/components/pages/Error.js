import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Grid from "components/atoms/Grid";
import Heading from "components/atoms/Heading";
import styled from "styled-components";
import Section from "components/molecules/Section";
import ButtonWrapper from "components/atoms/Button";

const ImageContainer = styled.div`
    text-align: right;

    svg {
        width: 100%;
        height: auto;
        max-width: 380px;
        color: ${(props) => props.theme.colors.primary.main};
    }
`;

const ErrorContainer = styled.div`
    h1 {
        margin-top: 0;
    }
`;

const ErrorMessage = styled.p`
    margin: 24px 0;
    font-size: 1.2rem;
`;

const Error = ({ title, description, image }) => (
    <Section>
        <Grid sm={2}>
            <ErrorContainer>
                <Heading>
                    <h1>{title}</h1>
                </Heading>
                <ErrorMessage>{description}</ErrorMessage>
                <div>
                    <ButtonWrapper as={Link} to="/" color="primary">
                        Voltar página
                    </ButtonWrapper>
                </div>
            </ErrorContainer>
            <div>
                <ImageContainer>{image}</ImageContainer>
            </div>
        </Grid>
    </Section>
);

Error.defaultProps = {
    title: "",
    description: "",
    image: undefined,
};

Error.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.node,
};

export default Error;
