export const sharedFocus = {
  WebkitTapHighlightColor: "transparent",
  "&:focus:not(&:focus-visible)": {
    boxShadow: "none",
  },
  "&:focus": {
    outline: "none",
    boxShadow: "0 0 0 2px $colors$background, 0 0 0 4px $colors$primary",
  },
  "@safari": {
    WebkitTapHighlightColor: "transparent",
    outline: "none",
  },
};

export const cssFocusVisible = {
  variants: {
    isFocusVisible: {
      true: {
        outline: "transparent solid 2px",
        outlineOffset: "2px",
        boxShadow: "0 0 0 2px $colors$background, 0 0 0 4px $colors$primary",
      },
      false: {
        outline: "none",
      },
    },
  },
};

export const cssNoBlurriness = {
  /* Avoid blurriness */
  transform: "translateZ(0)",
  backfaceVisibility: "hidden",
};