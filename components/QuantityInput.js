import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome5 as Icon } from "@expo/vector-icons";

export const QuantityInput = ({ quantity, setQuantity }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    if (quantity !== 1) {
                        setQuantity(quantity - 1);
                    }
                }}
            >
                <Icon name="minus" size={24} color="gray" />
            </TouchableOpacity>

            <Text style={styles.quantity}>{quantity}</Text>

            <TouchableOpacity
                style={styles.button}
                onPress={() => setQuantity(quantity + 1)}
            >
                <Icon name="plus" size={24} color="gray" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: 100,
    },
    button: {
        width: 30,
        height: 30,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "gray",
        justifyContent: "center",
        alignItems: "center",
    },
    quantity: {
        fontSize: 18,
    },
});

