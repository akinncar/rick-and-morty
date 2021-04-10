import React from 'react';
import { SharedElement } from 'react-navigation-shared-element';
import { Container, Avatar, Title } from './styles';

const DetailScreen = (props: any) => {
  const { item } = props.route.params;

  return (
    <Container>
      <SharedElement id={`item.${item.id}.photo`}>
        <Avatar resizeMode="contain" source={{ uri: item.image }} />
        <Title>{item.name}</Title>
      </SharedElement>
    </Container>
  );
};

export default DetailScreen;
