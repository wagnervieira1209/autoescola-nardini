import React from "react";
//import PropTypes from "prop-types";

import { FaCar, FaKey, FaMapMarkedAlt, FaAccessibleIcon } from "react-icons/fa";

import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import Button from "components/atoms/Button";

import BgCarImage from "assets/street.jpg";
import AboutVideo from "assets/AboutVideo.mp4";

import PlaceHolderImage from "stories/assets/car.jpg";

import Grid from "components/atoms/Grid";
import Feature from "components/atoms/Feature";
import Accordion, { AccordionGroup } from "components/atoms/Accordion";
import Section from "components/molecules/Section";
import ProductGrid from "components/organisms/ProductGrid";
import Footer from "components/organisms/Footer";

const products = [
    {
        id: 1,
        title: "1a Habilitação",
        image: PlaceHolderImage,
        summary: "Lorem ipsum dolor sit amet",
    },
    {
        id: 2,
        title: "Moto e carro",
        image: PlaceHolderImage,
        summary: "Lorem ipsum dolor sit amet",
    },
    {
        id: 3,
        title: "Testes práticos",
        image: PlaceHolderImage,
        summary: "Lorem ipsum dolor sit amet",
    },
    {
        id: 4,
        title: "Aulas virtuais",
        image: PlaceHolderImage,
        summary: "Lorem ipsum dolor sit amet",
    },
    {
        id: 5,
        title: "Aulas presenciais",
        image: PlaceHolderImage,
        summary: "Lorem ipsum dolor sit amet",
    },
];

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
        <Section inverse>
            <Heading>
                <h2>Conheça nossos serviços</h2>
                <ProductGrid products={products} />
            </Heading>
        </Section>
        <Section>
            <Grid md={2}>
                <div>
                    <Heading>
                        <h2>Nardini auto escola</h2>
                    </Heading>
                    <p>
                        Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                        Lorem ipsum dolor sit amet
                    </p>
                    <div>
                        <Button color="primary">Saiba mais</Button>
                    </div>
                </div>
                <div>
                    <video src={AboutVideo} width="100%" autoPlay loop />;
                </div>
            </Grid>
        </Section>
        <Section inverse>
            <Heading>
                <h2>Dúvidas recorrentes</h2>
            </Heading>
            <AccordionGroup>
                <Accordion title="Como eu renovo minha CNH?">
                    Lorem impsum dolor sit amet claret opsolum Lorem impsum
                    dolor sit amet claret opsolum Lorem impsum dolor sit amet
                    claret opsolum Lorem impsum dolor sit amet claret opsolum
                    Lorem impsum dolor sit amet claret opsolum Lorem impsum
                    dolor sit amet claret opsolum Lorem impsum dolor sit amet
                    claret opsolum{" "}
                </Accordion>
                <Accordion title="Como faço para renovar minha CNH?">
                    Lorem impsum dolor sit amet claret opsolum Lorem impsum
                    dolor sit amet claret opsolum Lorem impsum dolor sit amet
                    claret opsolum Lorem impsum dolor sit amet claret opsolum
                    Lorem impsum dolor sit amet claret opsolum Lorem impsum
                    dolor sit amet claret opsolum Lorem impsum dolor sit amet
                    claret opsolum{" "}
                </Accordion>
                <Accordion title="Fui multado, e agora?">
                    Lorem impsum dolor sit amet claret opsolum Lorem impsum
                    dolor sit amet claret opsolum Lorem impsum dolor sit amet
                    claret opsolum Lorem impsum dolor sit amet claret opsolum
                    Lorem impsum dolor sit amet claret opsolum Lorem impsum
                    dolor sit amet claret opsolum Lorem impsum dolor sit amet
                    claret opsolum{" "}
                </Accordion>
            </AccordionGroup>
        </Section>
        <Footer />
    </>
);

//Home.defaultProps = {};

//Home.propTypes = {};

export default Home;
