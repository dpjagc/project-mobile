import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, Button } from "react-native";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { useNavigation } from '@react-navigation/native';

export const ProductElement = ({ id, title, image, price }) => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const product = {
        id, title, image, price, amount: 1
    };

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate("shop/product", { id })}>
                <Image
                    source={{ uri: `../assets${image}` }}
                    style={styles.image}
                />
                <View style={styles.textContainer}>
                    <TouchableOpacity onPress={() => { }}>
                        <Text style={styles.title}>{title}</Text>
                    </TouchableOpacity>
                    <View style={styles.priceContainer}>
                        <Text style={styles.price}>${price}</Text>

                    </View>
                    <Button style={styles.addToCart} onPress={handleAddToCart} title="Agregar al carrito" />
                </View>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        marginBottom: 16,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 8,
    },
    textContainer: {
        marginLeft: 16,
        flex: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333333',
    },
    addToCart: {
        fontSize: 16,
        color: '#007AFF',
    },
});

