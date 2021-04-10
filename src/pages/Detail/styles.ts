import { Dimensions } from 'react-native';
import styled from 'styled-components/native'
  
export const Container = styled.View``;

export const Avatar = styled.Image`
    width: ${Dimensions.get('screen').width};
    height: ${Dimensions.get('screen').width};
`;

export const Title = styled.Text`
    color: #fff;
    font-weight: 500;
    font-size: 24px;
    margin: 16px;
`;

