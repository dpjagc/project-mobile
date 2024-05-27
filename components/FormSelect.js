import { Picker } from "@react-native-picker/picker";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const FormSelect = ({ label, name, list, defaultValue, size, onChange }) => {
    return (
        <View style={styles.formControl}>
            <Text style={styles.label}>
                <Text style={styles.labelText}>{label}</Text>
            </Text>
            <Picker
                style={[styles.select, styles.selectBordered, styles[size]]}
                selectedValue={defaultValue}
                onValueChange={onChange}
            >
                {list.map((item) => {
                    return (
                        <Picker.Item key={item} label={item} value={item} />
                    );
                })}
            </Picker>
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
    select: {
        height: 40,
        borderRadius: 8,
        backgroundColor: '#FFFFFF',
    },
    selectBordered: {
        borderWidth: 1,
        borderColor: '#CCCCCC',
    },
    selectSm: {
        fontSize: 14,
    },
    selectMd: {
        fontSize: 16,
    },
    selectLg: {
        fontSize: 18,
    },
});

