import { Contact } from "expo-contacts";

import * as S from "./styles";

type ContactImageProps = {
  contact: Contact;
  size: number;
  fontSize: number;
};

const ContactImage = ({ contact, size, fontSize }: ContactImageProps) => {
  const getContactBgColor = (letter: string): string => {
    let hash = 0;
    if (letter.length === 0) return "0";
    for (let i = 0; i < letter.length; i++) {
      hash = letter.charCodeAt(i) + ((hash << 5) - hash);
      hash = hash & hash;
    }
    let color = "#";
    for (let i = 0; i < 3; i++) {
      let value = (hash >> (i * 8)) & 255;
      color += ("00" + value.toString(16)).substr(-2);
    }
    return color;
  };

  return contact.imageAvailable ? (
    <S.CircularImage source={{ uri: contact.image?.uri }} size={size} />
  ) : (
    <S.CircularView size={size} bgColor={getContactBgColor(contact.name)}>
      <S.InitialLetter fontSize={fontSize}>
        {contact.name.substring(0, 1)}
      </S.InitialLetter>
    </S.CircularView>
  );
};

export default ContactImage;
