import React from 'react';
import { View, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { CartItemsList, CartTotals, SectionTitle } from '../components';
import { API_URL } from '../constant';
import { clearCart, calculateTotals } from '../features/cart/cartSlice';
import axios from 'axios';
import { useNavigation } from "@react-navigation/native";
import { Toast } from 'toastify-react-native';
import { useAsyncStorage } from '../hooks/useAsyncStorage';



export const Cart = () => {
    const { storedValue: userId } = useAsyncStorage('userId');
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const { cartItems, total } = useSelector((state) => state.cart);
    const loginState = useSelector((state) => state.auth.isLoggedIn);

    const isCartEmpty = async () => {
        if (cartItems.length === 0) {
            Toast.warn("Tu carrito está vacío");
        } else {
            await saveToOrderHistory();
        }
    }

    const saveToOrderHistory = async () => {
        try {
            const response = await axios.post(`${API_URL}/orders`, {
                userId,
                orderStatus: "En progreso",
                subtotal: total,
                cartItems: cartItems,
            });
            dispatch(clearCart());
            dispatch(calculateTotals());
            Toast.success("Pedido completado");
            navigation.navigate('thank-you');
        } catch (err) {
            Toast.error(err.message);
        }
    };

    return (
        <View>
            <SectionTitle title="Carrito" path="Inicio | Carrito" />
            <View style={styles.container}>
                <View style={styles.cartItemsList}>
                    <CartItemsList />
                </View>
                <View style={styles.cartTotals}>
                    <CartTotals />
                </View>
            </View>
            {loginState ? (
                <View>
                    <Button onPress={isCartEmpty} style={styles.orderButton} title='Ordenar ahora' />
                </View>
            ) : (
                <View>
                    <Button onPress={() => navigation.navigate("login")} style={styles.loginButton} title='Por favor inicia sesión' />
                </View>
            )}
        </View>
    );
};

const styles = {
    container: {

    },
    cartItemsList: {
    },
    cartTotals: {
    },
    orderButton: {
        backgroundColor: 'blue',
        borderRadius: 5,
    },
    orderButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    loginButton: {
        backgroundColor: 'blue',
        borderRadius: 5,
    },
    loginButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
};

