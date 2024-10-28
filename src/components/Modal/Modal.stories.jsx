// import React, { useState } from "react";
// import Modal from "./Modal";

// export default {
//   title: "Components/Modal",
//   component: Modal,
//   parameters: {
//     layout: "centered",
//   },
//   tags: ["autodocs"],
//   argTypes: {
//     modalOpen: { control: "boolean" },
//     title: { control: "text" },
//     message: { control: "text" },
//   },
// };

// const Template = (args) => {
//   const [open, setOpen] = useState(args.modalOpen);

//   return (
//     <>
//       <button onClick={() => setOpen(true)} className="bg-blue-500 text-white p-3 rounded-md">
//         Open Modal
//       </button>
//       <Modal {...args} modalOpen={open} setModalOpen={setOpen} />
//     </>
//   );
// };

// // Default modal
// export const Default = Template.bind({});
// Default.args = {
//   title: "Your Message Sent Successfully",
//   message:
//     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
// };

// // Modal with custom title and message
// export const CustomContent = Template.bind({});
// CustomContent.args = {
//   title: "Action Required",
//   message: "Please confirm your email to proceed with further actions.",
// };

// // Gradient modal
// export const GradientModal = Template.bind({});
// GradientModal.args = {
//   title: "Gradient Modal",
//   message:
//     "This modal features a gradient background to make it visually appealing.",
//   modalStyles: "bg-gradient-to-r from-pink-500 to-yellow-500",
// };

// // Modal with transition effects
// export const TransitionModal = Template.bind({});
// TransitionModal.args = {
//   title: "Modal with Transition",
//   message:
//     "This modal includes a fade-in effect for smooth entry.",
//   transitionEffect: "ease-in-out duration-300",
// };

// // Animated modal
// export const AnimatedModal = Template.bind({});
// AnimatedModal.args = {
//   title: "Animated Modal",
//   message:
//     "This modal includes subtle animations for a lively appearance.",
//   animationEffect: "transform scale-105 transition duration-500",
// };
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
