import React from "react";
import Avatar from "./Avatar";

export default {
  title: "Components/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    src: { control: "text" },
    alt: { control: "text" },
    variant: {
      control: "select",
      options: [
        "default",
        "bordered",
        "gradient",
        "shadowed",
        "hoverZoom",
        "animatedRotate",
        "glowing",
        "outline",
        "roundedSquare",
        "glass",
      ],
    },
  },
};

const Template = (args) => <Avatar {...args} />;

export const DefaultAvatar = Template.bind({});
DefaultAvatar.args = {
  alt: "Default Avatar",
  variant: "default",
};

export const BorderedAvatar = Template.bind({});
BorderedAvatar.args = {
  alt: "Bordered Avatar",
  variant: "bordered",
};

export const GradientAvatar = Template.bind({});
GradientAvatar.args = {
  alt: "Gradient Avatar",
  variant: "gradient",
};

export const ShadowedAvatar = Template.bind({});
ShadowedAvatar.args = {
  alt: "Shadowed Avatar",
  variant: "shadowed",
};

export const HoverZoomAvatar = Template.bind({});
HoverZoomAvatar.args = {
  alt: "Hover Zoom Avatar",
  variant: "hoverZoom",
};

export const AnimatedRotateAvatar = Template.bind({});
AnimatedRotateAvatar.args = {
  alt: "Animated Rotate Avatar",
  variant: "animatedRotate",
};

export const GlowingAvatar = Template.bind({});
GlowingAvatar.args = {
  alt: "Glowing Avatar",
  variant: "glowing",
};

export const OutlineAvatar = Template.bind({});
OutlineAvatar.args = {
  alt: "Outline Avatar",
  variant: "outline",
};

export const RoundedSquareAvatar = Template.bind({});
RoundedSquareAvatar.args = {
  alt: "Rounded Square Avatar",
  variant: "roundedSquare",
};

export const GlassAvatar = Template.bind({});
GlassAvatar.args = {
  alt: "Glass Avatar",
  variant: "glass",
};
