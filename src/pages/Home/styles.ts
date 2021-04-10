import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #111;
`;

export const Header = styled.View`
  flex: 1;
  width: ${Dimensions.get('window').width};
  align-items: center;
`;

export const Logo = styled.Image`
  width: ${Dimensions.get('window').width * 0.7};
  height: 120px;
`;
