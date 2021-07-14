import React from "react";

import Accordion from "./Accordion";
import AccordionGroup from "./AccordionGroup";

export default {
    title: "Components/Atoms/Accordion",
    component: Accordion,
};

export const usage = () => (
    <>
        <Accordion title="Como eu renovo minha CNH?">
            Lorem impsum dolor sit amet claret opsolum Lorem impsum dolor sit
            amet claret opsolum Lorem impsum dolor sit amet claret opsolum Lorem
            impsum dolor sit amet claret opsolum Lorem impsum dolor sit amet
            claret opsolum Lorem impsum dolor sit amet claret opsolum Lorem
            impsum dolor sit amet claret opsolum{" "}
        </Accordion>
        <Accordion title="Como faço para renovar minha CNH?">
            Lorem impsum dolor sit amet claret opsolum Lorem impsum dolor sit
            amet claret opsolum Lorem impsum dolor sit amet claret opsolum Lorem
            impsum dolor sit amet claret opsolum Lorem impsum dolor sit amet
            claret opsolum Lorem impsum dolor sit amet claret opsolum Lorem
            impsum dolor sit amet claret opsolum{" "}
        </Accordion>
        <Accordion title="Fui multado, e agora?">
            Lorem impsum dolor sit amet claret opsolum Lorem impsum dolor sit
            amet claret opsolum Lorem impsum dolor sit amet claret opsolum Lorem
            impsum dolor sit amet claret opsolum Lorem impsum dolor sit amet
            claret opsolum Lorem impsum dolor sit amet claret opsolum Lorem
            impsum dolor sit amet claret opsolum{" "}
        </Accordion>
    </>
);

export const WithGroup = () => (
    <AccordionGroup>
        <Accordion title="Como eu renovo minha CNH?">
            Lorem impsum dolor sit amet claret opsolum Lorem impsum dolor sit
            amet claret opsolum Lorem impsum dolor sit amet claret opsolum Lorem
            impsum dolor sit amet claret opsolum Lorem impsum dolor sit amet
            claret opsolum Lorem impsum dolor sit amet claret opsolum Lorem
            impsum dolor sit amet claret opsolum{" "}
        </Accordion>
        <Accordion title="Como faço para renovar minha CNH?">
            Lorem impsum dolor sit amet claret opsolum Lorem impsum dolor sit
            amet claret opsolum Lorem impsum dolor sit amet claret opsolum Lorem
            impsum dolor sit amet claret opsolum Lorem impsum dolor sit amet
            claret opsolum Lorem impsum dolor sit amet claret opsolum Lorem
            impsum dolor sit amet claret opsolum{" "}
        </Accordion>
        <Accordion title="Fui multado, e agora?">
            Lorem impsum dolor sit amet claret opsolum Lorem impsum dolor sit
            amet claret opsolum Lorem impsum dolor sit amet claret opsolum Lorem
            impsum dolor sit amet claret opsolum Lorem impsum dolor sit amet
            claret opsolum Lorem impsum dolor sit amet claret opsolum Lorem
            impsum dolor sit amet claret opsolum{" "}
        </Accordion>
    </AccordionGroup>
);
