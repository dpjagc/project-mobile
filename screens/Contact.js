import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { SectionTitle } from "../components";

export const Contact = () => {
    return (
        <View style={styles.container}>
            <SectionTitle title="Contacta con nosotros" path="Inicio | Contacto" />
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Nombre</Text>
                <TextInput
                    style={styles.input}
                    autoCompleteType="name"
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={styles.input}
                    autoCompleteType="email"
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Telefono</Text>
                <TextInput
                    style={styles.input}
                    autoCompleteType="tel"
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Mensaje</Text>
                <TextInput
                    style={[styles.input, styles.messageInput]}
                    multiline={true}
                    textAlignVertical="top"
                />
            </View>
            <Button title="Hablemos" onPress={() => console.log("Hablemos")} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
    },
    messageInput: {
        height: 100,
        textAlignVertical: 'top',
    },
});

