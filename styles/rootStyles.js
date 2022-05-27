import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../constants/theme";


export default StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.white2
    },
    heading: {
        ...FONTS.body1
    }
});