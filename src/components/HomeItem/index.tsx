import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { SharedElement } from 'react-navigation-shared-element';
import { Content, Avatar, Title } from './styles';

function HomeItem({ character }: any) {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const offset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: withTiming(offset.value, { duration: 5000 }),
    };
  });

  useEffect(() => {
    offset.value = 100;
  }, []);

  return (
    <TouchableOpacity onPress={() => navigation.push('Detail', { character })}>
      <Animated.View style={animatedStyles}>
        <Content>
          <SharedElement id={`item.${character.id}.photo`}>
            <Avatar source={{ uri: character.image }} />
          </SharedElement>
          <Title>{character.name}</Title>
        </Content>
      </Animated.View>
    </TouchableOpacity>
  );
}

export default HomeItem;
