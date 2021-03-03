import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, Image, Dimensions } from 'react-native';
import { gql, useQuery } from '@apollo/client';
import { FlatList } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

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
      <Image
        source={{ uri: item.image }}
        style={{
          height: 42,
          width: 42,
          borderRadius: 42,
          marginRight: 12,
        }}
      />
      <Text
        style={{
          color: '#fff',
          fontSize: 18,
        }}
      >
        {item.name}
      </Text>
    </Animated.View>
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
      <FlatList
        style={{
          width: Dimensions.get('window').width,
        }}
        keyExtractor={(item) => item.id}
        data={data.characters.results}
        renderItem={({ item }: any) => <HomeItem item={item} />}
      />
    </View>
  );
}
