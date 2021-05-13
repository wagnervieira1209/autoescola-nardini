import React from "react";

import Hero from "./Hero";
import bgStreetImage from "../stories/assets/street.jpg";
import Heading from "./Heading";

export default {
    title: "Components/Hero",
    component: Hero,
};

export const usage = () => (
    <Hero image={bgStreetImage}>
        <Heading>
            <h1>Ganhe sua liberdade para ir e vir</h1>
        </Heading>
        <p>A auto escola líder em aprovação.</p>
    </Hero>
);

export const withList = () => (
    <Hero image={bgStreetImage}>
        <Heading>
            <h1>
                Ganhe sua <strong>liberdade</strong>
                <br />
                para ir e vir
            </h1>
        </Heading>
        <ul>
            <li>loren impsum dolor sit amet</li>
            <li>loren impsum dolor sit amet</li>
            <li>loren impsum dolor sit amet</li>
        </ul>
        <button>Matricule-se agora já</button>
    </Hero>
);
