module.exports = {
  theme: {
    extend: {
      colors: {
        smoke: "rgba(0, 0, 0, 0.5)",
        "smoke-light": "rgba(0, 0, 0, 0.25)",
        "smoke-dark": "rgba(0, 0, 0, 0.75)",
        theme: {
          primary: "#F55D3E",
          "primary-light-10": "#F66C51",
          "primary-light-75": "#FCD6CF",
          "primary-dark-10": "#F34320",
          secondary: "#06AED5",
          "secondary-light-10": "#06C7F2",
          "secondary-light-75": "#B8F1FD",
          "secondary-dark-10": "#059EC0",
          tertiary: "#F0C808",
          "tertiary-light-10": "#F8D31C",
          "tertiary-light-75": "#FDF3C0",
          "tertiary-dark-10": "#DAB707",
        },
      },
    },
    boxShadow: {
      default: "0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0,0,0,.12)",
      focus: "0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14),0px 5px 22px 4px rgba(0,0,0,.12)",
    },
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"],
  },
  plugins: [],
}
