import React, { useState, useEffect, useRef } from "react";
import {
  LogBox,
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
  const [yearDivision, setYearDivision] = useState(3);
  const [valueOne, setValueOne] = useState("");
  const [valueTwo, setValueTwo] = useState("");

  const pickerRef = useRef();

  LogBox.ignoreAllLogs();

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }

  function Result() {
    const schoolAverage = parseFloat(valueOne.replace(",", "."));
    const firstAverage = parseFloat(valueTwo.replace(",", "."));
    if (schoolAverage <= 0 || firstAverage < 0) {
      alert(
        "It is not possible to do the calculation with the mean less than zero"
      );
    } else {
      const schoolYearAverage = schoolAverage * parseFloat(yearDivision);
      const needToPass = schoolYearAverage - firstAverage;
      const period = parseFloat(yearDivision) - parseFloat(1);
      const finalAverage = needToPass / period;
      alert(
        `You need ${finalAverage.toFixed(
          2
        )} points in each remaining bimester / quarter to pass the year`
      );
    }
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
            Write your high school average
          </Text>
          <Input
            onChangeText={(text) => setValueOne(text)}
            placeholder="9,0"
            placeholderTextColor="#8393EE"
            keyboardType="numeric"
            returnKeyType="send"
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
            Write your first average
          </Text>
          <Input
            value={parseFloat(valueTwo)}
            onChangeText={(text) => setValueTwo(text)}
            placeholder="7,0"
            placeholderTextColor="#8393EE"
            keyboardType="numeric"
            returnKeyType="next"
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
