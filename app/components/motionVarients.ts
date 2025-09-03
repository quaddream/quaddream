import { easeOut } from "framer-motion";

// motionVariants.ts
export const containerStagger = {
  show: {
    transition: {
      staggerChildren: 0.15,
      ease: easeOut,
    },
  },
};
export const moveUp = (delay: number = 0) => ({
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: delay,
      duration: 0.6,
      ease: easeOut,
    },
  },
});

export const moveDown = (delay: number = 0) => ({
  hidden: { opacity: 0, y: -50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: delay,
      duration: 0.6,
      ease: easeOut,
    },
  },
});

export const moveLeft = (delay: number = 0) => ({
  hidden: { opacity: 0, x: 50 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      delay: delay,
      duration: 0.6,
      ease: easeOut,
    },
  },
});

export const moveRight = (delay: number = 0) => ({
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      delay: delay,
      duration: 0.6,
      ease: easeOut,
    },
  },
});


export const fadeIn = (delay: number = 0) => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: delay,
      duration: 0.6,
      ease: easeOut,
    },
  },
});

export const paragraphItem = {
  hidden: { opacity: 0, y: 50 }, // Start with opacity 0 and slide up from 50px below
  show: {
    opacity: 1,
    y: 0, // Slide to its normal position
    transition: {
      duration: 0.6,
      ease: easeOut,
      staggerChildren: 0.1,
    },
  },
};

export const opacityMove = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: easeOut } },
};

export const listUpMove = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Controls the stagger effect (delay for each item)
      duration: 0.6,
      ease: easeOut,
    },
  },
};

export const letterContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05, // a little more time between letters
      ease: easeOut,
    },
  },
};

export const letterItem = {
  hidden: { y: "100%", opacity: 0 },
  show: {
    y: "0%",
    opacity: 1,
    transition: {
      ease: easeOut,
      duration: 0.5,
    },
  },
};

export const letterItemTop = {
  hidden: {
    y: -40, // Start from top
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easeOut, // cubic-bezier for a soft easeOut
    },
  },
};
