import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';
import { Stack } from '../../navigations';
import { MainBottomTab } from '../mainBottomTab';
import { Detail } from '../detail';

export const MainNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Main"
                component={MainBottomTab}
                options={{
                    headerTitle: props => <Text>Expo</Text>,
                    headerRight: props => (
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                style={styles.button}
                                onPressOut={() => {}}
                            >
                                <FontAwesome name="bell-o" size={20} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.button}
                                onPressOut={() => {}}
                            >
                                <FontAwesome name="search" size={20} />
                            </TouchableOpacity>
                        </View>
                    ),
                }}
            />
            <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
    );
};

const styles = StyleSheet.create({
    logo: {
        width: 68,
        height: 22,
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    button: {
        padding: 6,
        marginHorizontal: 6,
    },
});
