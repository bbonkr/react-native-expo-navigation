import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { BottomTab } from '../../navigations';
import { Home } from '../home';
import { Settings } from '../settings';

export const MainBottomTab = () => {
    return (
        <BottomTab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'ios-information-circle'
                            : 'ios-information-circle-outline';
                    } else if (route.name === 'Settings') {
                        iconName = focused ? 'ios-list-box' : 'ios-list';
                    }

                    // You can return any component that you like here!
                    return (
                        <Ionicons name={iconName} size={size} color={color} />
                    );
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            <BottomTab.Screen name="Home" component={Home} />
            <BottomTab.Screen name="Settings" component={Settings} />
        </BottomTab.Navigator>
    );
};
