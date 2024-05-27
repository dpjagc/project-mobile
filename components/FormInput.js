import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

export const FormInput = ({ label, name, type, defaultValue, size, onChange }) => {
    return (
        <View style={styles.formControl}>
            <Text style={styles.label}>
                <Text style={styles.labelText}>{label}</Text>
            </Text>
            <TextInput
                onChange={onChange}
                style={[styles.input, styles.inputBordered, styles[size]]}
                defaultValue={defaultValue}
                placeholder="Busca aquí..."
            />
        </View>
    );
};

const styles = StyleSheet.create({
    formControl: {
        marginBottom: 16,
    },
    label: {
        marginBottom: 8,
    },
    labelText: {
        textTransform: 'capitalize',
    },
    input: {
        height: 40,
        paddingHorizontal: 12,
        borderRadius: 8,
        backgroundColor: '#FFFFFF',
    },
    inputBordered: {
        borderWidth: 1,
        borderColor: '#CCCCCC',
    },
    inputSm: {
        fontSize: 14,
    },
    inputMd: {
        fontSize: 16,
    },
    inputLg: {
        fontSize: 18,
    },
});

