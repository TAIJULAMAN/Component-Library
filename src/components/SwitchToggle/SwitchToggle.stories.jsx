import React from "react";
import SwitchToggle from "./SwitchToggle";

export default {
  title: "Components/SwitchToggle",
  component: SwitchToggle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "default",
        "animated",
        "gradient",
        "hover",
        "shadow",
        "glow",
        "outline",
        "filled",
        "pulsate",
        "scale",
      ],
    },
    onChange: { action: "toggled" },
  },
};

const Template = (args) => <SwitchToggle {...args} />;

export const Default = Template.bind({});
Default.args = {
  checked: false,
  variant: "default",
};

export const Animated = Template.bind({});
Animated.args = {
  checked: false,
  variant: "animated",
};

export const Gradient = Template.bind({});
Gradient.args = {
  checked: false,
  variant: "gradient",
};

export const Hover = Template.bind({});
Hover.args = {
  checked: false,
  variant: "hover",
};

export const Shadow = Template.bind({});
Shadow.args = {
  checked: false,
  variant: "shadow",
};

export const Glow = Template.bind({});
Glow.args = {
  checked: false,
  variant: "glow",
};

export const Outline = Template.bind({});
Outline.args = {
  checked: false,
  variant: "outline",
};

export const Filled = Template.bind({});
Filled.args = {
  checked: false,
  variant: "filled",
};

export const Pulsate = Template.bind({});
Pulsate.args = {
  checked: false,
  variant: "pulsate",
};

export const Scale = Template.bind({});
Scale.args = {
  checked: false,
  variant: "scale",
};
