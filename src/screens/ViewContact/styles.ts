import styled from 'styled-components/native'

export const Wrapper = styled.ScrollView`
  flex: 1;
  background-color: #161817;
  padding: 60px 0 0;
`;

export const ViewContacName = styled.View`
  gap: 20px;
  align-items: center;
`;

export const ContacName = styled.Text`
  font-size: 24px;
  color: #FFF;
`;

export const InfoContainer = styled.View`
  width: 90%;
  padding: 20px;
  border-radius: 10px;
  background-color: #FAFAFA;
`;

export const ContactInfo = styled.Text`
  font-size: 16px;
  color: #161817;
`;

export const RowView = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
  margin: 5px 0;
`;

export const InfoLline = styled.View`
  gap: 1px;
`;
