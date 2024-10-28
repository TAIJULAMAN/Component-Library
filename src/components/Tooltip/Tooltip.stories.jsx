import React from "react";
import Tooltip from "./Tooltip";

export default {
  title: "Components/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    position: {
      control: { type: "select", options: ["top", "right", "bottom", "left"] },
    },
    content: { control: "text" },
    variant: {
      control: {
        type: "select",
        options: [
          "default",
          "gradient",
          "fadeIn",
          "zoom",
          "slide",
          "shadow",
          "outline",
          "rounded",
          "bounce",
          "glow",
        ],
      },
    },
  },
};

const Template = (args) => <Tooltip {...args} />;

export const DefaultTooltip = Template.bind({});
DefaultTooltip.args = {
  content: "This is a default tooltip",
  position: "top",
  variant: "default",
};

export const GradientTooltip = Template.bind({});
GradientTooltip.args = {
  content: "This is a gradient tooltip",
  position: "bottom",
  variant: "gradient",
};

export const FadeInTooltip = Template.bind({});
FadeInTooltip.args = {
  content: "This tooltip fades in",
  position: "top",
  variant: "fadeIn",
};

export const ZoomTooltip = Template.bind({});
ZoomTooltip.args = {
  content: "Zoom effect on hover",
  position: "right",
  variant: "zoom",
};

export const SlideTooltip = Template.bind({});
SlideTooltip.args = {
  content: "Sliding effect on hover",
  position: "left",
  variant: "slide",
};

export const ShadowTooltip = Template.bind({});
ShadowTooltip.args = {
  content: "This tooltip has extra shadow",
  position: "top",
  variant: "shadow",
};

export const OutlineTooltip = Template.bind({});
OutlineTooltip.args = {
  content: "Outlined tooltip",
  position: "bottom",
  variant: "outline",
};

export const RoundedTooltip = Template.bind({});
RoundedTooltip.args = {
  content: "Rounded style tooltip",
  position: "right",
  variant: "rounded",
};

export const BounceTooltip = Template.bind({});
BounceTooltip.args = {
  content: "Bouncing tooltip",
  position: "left",
  variant: "bounce",
};

export const GlowTooltip = Template.bind({});
GlowTooltip.args = {
  content: "Tooltip with glow",
  position: "top",
  variant: "glow",
};
