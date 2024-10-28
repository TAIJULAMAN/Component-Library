import React from "react";
import Checkbox from "./Checkbox";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
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
        "outline",
        "rounded",
        "shadow",
        "glow",
      ],
    },
    onChange: { action: "changed" },
    onClick: { action: "clicked" },
  },
};

const Template = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  checked: false,
  onChange: (newChecked) => console.log("Checkbox checked:", newChecked),
  onClick: () => console.log("Checkbox clicked!"),
  variant: "default",
};

export const Animated = Template.bind({});
Animated.args = {
  checked: false,
  onChange: (newChecked) => console.log("Checkbox checked:", newChecked),
  onClick: () => console.log("Checkbox clicked!"),
  variant: "animated",
};

export const Gradient = Template.bind({});
Gradient.args = {
  checked: false,
  onChange: (newChecked) => console.log("Checkbox checked:", newChecked),
  onClick: () => console.log("Checkbox clicked!"),
  variant: "gradient",
};

export const Outline = Template.bind({});
Outline.args = {
  checked: false,
  onChange: (newChecked) => console.log("Checkbox checked:", newChecked),
  onClick: () => console.log("Checkbox clicked!"),
  variant: "outline",
};

export const Rounded = Template.bind({});
Rounded.args = {
  checked: false,
  onChange: (newChecked) => console.log("Checkbox checked:", newChecked),
  onClick: () => console.log("Checkbox clicked!"),
  variant: "rounded",
};

export const Shadow = Template.bind({});
Shadow.args = {
  checked: false,
  onChange: (newChecked) => console.log("Checkbox checked:", newChecked),
  onClick: () => console.log("Checkbox clicked!"),
  variant: "shadow",
};

export const Glow = Template.bind({});
Glow.args = {
  checked: false,
  onChange: (newChecked) => console.log("Checkbox checked:", newChecked),
  onClick: () => console.log("Checkbox clicked!"),
  variant: "glow",
};
