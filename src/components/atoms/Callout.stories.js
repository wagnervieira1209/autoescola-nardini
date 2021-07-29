import React from "react";
import Button from "components/atoms/Button";
import Callout, { CalloutActions, CalloutBody, CalloutMedia } from "./Callout";

import SpeedImage from "draws/Speed";

export default {
    title: "Components/Atoms/Callout",
    component: Callout,
    subcomponents: {
        CalloutBody,
        CalloutActions,
        CalloutMedia,
    },
};

export const usage = () => (
    <Callout>
        <CalloutBody>
            <h6>Faça sua matrícula agora mesmo</h6>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                maxime consectetur quam minima nisi, dolores illo, eos
                laudantium omnis placeat excepturi perspiciatis cupiditate ab
                praesentium vel corrupti accusantium atque. Consequuntur.
            </p>
            <CalloutActions>
                <Button color="primary">matricular</Button>
            </CalloutActions>
        </CalloutBody>
        <CalloutMedia>
            <SpeedImage />
        </CalloutMedia>
    </Callout>
);
