import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Hero from "components/molecules/Hero";
import BgCarImage from "assets/street.jpg";
import Section from "components/molecules/Section";
import Grid from "components/atoms/Grid";
import Heading from "components/atoms/Heading";
import AboutImage from "draws/About";
import Footer from "components/organisms/Footer";

const ImageContainer = styled.div`
    svg {
        width: 100%;
        height: auto;
        max-width: 380px;
        color: ${(props) => props.theme.colors.primary.main};
    }
`;

const About = () => (
    <>
        <Hero image={BgCarImage}>
            <Heading>
                <h1>Auto escola Nardini</h1>
            </Heading>
        </Hero>
        <Section md={2}>
            <Grid md={2}>
                <div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Corporis tempora distinctio ipsam fuga, eveniet quasi
                        nam enim aspernatur harum suscipit temporibus sint
                        cupiditate iste aliquam non. Ipsa explicabo natus nam.
                    </p>
                    <p>
                        Officiis eum perspiciatis alias dolorem officia
                        explicabo molestias dolorum dolores eveniet delectus,
                        repudiandae itaque corporis sequi? Quidem voluptatum
                        iste id labore, magnam deserunt, similique unde
                        accusamus possimus impedit ad? Similique.
                    </p>
                    <p>
                        Sequi itaque quas odit ratione. Officiis consectetur
                        iste eligendi optio odio odit iure nam illum vitae,
                        consequatur, blanditiis veritatis! Placeat non velit
                        suscipit incidunt praesentium iure obcaecati sapiente
                        nobis temporibus!
                    </p>
                    <ul>
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </li>
                    </ul>
                </div>
                <div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Aliquid similique repudiandae tenetur qui placeat
                        commodi minus dolor rem impedit sed sit obcaecati culpa
                        maxime, tempore quia natus itaque dolores. Neque.
                    </p>
                    <ImageContainer>
                        <AboutImage />
                    </ImageContainer>
                </div>
            </Grid>
        </Section>
        <Section inverse>
            <Grid md={2}>
                <div>
                    <h4>Missão</h4>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Nisi deleniti maiores debitis suscipit neque sit
                        error doloribus, sed provident animi quas ratione
                        reiciendis odit doloremque ab ut laborum odio rem?
                    </p>
                </div>
                <div>
                    <h4>Visão</h4>
                    <p>
                        Adipisci quasi sit non sunt dolor esse in animi cum
                        reprehenderit! Veniam autem eaque quia? Nesciunt, nobis.
                        Hic ut, eligendi, quasi placeat harum a beatae
                        reiciendis, tenetur est ex in.
                    </p>
                </div>
            </Grid>
        </Section>
        <Section>
            <Heading>
                <h2>Conheça nossos professores</h2>
            </Heading>
        </Section>
        <Footer />
    </>
);

About.defaultProps = {};

About.propTypes = {};

export default About;
