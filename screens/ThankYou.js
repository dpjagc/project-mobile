import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { Toast } from "toastify-react-native";
import { useNavigation } from '@react-navigation/native';

export const ThankYou = () => {
    const loginState = useSelector((state) => state.auth.isLoggedIn);
    const navigation = useNavigation();

    useEffect(() => {
        if (!loginState) {
            Toast.error("Debes iniciar sesión para acceder a esta página");
            navigation.navigate("home");
        }
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Gracias</Text>
            <View style={styles.content}>
                <Text style={styles.text}>
                    Gracias por tu compra!
                </Text>
                <Text style={styles.text}>
                    ¡Esperamos que te gusten tus equipos tecnológicos! Apreciamos tu compra y esperamos verte pronto de nuevo.
                </Text>
                <Text style={styles.text}>
                    Aquí hay algunas cosas que puedes hacer a continuación:
                </Text>
                <Text style={[styles.text, styles.link]} onPress={() => navigation.navigate("order-history")}>
                    Ver historial de pedidos
                </Text>
                <Text style={[styles.text, styles.link]} onPress={() => navigation.navigate("home")}>
                    Explora productos y compra más
                </Text>
                <Text style={styles.text}>
                    ¡Gracias nuevamente por tu compra!
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    content: {
        alignItems: "center",
    },
    text: {
        fontSize: 18,
        marginBottom: 10,
        textAlign: "center",
    },
    link: {
        color: "blue",
    },
});

