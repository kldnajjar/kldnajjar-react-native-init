import React, { useCallback } from "react";
// import { useFonts } from "expo-font";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  Platform,
} from "react-native";
// import * as SplashScreen from "expo-splash-screen";

import Button from "../components/Button";
import routes from "../navigation/routes";
import colors from "../config/colors";
import Screen from "../components/Screen";

// await SplashScreen.preventAutoHideAsync();

function WelcomeScreen({ navigation }) {
  // let { fontsLoaded } = useFonts({
  //   GE_Light_ttf: require("../assets/fonts/GE_SS_Unique_Light.ttf"),
  //   GE_Light_otf: require("../assets/fonts/GE_SS_Unique_Light.otf"),
  // });

  // const onLayoutRootView = useCallback(async () => {
  //   alert(fontsLoaded);
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  // if (!fontsLoaded) return null;
  return (
    // <Screen onLayout={onLayoutRootView}>
    <ImageBackground
      blurRadius={6}
      style={styles.background}
      source={require("../assets/background.png")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/icon-sm.png")} />
        <Text style={styles.tagline}>الجنيدي إلنا كلنا</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          title="الدخول"
          onPress={() => navigation.navigate(routes.LOGIN)}
        />
        <Button
          title="التسجيل"
          color="secondary"
          onPress={() => navigation.navigate(routes.REGISTER)}
        />
      </View>
    </ImageBackground>
    // </Screen>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 166,
    height: 155,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagline: {
    fontFamily: "Tajawal_Black",
    color: colors.light,
    fontSize: 35,
    fontWeight: "600",
    paddingVertical: 20,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});

export default WelcomeScreen;
