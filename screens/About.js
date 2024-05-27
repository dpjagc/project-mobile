import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { SectionTitle } from "../components";
import { useNavigation } from '@react-navigation/native';

export const About = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <SectionTitle title="Sobre nosotros" path="Inicio | Sobre nosotros" />
            <View style={styles.content}>
                <Text style={styles.heading}>We love our customers!</Text>
                <Text style={styles.paragraph}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
                    obcaecati eum est commodi, quam, ut quidem deleniti quos quod temporibus
                    dicta deserunt voluptates ab! Deleniti id repellat, labore fugiat
                    obcaecati dolorem minima fugit quasi nam velit reiciendis delectus ea
                    tempora.
                </Text>
                <Button onPress={() => navigation.navigate("contact")} title="Contacta con nosotros" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 20,
    },
    content: {
        alignItems: 'center',
    },
    heading: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    paragraph: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

