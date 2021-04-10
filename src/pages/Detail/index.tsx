import React from 'react';
import { SharedElement } from 'react-navigation-shared-element';
import { Container, Avatar, Title } from './styles';

const DetailScreen = (props: any) => {
  const { character } = props.route.params;

  return (
    <Container>
      <SharedElement id={`item.${character.id}.photo`}>
        <Avatar resizeMode="contain" source={{ uri: character.image }} />
      </SharedElement>
      <Title>{character.name}</Title>
    </Container>
  );
};

export default DetailScreen;
