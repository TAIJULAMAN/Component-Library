import React, { useState } from "react";
import Modal from "./Modal";

export default {
  title: "Components/Modal",
  component: Modal,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    modalOpen: { control: "boolean" },
    title: { control: "text" },
    message: { control: "text" },
    variant: {
      control: "select",
      options: ["default", "gradient", "animated", "rounded", "glow"],
    },
  },
};

const Template = (args) => {
  const [modalOpen, setModalOpen] = useState(args.modalOpen);

  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        className="bg-blue-500 text-white p-3 rounded-md"
      >
        Open Modal
      </button>
      <Modal
        {...args}
        modalOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: "Default Modal",
  message: "This is a basic modal with a standard background.",
  variant: "default",
};

export const Gradient = Template.bind({});
Gradient.args = {
  title: "Gradient Modal",
  message: "This modal has a gradient background for a vibrant look.",
  variant: "gradient",
};

export const Animated = Template.bind({});
Animated.args = {
  title: "Animated Modal",
  message: "This modal has an animated scaling effect.",
  variant: "animated",
};

export const Rounded = Template.bind({});
Rounded.args = {
  title: "Rounded Modal",
  message: "This modal has rounded corners for a soft look.",
  variant: "rounded",
};

export const Glow = Template.bind({});
Glow.args = {
  title: "Glow Modal",
  message: "This modal has a soft glow effect around the edges.",
  variant: "glow",
};
