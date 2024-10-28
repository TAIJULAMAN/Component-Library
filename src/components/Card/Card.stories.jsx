import React from "react";
import Card from "./Card";

export default {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],

  argTypes: {
    title: { control: "text" },
    content: { control: "text" },
    imageUrl: { control: "text" },
    variant: { control: "select", options: ["default", "gradient", "hoverEffect", "animated", "shadow", "glow", "outline", "rounded", "flat", "glass"] },
  },
};

const Template = (args) => <Card {...args} />;

export const DefaultCard = Template.bind({});
DefaultCard.args = {
  title: "Default Card",
  content: "This is a simple card with default styling.",
  variant: "default",
  imageUrl: 'https://via.placeholder.com/150',
};

export const GradientCard = Template.bind({});
GradientCard.args = {
  title: "Gradient Card",
  content: "This card has a gradient background.",
  variant: "gradient",
  imageUrl: "https://via.placeholder.com/150",
};

export const HoverEffectCard = Template.bind({});
HoverEffectCard.args = {
  title: "Hover Effect Card",
  content: "This card expands slightly when hovered.",
  variant: "hoverEffect",
  imageUrl: "https://via.placeholder.com/150",
};

export const AnimatedCard = Template.bind({});
AnimatedCard.args = {
  title: "Animated Card",
  content: "This card rotates slightly when hovered.",
  variant: "animated",
  imageUrl: "https://via.placeholder.com/150",
};

export const ShadowCard = Template.bind({});
ShadowCard.args = {
  title: "Shadow Card",
  content: "This card has an extra shadow effect.",
  variant: "shadow",
  imageUrl: "https://via.placeholder.com/150",
};

export const GlowCard = Template.bind({});
GlowCard.args = {
  title: "Glow Card",
  content: "This card glows with a blue shadow.",
  variant: "glow",
  imageUrl: "https://via.placeholder.com/150",
};

export const OutlineCard = Template.bind({});
OutlineCard.args = {
  title: "Outline Card",
  content: "This card has a blue outline border.",
  variant: "outline",
  imageUrl: "https://via.placeholder.com/150",
};

export const RoundedCard = Template.bind({});
RoundedCard.args = {
  title: "Rounded Card",
  content: "This card has more rounded corners.",
  variant: "rounded",
  imageUrl: "https://via.placeholder.com/150",
};

export const FlatCard = Template.bind({});
FlatCard.args = {
  title: "Flat Card",
  content: "This card has no shadow or border.",
  variant: "flat",
  imageUrl: "https://via.placeholder.com/150",
};

export const GlassCard = Template.bind({});
GlassCard.args = {
  title: "Glass Card",
  content: "This card has a glassy, semi-transparent effect.",
  variant: "glass",
  imageUrl: "https://via.placeholder.com/150",
};
