import { TouchableOpacityProps } from "react-native";
import { Contact } from "expo-contacts";

import ContactImage from "../ContactImage";

import * as S from "./styles";

type ContactListItemProps = {
  contact: Contact;
  size: number;
  fontSize: number;
};

const ContactListItem = ({
  contact,
  size,
  fontSize,
  ...rest
}: ContactListItemProps & TouchableOpacityProps) => {
  return (
    <S.Contact {...rest}>
      <ContactImage contact={contact} size={size} fontSize={fontSize} />
      <S.ContactName>{contact.name}</S.ContactName>
    </S.Contact>
  );
};

export default ContactListItem;
