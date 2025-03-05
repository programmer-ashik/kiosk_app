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
            background: `
        radial-gradient(0.71em at 50% 1em,#000 99%,#0000 101%) calc(50% - 1em) 1em/2em 200% repeat-x text,
        radial-gradient(0.71em at 50% -0.5em,#0000 99%,#000 101%) 50% 1.5em/2em 200% repeat-x text
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