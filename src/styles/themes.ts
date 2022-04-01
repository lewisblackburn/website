import { createTheme } from "~/styles";

export type ThemeName = keyof typeof themes;

export const lightTheme = {
  rgb: {
    brand: "76 86 106",
    accent: "208 135 112",
    playground: "255 255 255", // prism codeblock background
    codeblock: "13 15 24", // prism codeblock background
    fg1: "$rgb$text-800",
    fg2: "$rgb$text-700",
    fg3: "$rgb$text-600",
    bg: "250 250 250", // #fafafa
    glass: "$brand",

    // #a3be8c

    search: "255 255 255",
    searchText: "$fg1",
    groupName: "255 255 255",
    kbd: "240 240 240",
    activeBox: "249 250 251",
    animator: "255 255 255",

    // Colors
    black: "40 40 40", // #282828
    gray: "107 114 128", // #6b7280
    lighterGray: "245 245 245", // #f5f5f5
    alphaGray: "112 112 112", // #707070
    brown: "214 93 14", // #d65d0e
    orange: "254 128 25", // #fe8019
    yellow: "181 118 20", // #b57614
    green: "121 116 14", // #79740e
    blue: "7 102 120", // #076678
    purple: "177 98 134", // #b16286
    pink: "211 134 155", // #d3869b
    red: "157 0 6", // #9d0006
  },
};

export const darkTheme = {
  rgb: {
    brand: "255 255 255", // #ffffff
    accent: "200 200 200", // #c6c6c6
    playground: "29 32 33",
    fg1: "$rgb$text-100",
    fg2: "$rgb$text-300",
    fg3: "$rgb$text-500",
    bg: "19 20 21",
    glass: "255 255 255", // #ffffff

    search: "20 20 20",
    searchText: "$fg1",
    groupName: "20 20 20",
    kbd: "30 30 30",
    activeBox: "30 30 30",
    animator: "10 10 10",

    // Colors
    black: "40 40 40", // #282828
    gray: "107 114 128", // #6b7280
    lighterGray: "34 34 34", // #222
    alphaGray: "112 112 112", // #707070
    brown: "214 93 14", // #d65d0e
    orange: "254 128 25", // #fe8019
    yellow: "250 189 47", // #fabd2f
    green: "184 187 38", // #b8bb26
    blue: "131 165 152", // #83a598
    purple: "177 98 134", // #b16286
    pink: "211 134 155", // #d3869b
    red: "251 73 52", // #fb4934
  },
};

const themes = {
  light: createTheme(lightTheme),
  dark: createTheme(darkTheme),
};

export const availableTheme = <ThemeName[]>Object.keys(themes);
export const allThemeClass = Object.values(themes).map((t) => t.className);

export default themes;
