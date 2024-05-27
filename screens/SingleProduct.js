import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { API_URL } from "../constant";
import { QuantityInput } from "../components";
import axios from "axios";

export const SingleProduct = ({ route }) => {
    const { id } = route.params
    const [quantity, setQuantity] = useState(1);
    const [productData, setProductData] = useState(null);
    const dispatch = useDispatch();
    const loginState = useSelector((state) => state.auth.isLoggedIn);

    const product = {
        id: productData?.id,
        title: productData?.name,
        image: productData?.imageUrl,
        price: productData?.price,
        amount: quantity,
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${API_URL}/products/${id}`);
                setProductData(response.data);
            } catch (error) {
                console.error("Error fetching product data:", error);
            }
        };
        fetchData();
    }, [id]);

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: `../assets${productData?.imageUrl}` }}
                style={styles.image}
                resizeMode="contain"
            />
            <View style={styles.content}>
                <Text style={styles.title}>{productData?.name}</Text>
                <Text style={styles.price}>${productData?.price}</Text>
                <Text style={styles.description}>{productData?.description}</Text>
                <View style={styles.quantityContainer}>
                    <Text style={styles.label}>Cantidad:</Text>
                    <QuantityInput quantity={quantity} setQuantity={setQuantity} />
                </View>
                <TouchableOpacity
                    style={styles.addToCartButton}
                    onPress={() => {
                        if (loginState) {
                            dispatch(addToCart(product));
                        } else {
                            alert("Debes iniciar sesión para agregar productos al carrito.");
                        }
                    }}
                >
                    <Text style={styles.addToCartButtonText}>Agregar al carrito</Text>
                </TouchableOpacity>
                <View style={styles.otherInfoContainer}>
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>SKU: {productData?.productCode}</Text>
                    </View>
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>Categoria: {productData?.category}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    content: {
        flex: 1,
        width: "100%",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 10,
    },
    price: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        textAlign: "center",
        marginBottom: 20,
    },
    quantityContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: "bold",
        marginRight: 10,
    },
    addToCartButton: {
        backgroundColor: "#007bff",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: "center",
        marginBottom: 20,
    },
    addToCartButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    otherInfoContainer: {
        alignItems: "center",
    },
    badge: {
        backgroundColor: "#4F4F4F",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginBottom: 10,
    },
    badgeText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});
