import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './pages/Home';
import Detail from './pages/Detail';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

const Stack = createSharedElementStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" headerMode="none">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Detail"
          component={Detail}
          sharedElementsConfig={(route, otherRoute, showing) => {
            const { item } = route.params;
            return [`item.${item.id}.photo`];
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
