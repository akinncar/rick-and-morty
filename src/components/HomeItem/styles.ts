import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const Content = styled.View`
  flex: 1;
  align-items: center;
  flex-direction: row;
  background-color: #222;
  border-radius: 8px;
  margin: 12px;
  padding: 16px;
`;

export const Avatar = styled.Image`
  height: 42px;
  width: 42px;
  border-radius: 42px;
  margin-right: 12px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 18px;
`;
