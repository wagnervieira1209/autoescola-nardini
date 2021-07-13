import Section from "components/molecules/Section";
import React from "react";

import PlaceHolderImage from "stories/assets/car.jpg";
import Card, { CardBody, CardMedia } from "./Card";
import Heading from "components/atoms/Heading";
import Button from "components/atoms/Button";

export default {
    title: "Components/Atoms/Card",
    component: Card,
    subcomponents: { CardBody, CardMedia },
};

export const usage = () => (
    <Section inverse>
        <Card>
            <CardBody>
                <Heading>
                    <h6>Título qualquer</h6>
                </Heading>
                <p>Lorem ipsum dolor sit amet</p>
                <div>
                    <Button color="primary" variant="link">
                        Saiba mais
                    </Button>
                </div>
            </CardBody>
        </Card>
    </Section>
);

export const usageWithMedia = () => (
    <Section inverse>
        <Card>
            <CardMedia image={PlaceHolderImage} />
            <CardBody>
                <Heading>
                    <h6>Título qualquer</h6>
                </Heading>
                <p>Lorem ipsum dolor sit amet</p>
                <div>
                    <Button color="primary" variant="link">
                        Saiba mais
                    </Button>
                </div>
            </CardBody>
        </Card>
    </Section>
);
