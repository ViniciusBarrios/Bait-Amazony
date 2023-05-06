const baseColors = {
  white: "#ffffff",
  black: "#000000",
};

const aliases = {
  overlay: "rgba(0, 0, 0, 0.6)",

  "form-bg": "#D4F5FC",

  "textField-color": "#71C7D8",

  "textField-border-default": "#71C7D8",
  "textField-border-active": "#71C7D8",

  "textField-label-default": "#71C7D8",
  "textField-label-active": "#71C7D8",

  "textField-helperText": "#71C7D8",

  "textField-error": "#f75a68",
};

export const colors = { ...baseColors, ...aliases };
