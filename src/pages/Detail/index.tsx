import React from 'react';
import { View, Dimensions, Image, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SharedElement } from 'react-navigation-shared-element';

const DetailScreen = (props: any) => {
  const { item } = props.route.params;

  return (
    <View style={{ flex: 1, backgroundColor: '#111' }}>
      <SharedElement id={`item.${item.id}.photo`}>
        <Image
          style={{
            width: Dimensions.get('screen').width,
            resizeMode: 'contain',
            height: Dimensions.get('screen').width,
          }}
          source={{ uri: item.image }}
        />
        <Text
          style={{
            color: '#fff',
            fontWeight: '500',
            fontSize: 24,
            margin: 16,
          }}
        >
          {item.name}
        </Text>
      </SharedElement>
    </View>
  );
};

export default DetailScreen;
