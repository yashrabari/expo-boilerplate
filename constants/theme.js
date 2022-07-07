import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
import Constants from 'expo-constants'

export const COLORS = {
    lightBrown: "#ac7663",
    darkBrown: "#a04c31",
    ultraLightBrown: "#FBF8F7",
    white: "#fff",
    white2: '#FBFDFF',
    black: "#121113",
    blue: "#647993",
    gray: "#b0a7a9",
    darkGray: "#48444a",
    lightGray: '#ebe3e3',
    primary: "#AC7663",
    transparent: 'transparent',
};
export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,
    statusbar: Constants.statusBarHeight,
    // font sizes
    largeTitle: 40,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    h5: 12,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,
    body5: 12,
    lineHeight: 24,
    // app dimensions
    width,
    height
};
export const FONTS = {
    largeTitle: { fontFamily: "Poppins-ExtraBold", fontSize: SIZES.largeTitle },
    h1: { fontFamily: "Poppins-Black", fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: "Poppins-Bold", fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: "Poppins-Bold", fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: "Poppins-Bold", fontSize: SIZES.h4, lineHeight: 22 },
    body1: { fontFamily: "Poppins-Regular", fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: "Poppins-Regular", fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: "Poppins-Regular", fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: "Poppins-Regular", fontSize: SIZES.body4, lineHeight: 22 },
    body5: { fontFamily: "Poppins-Regular", fontSize: SIZES.body5, lineHeight: 22 },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;