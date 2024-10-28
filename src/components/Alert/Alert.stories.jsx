import React from "react";
import Alert from "./Alert";

export default {
  title: "Components/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "default",
        "success",
        "warning",
        "danger",
        "gradient",
        "animated",
        "outline",
        "glow",
        "filled",
        "pulsate",
      ],
    },
    onClose: { action: "closed" },
  },
};

const Template = (args) => <Alert {...args} />;

export const Default = Template.bind({});
Default.args = { message: "This is a default alert", variant: "default" };

export const Success = Template.bind({});
Success.args = { message: "This is a success alert", variant: "success" };

export const Warning = Template.bind({});
Warning.args = { message: "This is a warning alert", variant: "warning" };

export const Danger = Template.bind({});
Danger.args = { message: "This is a danger alert", variant: "danger" };

export const Gradient = Template.bind({});
Gradient.args = { message: "This is a gradient alert", variant: "gradient" };

export const Animated = Template.bind({});
Animated.args = { message: "This is an animated alert", variant: "animated" };

export const Outline = Template.bind({});
Outline.args = { message: "This is an outline alert", variant: "outline" };

export const Glow = Template.bind({});
Glow.args = { message: "This is a glow alert", variant: "glow" };

export const Filled = Template.bind({});
Filled.args = { message: "This is a filled alert", variant: "filled" };

export const Pulsate = Template.bind({});
Pulsate.args = { message: "This is a pulsating alert", variant: "pulsate" };
