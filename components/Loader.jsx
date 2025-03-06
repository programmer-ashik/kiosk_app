import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Loader = () => {
    const styles = StyleSheet.create({
        loader: {
            width: 'fit-content',
            fontSize: 40,
            fontFamily: 'system-ui,sans-serif',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            color: '#0000',
            webkitTextStroke: '1px #000',
            background: `red
      `,
            animation: `l10-0 0.8s linear infinite alternate, l10-1 4s linear infinite`,
        },
    });

    return (
        <View style={styles.loader}>
            <Text>Loading</Text>
        </View>
    );
};

export default Loader;