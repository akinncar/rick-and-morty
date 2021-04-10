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
import { Container, Header, Logo } from './styles';

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

  if (loading) return <ActivityIndicator color="#fff" />;

  return (
    <Container>
      <SafeAreaView>
        <Header>
          <Logo
            source={require('../../assets/images/logo.png')}
            resizeMode="contain"
          />
        </Header>
        <FlatList
          style={{
            width: Dimensions.get('window').width,
          }}
          keyExtractor={(item) => item.id}
          data={data.characters.results}
          renderItem={({ item }: any) => <HomeItem item={item} />}
        />
      </SafeAreaView>
    </Container>
  );
}
