import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Button
                title="Go to Detail"
                onPress={() => navigation.navigate('Detail', { name: 'Hello' })}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
