import styled from 'styled-components/native'

type InputProps = {
  notFilled?: boolean;
}

export const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #161817;
`;

export const FlexRow = styled.View`
  flex-direction: row;
`;

export const FlexFull = styled.View`
  flex: 1;
`;

export const Input = styled.TextInput<InputProps>`
  height: 50px;
  padding-left: 20px;
  margin: 10px;
  border-radius: 10px;
  border-color: ${props => props.notFilled ? "red" : "#18a330"};
  border-width: 1px;
  background-color: #FAFAFA;
`;

export const ValidationText = styled.Text`
  font-size: 14px;
  padding-left: 10px;
  color: red;
`;

export const ButtonCreate = styled.TouchableOpacity`
  height: 50px;
  justify-content: center;
  align-items: center;
  margin: 10px;
  border-radius: 10px;
  border-color: #FAFAFA;
  border-width: 1px;
  background-color: #18a330;
`;

export const TextButtonCreate = styled.Text`
  color: #FFF;
  font-size: 16px;
`;
