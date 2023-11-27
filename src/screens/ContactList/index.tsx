import { useState, useEffect } from "react";
import { Alert, FlatList } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import * as Contacts from "expo-contacts";

import { ParamList } from "../../@types/ParamList";
import ContactListItem from "../../components/ContactListItem";

import * as S from "./styles";

const ContactList = ({
  navigation,
}: StackScreenProps<ParamList, "ContactList">) => {
  const [contacts, setContacts] = useState([] as Contacts.Contact[]);

  const getAllContacts = async () => {
    const { status } = await Contacts.requestPermissionsAsync();
    if (status === "granted") {
      Contacts.getContactsAsync()
        .then(({ data }) => setContacts(data))
        .catch((err) => {
          Alert.alert(
            "Error",
            "An error occurred while searching your contact list."
          );
        });
    }
  };

  useEffect(() => {
    getAllContacts();
  }, [getAllContacts]);

  return (
    <S.Wrapper>
      <FlatList
        data={contacts.sort((a, b) => a.name.localeCompare(b.name))}
        renderItem={({ item }) => (
          <ContactListItem
            key={item.id}
            contact={item}
            size={40}
            fontSize={24}
            onPress={() => navigation.navigate("ViewContact", item)}
          />
        )}
        keyExtractor={({ id }) => id}
      />
    </S.Wrapper>
  );
};

export default ContactList;
