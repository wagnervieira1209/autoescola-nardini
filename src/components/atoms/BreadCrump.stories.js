import React from "react";

import BreadCrump from "./BreadCrump";

export default {
    title: "Components/Atoms/BreadCrump",
    component: BreadCrump,
};

const Items = [{ label: "Início", link: "/" }, { label: "Sobre" }];

export const usage = () => <BreadCrump items={Items} />;
