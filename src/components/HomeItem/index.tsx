import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { SharedElement } from 'react-navigation-shared-element';

function HomeItem({ item }: any) {
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
    <TouchableOpacity onPress={() => navigation.push('Detail', { item })}>
      <Animated.View
        style={[
          {
            flex: 1,
            alignItems: 'center',
            flexDirection: 'row',
            backgroundColor: '#222',
            borderRadius: 8,
            margin: 12,
            padding: 16,
          },
          animatedStyles,
        ]}
      >
        <SharedElement id={`item.${item.id}.photo`}>
          <Image
            source={{ uri: item.image }}
            style={{
              height: 42,
              width: 42,
              borderRadius: 42,
              marginRight: 12,
            }}
          />
        </SharedElement>
        <Text
          style={{
            color: '#fff',
            fontSize: 18,
          }}
        >
          {item.name}
        </Text>
      </Animated.View>
    </TouchableOpacity>
  );
}

export default HomeItem;
