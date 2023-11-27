import { useState } from "react";
import { Alert } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import * as Contacts from "expo-contacts";

import { ParamList } from "../../@types/ParamList";

import * as S from "./styles";

// https://github.com/expo/expo/issues/23828
const initialContact: Contacts.Contact = {
  // @ts-expect-error
  id: null,
  contactType: "person",
  name: "",
  firstName: "",
  lastName: "",
  // @ts-expect-error
  phoneNumbers: [{ id: null, label: "Mobile", number: "" }],
  addresses: [
    {
      // @ts-expect-error
      id: null,
      label: "Home",
      city: "",
      country: "",
    },
  ],
  // @ts-expect-error
  emails: [{ id: null, label: "Home", email: "" }],
  jobTitle: "",
  company: "",
};

const initialValidation = { firstName: true, phoneNumber: true };

const FormContact = ({
  navigation,
}: StackScreenProps<ParamList, "FormContact">) => {
  const [contact, setContact] = useState({ ...initialContact });
  const [contactValidation, setContactValidation] = useState({
    ...initialValidation,
  });

  const validateContact = () => {
    const firstNameFilled = contact.firstName === "" ? false : true;
    const phoneNumberFilled =
      contact.phoneNumbers?.[0].number === "" ? false : true;

    setContactValidation((prev) => ({
      ...prev,
      firstName: firstNameFilled,
      phoneNumber: phoneNumberFilled,
    }));

    return firstNameFilled && phoneNumberFilled;
  };

  const handleSaveContact = () => {
    if (!validateContact()) return;

    Contacts.addContactAsync(contact)
      .then(() => {
        setContact({ ...initialContact });
        setContactValidation({ ...initialValidation });
        navigation.navigate("ContactList");
        Alert.alert(
          "Success!",
          "Contact successfully created in your contact list!"
        );
      })
      .catch((err) => {
        console.log(err);
        Alert.alert(
          "Error",
          "An error occurred while creating the contact in your contact list."
        );
      });
  };

  return (
    <S.Wrapper>
      <S.FlexRow>
        <S.FlexFull>
          <S.Input
            placeholder="First Name"
            keyboardType="default"
            notFilled={!contactValidation.firstName}
            value={contact.firstName}
            onChangeText={(text) =>
              setContact((prev) => ({ ...prev, firstName: text }))
            }
          />
        </S.FlexFull>
        <S.FlexFull>
          <S.Input
            placeholder="Last Name"
            keyboardType="default"
            value={contact.lastName}
            onChangeText={(text) =>
              setContact((prev) => ({ ...prev, lastName: text }))
            }
          />
        </S.FlexFull>
      </S.FlexRow>
      <S.FlexRow>
        <S.FlexFull>
          <S.Input
            placeholder="Phone"
            keyboardType="phone-pad"
            notFilled={!contactValidation.phoneNumber}
            value={contact.phoneNumbers?.[0]?.number}
            onChangeText={(text: string) => {
              const phoneNumbers = { ...contact.phoneNumbers };
              phoneNumbers[0].number = text;
              setContact((prev) => ({ ...prev, ...[phoneNumbers] }));
            }}
          />
        </S.FlexFull>
      </S.FlexRow>
      <S.FlexRow>
        <S.FlexFull>
          <S.Input
            placeholder="E-mail"
            keyboardType="email-address"
            value={contact.emails?.[0]?.email}
            onChangeText={(text: string) => {
              const emails = { ...contact.emails };
              emails[0].email = text;
              setContact((prev) => ({ ...prev, ...[emails] }));
            }}
          />
        </S.FlexFull>
      </S.FlexRow>
      <S.FlexRow>
        <S.FlexFull>
          <S.Input
            placeholder="City"
            keyboardType="default"
            value={contact.addresses?.[0]?.city}
            onChangeText={(text: string) => {
              const addresses = { ...contact.addresses };
              addresses[0].city = text;
              setContact((prev) => ({ ...prev, ...[addresses] }));
            }}
          />
        </S.FlexFull>
        <S.FlexFull>
          <S.Input
            placeholder="Country"
            keyboardType="default"
            value={contact.addresses?.[0]?.country}
            onChangeText={(text: string) => {
              const addresses = { ...contact.addresses };
              addresses[0].country = text;
              setContact((prev) => ({ ...prev, ...[addresses] }));
            }}
          />
        </S.FlexFull>
      </S.FlexRow>
      <S.FlexRow>
        <S.FlexFull>
          <S.Input
            placeholder="Job title"
            keyboardType="default"
            value={contact.jobTitle}
            onChangeText={(text) =>
              setContact((prev) => ({ ...prev, jobTitle: text }))
            }
          />
        </S.FlexFull>
        <S.FlexFull>
          <S.Input
            placeholder="Company"
            keyboardType="default"
            value={contact.company}
            onChangeText={(text) =>
              setContact((prev) => ({ ...prev, company: text }))
            }
          />
        </S.FlexFull>
      </S.FlexRow>
      <S.FlexRow>
        <S.FlexFull>
          <S.ButtonCreate onPress={() => handleSaveContact()}>
            <S.TextButtonCreate>Create Contact</S.TextButtonCreate>
          </S.ButtonCreate>
        </S.FlexFull>
      </S.FlexRow>
    </S.Wrapper>
  );
};

export default FormContact;
