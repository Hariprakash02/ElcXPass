import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Font from "expo-font";

const ElcXPassLogin = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const navigation = useNavigation();

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

  if (!fontsLoaded) {
    return null;
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
      keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={styles.scrollView}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.card}>
            <Image source={require("../../assets/images/logo.png")} style={styles.image} />
            <Text style={styles.title}>Elc X Login</Text>
            <Text style={styles.subtitle}>Unlock exclusive access now!</Text>
          </View>

          <View style={styles.form}>
            <TextInput placeholder="Email" style={styles.input} placeholderTextColor="#A0A0A0" />
            <TextInput placeholder="Password" style={styles.input} placeholderTextColor="#A0A0A0" secureTextEntry />
            <TextInput placeholder="Name" style={styles.input} placeholderTextColor="#A0A0A0" />
            <TextInput placeholder="Username" style={styles.input} placeholderTextColor="#A0A0A0" />
            <TextInput placeholder="Password" style={styles.input} placeholderTextColor="#A0A0A0" secureTextEntry />
          </View>

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Homeindex")}> 
            <Text style={styles.buttonText}>Enter</Text>
          </TouchableOpacity>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 50,
  },
  card: {
    height: 270,
    marginBottom: 40,
    backgroundColor: "#1E1E1E",
    borderRadius: 25,
    padding: 25,
    width: "100%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
  image: {
    marginTop: 20,
    width: 200,
    height: 100,
    marginBottom: 25,
  },
  title: {
    fontFamily: "Montserrat-Bold",
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subtitle: {
    fontFamily: "Montserrat-Regular",
    color: "#ffffff",
    fontSize: 14,
    marginBottom: 20,
    textAlign: "center",
  },
  form: {
    width: "80%",
    alignContent: "center",
    marginBottom: 10,
    gap: 15,
  },
  input: {
    width: "100%",
    backgroundColor: "#2A2A2A",
    color: "white",
    fontWeight: "bold",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 25,
    marginBottom: 12,
    fontSize: 16,
    fontFamily: "Montserrat-Regular",
  },
  button: {
    width: "80%",
    backgroundColor: "#444",
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 25,
    marginTop: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    fontFamily: "Montserrat-Bold",
  },
});

export default ElcXPassLogin;
