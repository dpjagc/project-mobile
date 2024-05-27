import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SectionTitle } from '../components';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Toast } from 'toastify-react-native';
import { useNavigation } from '@react-navigation/native';
import { API_URL } from '../constant';
import { useAsyncStorage } from '../hooks/useAsyncStorage';

export const OrderHistory = () => {
    const { storedValue: userId, isLoading } = useAsyncStorage('userId');
    const loginState = useSelector((state) => state.auth.isLoggedIn);
    const navigation = useNavigation();
    const [orders, setOrders] = useState([]);
    const [expandedOrder, setExpandedOrder] = useState(null);

    const getOrderHistory = async () => {
        try {
            const response = await axios.get(`${API_URL}/orders?user=${userId}`);
            const data = response.data;
            setOrders(data);
        } catch (error) {
            console.error('Error fetching order history:', error);
            Toast.error('Error fetching order history');
        }
    };

    const toggleOrderDetail = (index) => {
        setOrders(orders.map((order, i) => {
            if (i === index) {
                return { ...order, isOpen: !order.isOpen };
            }
            return order;
        }));
    };


    useEffect(() => {
        if (!loginState) {
            Toast.error('Debes iniciar sesión para acceder a esta página');
            navigation.navigate('home');
        } else if (!isLoading && userId) {
            getOrderHistory();
        }
    }, [isLoading, userId]);

    return (
        <>
            <SectionTitle title="Historial de pedidos" path="Inicio | Historial de pedidos" />
            <ScrollView contentContainerStyle={styles.container}>
                {orders.length === 0 ? (
                    <View style={styles.noOrdersContainer}>
                        <Text style={styles.noOrdersText}>
                            No hay pedidos en el historial de pedidos.
                        </Text>
                        <TouchableOpacity
                            style={styles.firstOrderButton}
                            onPress={() => navigation.navigate('shop')}>
                            <Text style={styles.firstOrderButtonText}>Haz tu primer pedido</Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    orders.map((order, index) => (
                        <View key={order.id} style={styles.orderContainer}>
                            <TouchableOpacity
                                style={styles.orderHeader}
                                activeOpacity={0.8}
                                onPress={() => toggleOrderDetail(index)}>
                                <Text style={styles.orderTitle}>
                                    Orden {order.id} - {order.orderStatus}
                                </Text>
                            </TouchableOpacity>
                            {order.isOpen && (
                                <View style={styles.orderDetailsContainer}>
                                    <ScrollView horizontal={true}>
                                        <View style={styles.tableContainer}>
                                            <View style={styles.tableRow}>
                                                <Text style={styles.tableHeader}>Order</Text>
                                                <Text style={styles.tableHeader}>Imagen</Text>
                                                <Text style={styles.tableHeader}>Nombre</Text>
                                                <Text style={styles.tableHeader}>Cantidad</Text>
                                                <Text style={styles.tableHeader}>Precio</Text>
                                            </View>
                                            {order.CartItems.map((product, i) => (
                                                <View key={i} style={styles.tableRow}>
                                                    <Text>{i + 1}</Text>
                                                    <Image
                                                        source={{ uri: `../assets${product.image}` }}
                                                        style={styles.productImage}
                                                    />
                                                    <Text>{product.title}</Text>
                                                    <Text>{product.amount}</Text>
                                                    <Text>${((product.price * product.amount) ?? 0).toFixed(2)}</Text>
                                                </View>
                                            ))}
                                        </View>
                                    </ScrollView>
                                    <View style={styles.orderDetailContainer}>
                                        <Text style={styles.orderDetailText}>
                                            Subtotal: ${Math.round(order.subtotal)}
                                        </Text>
                                        <Text style={styles.orderDetailText}>Envío: $50</Text>
                                        <Text style={styles.orderDetailText}>
                                            Impuesto 20%: ${Math.round(order.subtotal / 5)}
                                        </Text>
                                        <Text style={styles.orderDetailText}>
                                            Total del pedido: ${Math.round(order.subtotal + 50 + order.subtotal / 5)}
                                        </Text>
                                    </View>
                                </View>
                            )}
                        </View>
                    ))
                )}
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingHorizontal: 10,
    },
    noOrdersContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
    },
    noOrdersText: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 20,
    },
    firstOrderButton: {
        backgroundColor: '#0069d9',
        padding: 10,
        borderRadius: 5,
    },
    firstOrderButtonText: {
        color: 'white',
        fontSize: 16,
    },
    orderContainer: {
        backgroundColor: '#f5f5f5',
        marginBottom: 10,
        borderRadius: 10,
        overflow: 'hidden',
    },
    orderHeader: {
        padding: 10,
        backgroundColor: '#d3d3d3',
    },
    orderTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    orderDetailsContainer: {
        paddingHorizontal: 10,
        alignItems: 'center',
    },
    orderDetails: {
        marginTop: 10,
    },
    tableContainer: {
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        overflow: 'hidden',
        width: '100%',
    },
    tableHeader: {
        backgroundColor: '#f0f0f0',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    tableHeaderText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    tableRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    tableRowLast: {
        borderBottomWidth: 0,
    },
    productImage: {
        width: 50,
        height: 50,
        marginRight: 10,
        borderRadius: 8,
    },
    productName: {
        flex: 1,
        fontSize: 16,
        color: '#333',
    },
    productAmount: {
        fontSize: 16,
        color: '#333',
    },
    productPrice: {
        fontSize: 16,
        color: '#333',
    },
    orderDetailContainer: {
        marginTop: 10,
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        alignItems: 'center',
    },
});