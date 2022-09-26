// https://fonts.google.com/specimen/Tajawal?subset=arabic
import * as Font from "expo-font";

export default useFont = async () =>
  await Font.loadAsync({
    Tajawal_Black: require("../assets/fonts/Tajawal/Tajawal-Black.ttf"),
    Tajawal_Bold: require("../assets/fonts/Tajawal/Tajawal-Bold.ttf"),
    Tajawal_ExtraBold: require("../assets/fonts/Tajawal/Tajawal-ExtraBold.ttf"),
    Tajawal_ExtraLight: require("../assets/fonts/Tajawal/Tajawal-ExtraLight.ttf"),
    Tajawal_Light: require("../assets/fonts/Tajawal/Tajawal-Light.ttf"),
    Tajawal_Medium: require("../assets/fonts/Tajawal/Tajawal-Medium.ttf"),
    Tajawal_Regular: require("../assets/fonts/Tajawal/Tajawal-Regular.ttf"),
  });
