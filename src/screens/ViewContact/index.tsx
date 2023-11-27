import { StackScreenProps } from "@react-navigation/stack";
import { Contact } from "expo-contacts";
import { MaterialIcons } from "@expo/vector-icons";

import { ParamList } from "../../@types/ParamList";
import ContactImage from "../../components/ContactImage";

import * as S from "./styles";

const ViewContact = ({ route }: StackScreenProps<ParamList, "ViewContact">) => {
  return (
    <S.Wrapper contentContainerStyle={{ alignItems: "center", gap: 40 }}>
      <S.ViewContacName>
        <ContactImage
          contact={route.params as Contact}
          size={96}
          fontSize={64}
        />
        <S.ContacName>{route.params?.name}</S.ContacName>
      </S.ViewContacName>

      <S.InfoContainer>
        {route.params?.phoneNumbers?.map(
          (phoneNumber) =>
            phoneNumber.number && (
              <S.RowView key={phoneNumber.id}>
                <MaterialIcons name={"phone"} size={24} color={"#161817"} />
                <S.ContactInfo>{phoneNumber.number}</S.ContactInfo>
              </S.RowView>
            )
        )}
        {route.params?.addresses?.map(
          (address) =>
            (address.city || address.country) && (
              <S.RowView key={address.id}>
                <MaterialIcons
                  name={"location-pin"}
                  size={24}
                  color={"#161817"}
                />
                <S.InfoLline>
                  <S.ContactInfo>{address.city}</S.ContactInfo>
                  <S.ContactInfo>{address.country} </S.ContactInfo>
                </S.InfoLline>
              </S.RowView>
            )
        )}
        {route.params?.emails?.map(
          ({ email, id }) =>
            email && (
              <S.RowView key={id}>
                <MaterialIcons name={"email"} size={24} color={"#161817"} />
                <S.ContactInfo>{email}</S.ContactInfo>
              </S.RowView>
            )
        )}
        {(route.params?.jobTitle || route.params?.company) && (
          <S.RowView>
            <MaterialIcons name={"work"} size={24} color={"#161817"} />
            <S.InfoLline>
              {route.params?.jobTitle && (
                <S.ContactInfo>{route.params.jobTitle}</S.ContactInfo>
              )}
              {route.params?.company && (
                <S.ContactInfo>{route.params.company}</S.ContactInfo>
              )}
            </S.InfoLline>
          </S.RowView>
        )}
      </S.InfoContainer>
    </S.Wrapper>
  );
};

export default ViewContact;
