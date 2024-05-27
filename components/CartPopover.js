import React from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export const CartPopover = ({ amount, total, onPress }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <View style={styles.popover}>
                <Text style={styles.text}>Productos: {amount}</Text>
                <Text style={styles.text}>Subtotal: ${(total ?? 0).toFixed(2)}</Text>
                <Button onPress={() => { navigation.navigate("cart"); onPress() }} style={styles.button} title='Ver carrito' />
            </View>
        </TouchableOpacity>
    );
};

const styles = {
    container: {
        position: 'absolute',
        top: 50,
        right: 10,
        zIndex: 999,
    },
    popover: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    text: {
        marginBottom: 5,
    },
    button: {
        backgroundColor: 'blue',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
};

