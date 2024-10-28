import React from "react";
import RadioButton from "./RadioButton";

export default {
  title: "Components/RadioButton",
  component: RadioButton,
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
        "hover",
        "gradient",
        "outline",
        "glow",
        "shadow",
        "filled",
        "pulsate",
        "scale",
      ],
    },
    onClick: {
      action: "selected",
    },
  },
};

const Template = (args) => <RadioButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  selected: false,
  onChange: () => console.log("Default Radio Button selected"),
  variant: "default",
};

export const Animated = Template.bind({});
Animated.args = {
  selected: false,
  onChange: () => console.log("Animated Radio Button selected"),
  variant: "animated",
};

export const Hover = Template.bind({});
Hover.args = {
  selected: false,
  onChange: () => console.log("Hover Radio Button selected"),
  variant: "hover",
};

export const Gradient = Template.bind({});
Gradient.args = {
  selected: false,
  onChange: () => console.log("Gradient Radio Button selected"),
  variant: "gradient",
};

export const Outline = Template.bind({});
Outline.args = {
  selected: false,
  onChange: () => console.log("Outline Radio Button selected"),
  variant: "outline",
};

export const Glow = Template.bind({});
Glow.args = {
  selected: false,
  onChange: () => console.log("Glow Radio Button selected"),
  variant: "glow",
};

export const Shadow = Template.bind({});
Shadow.args = {
  selected: false,
  onChange: () => console.log("Shadow Radio Button selected"),
  variant: "shadow",
};

export const Filled = Template.bind({});
Filled.args = {
  selected: false,
  onChange: () => console.log("Filled Radio Button selected"),
  variant: "filled",
};

export const Pulsate = Template.bind({});
Pulsate.args = {
  selected: false,
  onChange: () => console.log("Pulsate Radio Button selected"),
  variant: "pulsate",
};

export const Scale = Template.bind({});
Scale.args = {
  selected: false,
  onChange: () => console.log("Scale Radio Button selected"),
  variant: "scale",
};
