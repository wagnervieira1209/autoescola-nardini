import React from "react";
//import PropTypes from "prop-types";

import { FaCar, FaKey, FaMapMarkedAlt, FaAccessibleIcon } from "react-icons/fa";

import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import Button from "components/atoms/Button";
import BgCarImage from "assets/street.jpg";

import Grid from "components/atoms/Grid";
import Feature from "components/atoms/Feature";

import Section from "components/molecules/Section";

const Home = () => (
    <>
        <Hero image={BgCarImage}>
            <Heading>
                <h1>
                    Ganhe sua <strong>liberdade</strong>
                    <br />
                    para ir e vir
                </h1>
            </Heading>
            <ul>
                <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
            </ul>
            <Button color="primary" variant="outlined">
                Matricule-se agora
            </Button>
        </Hero>
        <Section>
            <Grid sm={2} md={4}>
                <Feature icon={<FaCar />} title="Maior e melhor frota">
                    <p>Lorem impsum dolor sit amet</p>
                </Feature>
                <Feature icon={<FaKey />} title="Habilitação mais rápida">
                    <p>Lorem impsum dolor sit amet</p>
                </Feature>
                <Feature
                    icon={<FaMapMarkedAlt />}
                    title="Excelente localização"
                >
                    <p>Lorem impsum dolor sit amet</p>
                </Feature>
                <Feature icon={<FaAccessibleIcon />} title="Acessibilidade">
                    <p>Lorem impsum dolor sit amet</p>
                </Feature>
            </Grid>
        </Section>
    </>
);

//Home.defaultProps = {};

//Home.propTypes = {};

export default Home;
