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
      options: ["default", "animated", "gradient"],
    },
    onClick: {
      action: "clicked", // Add action logging for clicks
    },
  },
};

const Template = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  checked: false,
  onChange: (newChecked) => console.log("Checkbox checked:", newChecked),
  onClick: () => console.log("Checkbox clicked!"), // Example click function
  variant: "default",
};

export const Animated = Template.bind({});
Animated.args = {
  checked: false,
  onChange: (newChecked) => console.log("Checkbox checked:", newChecked),
  onClick: () => console.log("Checkbox clicked!"), // Example click function
  variant: "animated",
};

export const Gradient = Template.bind({});
Gradient.args = {
  checked: false,
  onChange: (newChecked) => console.log("Checkbox checked:", newChecked),
  onClick: () => console.log("Checkbox clicked!"), // Example click function
  variant: "gradient",
};
