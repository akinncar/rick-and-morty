import React from 'react';
import {
  SafeAreaView,
  ActivityIndicator,
  Dimensions,
  ScrollView,
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
  const { loading, data } = useQuery(GET_CHARACTERS, {
    variables: { page: 1 },
  });

  if (loading) return <ActivityIndicator color="#fff" />;

  return (
    <Container>
      <SafeAreaView>
        <ScrollView>
          <Header>
            <Logo
              source={require('../../assets/images/logo.png')}
              resizeMode="contain"
            />
          </Header>
          {data.characters.results.map((character: any) => {
            console.log(character.id);
            return <HomeItem character={character} />;
          })}
        </ScrollView>
      </SafeAreaView>
    </Container>
  );
}
