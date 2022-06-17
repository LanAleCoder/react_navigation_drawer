import * as React from 'react';
import {Button, SafeAreaView, View} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContent,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Btn from './src/components/button';
import appStyles from './App.styles';
import Layout1 from './src/views/Layout 1';
import Layout2 from './src/views/Layout2';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <SafeAreaView style={appStyles.main}>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          defaultStatus="open"
          drawerContent={props => {
            return (
              <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
                <DrawerItem
                  label="Cerrar drawer"
                  onPress={() => props.navigation.closeDrawer()}
                />
              </DrawerContentScrollView>
            );
          }}>
          <Drawer.Screen name="Layout 1" component={Layout1} />
          <Drawer.Screen name="Layout 2" component={Layout2} />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
