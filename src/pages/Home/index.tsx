import React from 'react';
import {
  View,
  SafeAreaView,
  ActivityIndicator,
  Image,
  Dimensions,
} from 'react-native';
import { gql, useQuery } from '@apollo/client';
import { FlatList } from 'react-native-gesture-handler';
import HomeItem from '../../components/HomeItem';

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
