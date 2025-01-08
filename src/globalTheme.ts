import { ButtonProps, GlobalThemeOverrides } from "naive-ui";

export const isDevOrStaging = (): boolean => {
  return isDev() || isStaging();
};

export const isDev = (): boolean => {
  return (
    window.location.hostname.includes("127.0.0.1") ||
    window.location.hostname.includes("localhost") ||
    window.location.hostname.includes("aws.dev")
  );
};

export const isStaging = (): boolean => {
  return window.location.hostname.includes("staging");
};
export const gigaclearDarkOrange = "#850000";
export const gigaclearOrange = "#000000";
export const black = "#000000";
export const white = "#ffffff";
export const grey = "#3f3c3c";
export const lightGrey = "#A9A9A9";
export const paleGrey = "#e2e1e0";
export const transparent = "rgba(255,255,255,0)";
export const transparentBlack = "rgba(0, 0, 0, 0.15)";
export const transparentWhite = "rgba(255, 255, 255, 0.15)";
export const whiteBorder = "1px solid #ffffff";
export const greyBorder = "1px solid #3f3c3c";
export const lightGreyBorder = "1px solid #A9A9A9";
export const builtGreen = "#4D9E2AFF";
export const notBuiltRed = "#A23C3CFF";
export const tealGreen = "#2a947d";
export const eggshell = "#fff7ef";
export const darkBlue = "#1c2331";
export const highlightLightMode = "#f6deb9";
export const highlightDarkMode = "#3f3c3c";

export const themeOverridesLight: GlobalThemeOverrides = {
  common: {
    tableColor: black,
    tableColorStriped: paleGrey,
    tableHeaderColor: paleGrey,
    modalColor: paleGrey,
    textColor3: black,
  },
  Tabs: {
    tabTextColorHoverBar: isDevOrStaging()
      ? gigaclearDarkOrange
      : gigaclearOrange,
    tabTextColorActiveBar: isDevOrStaging()
      ? gigaclearDarkOrange
      : gigaclearOrange,
  },
  Layout: {
    headerColor: isDevOrStaging() ? gigaclearDarkOrange : gigaclearOrange,
  },
  // Prevent selection and hover actions from changing element colour.
  Menu: {
    itemIconColor: white,
    itemTextColorHorizontal: white,
    itemTextColorActiveHorizontal: paleGrey,
    itemIconColorActiveHorizontal: paleGrey,
    itemIconColorHoverHorizontal: paleGrey,
    itemIconColorActiveHoverHorizontal: paleGrey,
    itemTextColorHoverHorizontal: paleGrey,
    itemTextColorActiveHoverHorizontal: paleGrey,
  },
  InternalSelectMenu: {
    optionColorPending: paleGrey, // Required for select dropdown light mode
  },
  DataTable: {
    borderColor: transparentBlack,
  },
  Card: {
    colorEmbedded: paleGrey,
  },
};

export const themeOverridesDark: GlobalThemeOverrides = {
  common: {
    textColor3: white,
  },
  Tabs: {
    tabTextColorHoverBar: tealGreen,
    tabTextColorActiveBar: tealGreen,
  },
  Layout: {
    headerColor: isDevOrStaging() ? grey : black,
    // Only requires a border in prod dark mode, with black header on black background.
    headerBorderColor: isDevOrStaging() ? transparent : white,
  },
  Menu: {
    itemTextColorActiveHorizontal: white,
    itemIconColorActiveHorizontal: white,
    itemIconColorHoverHorizontal: white,
    itemIconColorActiveHoverHorizontal: white,
    itemTextColorHoverHorizontal: white,
    itemTextColorActiveHoverHorizontal: white,
  },
  DataTable: {
    borderColor: transparentWhite,
  },
};

export type ButtonThemeOverrides = NonNullable<ButtonProps["themeOverrides"]>;

export const menuButtonThemeOverridesLight: ButtonThemeOverrides = {
  border: whiteBorder,
  borderHover: paleGrey,
  textColorHover: paleGrey,
  textColorFocus: white,
  borderFocus: whiteBorder,
  textColor: white,
};
export const menuButtonThemeOverridesDark: ButtonThemeOverrides = {
  border: whiteBorder,
  borderHover: whiteBorder,
  textColorHover: white,
  textColorFocus: white,
  borderFocus: whiteBorder,
};
