import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const Hero = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.headerContent}>
                <View style={styles.headerText}>
                    <Text style={styles.subtitle}>Computer And Laptop</Text>
                    <Text style={styles.title}>Accessories</Text>
                    <Text style={styles.paragraph}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </Text>
                    <Button style={styles.button} onPress={() => navigation.navigate("shop")} title="Comprar ahora" />
                </View>
                <Image
                    style={styles.image}
                    source={require("../assets/images/pct.png")}
                />
            </View>

            <View style={styles.cards}>
                <View style={styles.card}>
                    <Image
                        style={styles.cardImage}
                        source={require("../assets/images/thr.png")}
                    />
                    <Text style={styles.cardTitle}>Computer</Text>
                    <Text style={styles.cardText}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dicta
                        dignissimos dolorum repudiandae ad natus unde magni, quos
                        reiciendis. Beatae iste voluptate, ratione dignissimos cupiditate
                        velit quos perspiciatis! Sequi, aperiam.
                    </Text>
                </View>
                <View style={styles.card}>
                    <Image
                        style={styles.cardImage}
                        source={require("../assets/images/thr1.png")}
                    />
                    <Text style={styles.cardTitle}>Laptop</Text>
                    <Text style={styles.cardText}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dicta
                        dignissimos dolorum repudiandae ad natus unde magni, quos
                        reiciendis. Beatae iste voluptate, ratione dignissimos cupiditate
                        velit quos perspiciatis! Sequi, aperiam.
                    </Text>
                </View>
                <View style={styles.card}>
                    <Image
                        style={styles.cardImage}
                        source={require("../assets/images/thr2.png")}
                    />
                    <Text style={styles.cardTitle}>Table</Text>
                    <Text style={styles.cardText}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dicta
                        dignissimos dolorum repudiandae ad natus unde magni, quos
                        reiciendis. Beatae iste voluptate, ratione dignissimos cupiditate
                        velit quos perspiciatis! Sequi, aperiam.
                    </Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    headerContent: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },
    headerText: {
        flex: 1,
        marginRight: 20,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5,
        color: "#333",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#333",
    },
    paragraph: {
        fontSize: 16,
        marginBottom: 10,
        color: "#555",
    },
    button: {
        backgroundColor: "#007BFF",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center",
    },
    image: {
        width: 150,
        height: 150,
    },
    cards: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    card: {
        width: "48%",
        marginBottom: 20,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        padding: 10,
    },
    cardImage: {
        width: "100%",
        height: 150,
        marginBottom: 10,
        borderRadius: 10,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 5,
        color: "#333",
    },
    cardText: {
        fontSize: 14,
        color: "#555",
    },
});

