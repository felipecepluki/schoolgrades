import React, { useState, useEffect } from "react";
import { StatusBar, Image, Text } from "react-native";

import { useFonts, BebasNeue_400Regular } from "@expo-google-fonts/bebas-neue";
import { Ionicons } from "@expo/vector-icons";
import AppLoading from "expo-app-loading";

import { Container, ContainerTitle, ContainerButton, Button } from "./styles";

export default function Welcome({ navigation }) {
  const [fontsLoaded] = useFonts({
    BebasNeue_400Regular,
  });

  const fontSize = 60;
  const paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <ContainerTitle>
        <Text
          style={{
            fontSize,
            paddingVertical,
            color: "#8393EE",
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: "BebasNeue_400Regular",
          }}
        >
          Welcome to the School Grades
        </Text>
        <Ionicons name="school" size={65} color="#8393EE" />
      </ContainerTitle>
      <ContainerButton>
        <Button onPress={() => navigation.navigate("Home")}>
          <Text
            style={{
              paddingVertical,
              fontSize: 30,
              color: "#FFFFFF",
              fontFamily: "BebasNeue_400Regular",
            }}
          >
            Get Start
          </Text>
        </Button>
      </ContainerButton>
    </Container>
  );
}
