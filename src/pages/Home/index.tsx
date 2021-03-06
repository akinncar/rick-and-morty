import React, { useEffect } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  ActivityIndicator,
  Image,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { gql, useQuery } from '@apollo/client';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { SharedElement } from 'react-navigation-shared-element';
import { StackNavigationProp } from '@react-navigation/stack';

const GET_CHARACTERS = gql`
  query GetCharacters($page: Int!) {
    characters(page: $page) {
      info {
        count
      }
      results {
        id
        name
        image
      }
    }
  }
`;

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

export default function Home() {
  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: { page: 1 },
  });

  if (loading) return <ActivityIndicator />;

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#111',
      }}
    >
      <SafeAreaView>
        <View
          style={{
            display: 'flex',
            width: Dimensions.get('window').width,
            alignItems: 'center',
          }}
        >
          <Image
            style={{
              display: 'flex',
              width: Dimensions.get('window').width * 0.7,
              height: 120,
              resizeMode: 'contain',
            }}
            source={require('../../assets/images/logo.png')}
          />
        </View>
        <FlatList
          style={{
            width: Dimensions.get('window').width,
          }}
          keyExtractor={(item) => item.id}
          data={data.characters.results}
          renderItem={({ item }: any) => <HomeItem item={item} />}
        />
      </SafeAreaView>
    </View>
  );
}
