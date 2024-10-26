// src/stories/input/Input.stories.jsx
import React from "react";
import Input from "../Input/Input";

export default {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "default",
        "primary",
        "success",
        "warning",
        "danger",
        "standard",
        "gradient",
        "animatedFocus",
      ],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    placeholder: {
      control: "text",
    },
  },
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "Enter text...",
  variant: "default",
  size: "md",
};

export const Primary = Template.bind({});
Primary.args = {
  placeholder: "Primary input",
  variant: "primary",
  size: "md",
};

export const Success = Template.bind({});
Success.args = {
  placeholder: "Success input",
  variant: "success",
  size: "md",
};

export const Warning = Template.bind({});
Warning.args = {
  placeholder: "Warning input",
  variant: "warning",
  size: "md",
};

export const Danger = Template.bind({});
Danger.args = {
  placeholder: "Danger input",
  variant: "danger",
  size: "md",
};
export const Standard = Template.bind({});
Standard.args = {
  placeholder: "Enter text...",
  variant: "standard",
};

export const Gradient = Template.bind({});
Gradient.args = {
  placeholder: "Gradient Border Input...",
  variant: "gradient",
};

export const AnimatedFocus = Template.bind({});
AnimatedFocus.args = {
  placeholder: "Animated Focus Input...",
  variant: "animatedFocus",
};
