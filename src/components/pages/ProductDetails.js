import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FaIdCard, FaHome, FaScroll } from "react-icons/fa";

import Hero from "components/molecules/Hero";
import BgCarImage from "assets/street.jpg";
import Section from "components/molecules/Section";
import Heading from "components/atoms/Heading";
import Footer from "components/organisms/Footer";
import Button from "components/atoms/Button";
import Callout, {
    CalloutActions,
    CalloutBody,
    CalloutMedia,
} from "components/atoms/Callout";

import SpeedImage from "draws/Speed";

const PinnedList = styled.ul`
    list-style: none;
    padding-left: 0;
`;

const PinnedItem = styled.li`
    display: inline-block;
    border: 1px solid ${(props) => props.theme.colors.border};
    border-radius: 4px;
    padding: 8px 16px;
    margin: 0px 16px 16px 0;

    svg {
        margin-right: 8px;
        vertical-align: middle;
    }
`;

const ProductDetails = () => (
    <>
        <Hero image={BgCarImage}>
            <Heading>
                <h1>Nome do Serviço</h1>
            </Heading>
        </Hero>
        <Section>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatem dolores nostrum mollitia voluptatibus incidunt magnam
                ullam, quos asperiores perferendis! Asperiores ea tempore, ullam
                quos natus ipsa minima mollitia adipisci totam.
            </p>
            <p>
                Commodi eaque vitae consequatur quaerat ex, praesentium
                voluptates. Ad rerum animi voluptatem. Vel quidem doloremque
                accusantium consequuntur impedit animi similique doloribus
                repudiandae, deserunt aspernatur voluptatum dolorem quos
                quisquam placeat quibusdam.
            </p>
            <p>
                Debitis quia animi placeat voluptas et at, est vel. Laudantium
                corporis quia architecto. Asperiores eum eos reprehenderit vitae
                deserunt ut, totam est sint quaerat saepe quis, voluptas autem
                minima aperiam.
            </p>
            <h5>Documentos necessários:</h5>
            <PinnedList>
                <PinnedItem>
                    <FaIdCard />
                    RG
                </PinnedItem>
                <PinnedItem>
                    <FaIdCard />
                    CPF
                </PinnedItem>
                <PinnedItem>
                    <FaScroll />
                    Certidão de nascimento ou casamento
                </PinnedItem>
                <PinnedItem>
                    <FaHome />
                    Comprovante de residência
                </PinnedItem>
            </PinnedList>
        </Section>
        <Section inverse>
            <Callout>
                <CalloutBody>
                    <h6>Faça sua matrícula agora mesmo</h6>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Porro maxime consectetur quam minima nisi, dolores illo,
                        eos laudantium omnis placeat excepturi perspiciatis
                        cupiditate ab praesentium vel corrupti accusantium
                        atque. Consequuntur.
                    </p>
                    <CalloutActions>
                        <Button color="primary">matricular</Button>
                    </CalloutActions>
                </CalloutBody>
                <CalloutMedia>
                    <SpeedImage />
                </CalloutMedia>
            </Callout>
        </Section>
        <Footer />
    </>
);

ProductDetails.defaultProps = {};

ProductDetails.propTypes = {};

export default ProductDetails;
