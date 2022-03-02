import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import { useFonts, BebasNeue_400Regular } from "@expo-google-fonts/bebas-neue";
import { Picker } from "@react-native-picker/picker";
import AppLoading from "expo-app-loading";

import {
  Container,
  ContainerButton,
  ContainerPicker,
  ContainerTitle,
  ContainerInput,
  Button,
  Input,
} from "./styles";

export default function Home() {
  const [yearDivision, setYearDivision] = useState(0);
  const [valueOne, setValueOne] = useState(0);
  const [valueTwo, setValueTwo] = useState(0);

  const pickerRef = useRef();

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }

  function Result() {
    const average = parseFloat(valueOne) * parseFloat(yearDivision);
    const remaining = average - parseFloat(valueTwo);
    const remainingperiods = yearDivision - 1;
    const results = remaining / remainingperiods;
    const finalresults = results.toFixed(2);
    alert(`Missing ${finalresults} points in each period for you to pass!`);
  }

  const [fontsLoaded] = useFonts({
    BebasNeue_400Regular,
  });

  const paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <Container>
        <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
        <ContainerTitle>
          <Text
            style={{
              paddingVertical,
              fontSize: 60,
              color: "#2E43B8",
              fontFamily: "BebasNeue_400Regular",
            }}
          >
            Welcome Screen
          </Text>
        </ContainerTitle>
        <ContainerPicker>
          <Text
            style={{
              paddingVertical,
              fontSize: 30,
              color: "#2E43B8",
              fontFamily: "BebasNeue_400Regular",
              textAlign: "center",
            }}
          >
            Your year is divided into quarters or bimonths ?
          </Text>
          <Picker
            ref={pickerRef}
            selectedValue={yearDivision}
            onValueChange={(itemValue, itemIndex) => setYearDivision(itemValue)}
          >
            <Picker.Item key={0} label="Quarter" value={3} color="#8393EE" />
            <Picker.Item key={1} label="Bimester" value={4} color="#8393EE" />
          </Picker>
        </ContainerPicker>
        <ContainerInput>
          <Text
            style={{
              paddingVertical,
              fontSize: 30,
              color: "#2E43B8",
              fontFamily: "BebasNeue_400Regular",
            }}
          >
            Write your first average
          </Text>
          <Input
            onChangeText={(text) => setValueOne(text)}
            placeholder="7,0"
            placeholderTextColor="#8393EE"
            keyboardType="decimal-pad"
            returnKeyType="next"
            selectionColor="#3B426B"
          />
          <Text
            style={{
              paddingVertical,
              fontSize: 30,
              color: "#2E43B8",
              fontFamily: "BebasNeue_400Regular",
            }}
          >
            Write your high school average
          </Text>
          <Input
            onChangeText={(text) => setValueTwo(text)}
            placeholder="9,0"
            placeholderTextColor="#8393EE"
            keyboardType="decimal-pad"
            returnKeyType="send"
            selectionColor="#3B426B"
          />
        </ContainerInput>
        <ContainerButton>
          <Button onPress={Result}>
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
    </TouchableWithoutFeedback>
  );
}
