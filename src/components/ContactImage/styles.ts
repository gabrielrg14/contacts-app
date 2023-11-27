import styled from 'styled-components/native'

type ContactImageProps = {
  size?: number;
  fontSize?: number;
  bgColor?: string;
}

export const CircularImage = styled.Image<ContactImageProps>`
  height: ${props => `${props.size}px`};
  width: ${props => `${props.size}px`};
  border-radius: 50px;
`;

export const CircularView = styled.View<ContactImageProps>`
  height: ${props => `${props.size}px`};
  width: ${props => `${props.size}px`};
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor ? props.bgColor : "#000"};
`;

export const InitialLetter = styled.Text<ContactImageProps>`
  font-size: ${props => `${props.fontSize}px`};
  color: #FFF;
`;
