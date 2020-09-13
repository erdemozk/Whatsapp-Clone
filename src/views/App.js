import React from 'react';
import { StatusBar, Appearance, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { observer } from 'mobx-react';

import Chats from './Chats';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { statusBar as S } from './style';

const Stack = createStackNavigator();

const colorScheme = Appearance.getColorScheme();

class App extends React.Component {
    navigasyon() {
        return (
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name={'Chats'} component={Chats} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }

    render() {
        return (
            <>
              <StatusBar
                backgroundColor={'blue'}
                style={S.main}
                barStyle={'light-content'}
              />

              <Header />

              {this.navigasyon()}

              <Footer />
            </>
        );
    }
}

export default App;