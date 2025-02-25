import React, { useCallback, useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Font from "expo-font"; // ✅ Import expo-font

// Ensure you import the correct type
import { RootStackParamList } from "./index"; // Adjust this path if needed
import Homeindex from "./homeindex";

type NavigationProp = StackNavigationProp<RootStackParamList, "ElcxScreen">;

const ElcxScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const [fontsLoaded, setFontsLoaded] = useState(false);

  // ✅ Load Montserrat font
  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        "Montserrat-Bold": require("../../assets/fonts/Montserrat-Bold.ttf"),
        "Montserrat-Regular": require("../../assets/fonts/Montserrat-Regular.ttf"),
      });
      setFontsLoaded(true);
    }
    loadFonts();
  }, []);

  const handlePress = useCallback(() => {
    navigation.navigate("ElcXPassLogin");
  }, [navigation]);

  if (!fontsLoaded) {
    return null; // ✅ Prevents rendering before fonts are loaded
  }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: "black" }]}>
      <StatusBar translucent backgroundColor="black" barStyle="light-content" />
      <View style={styles.container}>
        <Image source={require("../../assets/images/logo.png")} style={styles.image} />
        <Text style={styles.title}>Elc X Pass</Text>
        <Text style={styles.subtitle}>Exclusive Access</Text>

        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Ionicons name="arrow-forward" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: "contain",
    marginBottom: 20,
  },
  title: {
    fontFamily: "Montserrat-Bold", // ✅ Corrected font name
    fontSize: 40,
    width: 300,
    color: "white",
    textAlign: "center",
  },
  subtitle: {
    fontFamily: "Montserrat-Regular", // ✅ Corrected font name
    fontSize: 15,
    color: "white",
    marginTop: 10,
    marginBottom: 40,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#333",
    width: 60,
    height: 55,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 40,
  },
});

export default ElcxScreen;
