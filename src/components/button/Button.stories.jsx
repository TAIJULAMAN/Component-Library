import React from "react";
import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "primary",
        "secondary",
        "success",
        "warning",
        "danger",
        "glow",
        "outline",
        "bounce",
        "shadow",
        "rotate",
        "gradientBlue",
        "gradientGreen",
        "gradientPink",
        "hoverGlow",
        "hoverScale",
      ],
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Primary Button",
  variant: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary Button",
  variant: "secondary",
};

export const Success = Template.bind({});
Success.args = {
  label: "Success Button",
  variant: "success",
};

export const Warning = Template.bind({});
Warning.args = {
  label: "Warning Button",
  variant: "warning",
};

export const Danger = Template.bind({});
Danger.args = {
  label: "Danger Button",
  variant: "danger",
};

export const Glow = Template.bind({});
Glow.args = {
  label: "Glow Button",
  variant: "glow",
};

export const Outline = Template.bind({});
Outline.args = {
  label: "Outline Button",
  variant: "outline",
};

export const Bounce = Template.bind({});
Bounce.args = {
  label: "Bounce Button",
  variant: "bounce",
};

export const Shadow = Template.bind({});
Shadow.args = {
  label: "Shadow Button",
  variant: "shadow",
};

export const Rotate = Template.bind({});
Rotate.args = {
  label: "Rotate Button",
  variant: "rotate",
};

export const GradientBlue = Template.bind({});
GradientBlue.args = {
  label: "Gradient Blue Button",
  variant: "gradientBlue",
};

export const GradientGreen = Template.bind({});
GradientGreen.args = {
  label: "Gradient Green Button",
  variant: "gradientGreen",
};

export const GradientPink = Template.bind({});
GradientPink.args = {
  label: "Gradient Pink Button",
  variant: "gradientPink",
};

export const HoverGlow = Template.bind({});
HoverGlow.args = {
  label: "Hover Glow Button",
  variant: "hoverGlow",
};

export const HoverScale = Template.bind({});
HoverScale.args = {
  label: "Hover Scale Button",
  variant: "hoverScale",
};
