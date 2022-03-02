import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

export const ContainerButton = styled.View`
  padding-bottom: 15%;
  align-items: center;
`;

export const ContainerPicker = styled.View`
  flex: 0.5;
  margin-left: 5%;
  margin-right: 5%;
  justify-content: space-around;
`;

export const ContainerTitle = styled.View`
  align-items: center;
`;

export const ContainerInput = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
`;

export const Input = styled.TextInput`
  width: 90%;
  border-radius: 40px;
  height: 40px;
  border-width: 1px;
  border-color: #8393ee;
  align-items: center;
  padding: 8px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #3b426b;
  width: 90%;
  height: 45px;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
`;
