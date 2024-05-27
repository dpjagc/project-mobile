import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const SectionTitle = ({ title, path }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.path}>{path}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingBottom: 5,
        borderBottomWidth: 1,
        borderColor: 'rgba(75, 85, 99, 1)',
    },
    title: {
        color: 'rgba(75, 85, 99, 1)',
        textAlign: 'center',
        fontSize: 48,
    },
    path: {
        color: 'rgba(75, 85, 99, 1)',
        fontSize: 24,
        lineHeight: 32,
        textAlign: 'center',
    },
});

