import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { FontAwesome5 } from '@expo/vector-icons';

export const Footer = () => {
    const loginState = useSelector((state) => state.auth.isLoggedIn);

    return (
        <View style={styles.footer}>
            <View style={styles.navContainer}>
                <TouchableOpacity onPress={() => window.scrollTo(0, 0)}>
                    <Text style={styles.link}>Inicio</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => window.scrollTo(0, 0)}>
                    <Text style={styles.link}>Comprar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => window.scrollTo(0, 0)}>
                    <Text style={styles.link}>Sobre nosotros</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => window.scrollTo(0, 0)}>
                    <Text style={styles.link}>Contáctenos</Text>
                </TouchableOpacity>
                {!loginState && (
                    <>
                        <TouchableOpacity onPress={() => window.scrollTo(0, 0)}>
                            <Text style={styles.link}>Iniciar Sesión</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => window.scrollTo(0, 0)}>
                            <Text style={styles.link}>Registrarme</Text>
                        </TouchableOpacity>
                    </>
                )}
            </View>
            <View style={styles.socialLinks}>
                <TouchableOpacity onPress={() => window.open("/", "_blank")}>
                    <FontAwesome5 name="facebook" size={24} color="#E5E7EB" style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => window.open("/", "_blank")}>
                    <FontAwesome5 name="twitter" size={24} color="#E5E7EB" style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => window.open("/", "_blank")}>
                    <FontAwesome5 name="linkedin" size={24} color="#E5E7EB" style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => window.open("/", "_blank")}>
                    <FontAwesome5 name="instagram" size={24} color="#E5E7EB" style={styles.icon} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        paddingVertical: 20,
        paddingHorizontal: 10,
        backgroundColor: "#1E293B",
    },
    navContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginBottom: 10,
    },
    link: {
        color: "#E5E7EB",
        fontSize: 16,
    },
    socialLinks: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    icon: {
        marginHorizontal: 10,
    },
});

export default Footer;
