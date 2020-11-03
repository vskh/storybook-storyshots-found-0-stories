import React from "react";
import { Story } from "@storybook/react";
import { Demo } from "../Demo";

export default {
    title: "Demo story",
    component: Demo
}

export const Default: Story = args => (
    <Demo who={args.who} />
);
Default.args = {
    who: null
};