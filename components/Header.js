import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Animated, Dimensions, useWindowDimensions } from "react-native";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 as Icon } from "@expo/vector-icons";
import { CartPopover } from "./CartPopover";
import { UserOptionsPopover } from "./UserOptionsPopover";

export const Header = () => {
    const navigation = useNavigation();
    const { amount, total } = useSelector((state) => state.cart);
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const [cartPopover, setCartPopover] = useState(false);
    const [userOptionsPopover, setUserOptionsPopover] = useState(false);
    const windowWidth = useWindowDimensions().width;

    const toggleCartPopover = () => {
        setCartPopover(!cartPopover);
    };

    const toggleUserOptionsPopover = () => {
        setUserOptionsPopover(!userOptionsPopover);
    };





    useEffect(() => {

    }, [windowWidth]);

    return (
        <View >
            <View style={styles.navbar}>
                <View style={styles.leftSection}>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate("home")}>
                            <Image
                                source={require("../assets/logo.png")}
                                style={styles.logo}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                    </View>
                    {windowWidth <= 768 && (
                        <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={{ marginLeft: 10 }}>
                            <Icon name="bars" size={24} color="black" />
                        </TouchableOpacity>
                    )}
                </View>
                <View style={styles.rightSection}>
                    <TouchableOpacity onPress={() => navigation.navigate("SearchScreen")}>
                        <Icon name="search" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginLeft: 10 }} onPress={toggleCartPopover} >
                        <Icon name="shopping-cart" size={24} color="black" />
                    </TouchableOpacity>
                    {isLoggedIn && (
                        <TouchableOpacity style={{ marginLeft: 10 }} onPress={toggleUserOptionsPopover}>
                            <Icon name="user" size={24} color="black" />
                        </TouchableOpacity>
                    )}
                </View>
            </View>

            {cartPopover && (
                <CartPopover
                    amount={amount}
                    total={total}
                    onPress={toggleCartPopover}
                />
            )}

            {userOptionsPopover && (
                <UserOptionsPopover onPress={toggleUserOptionsPopover} />
            )}


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    navbar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: "grey",
        borderBottomWidth: 1,
    },
    leftSection: {
        flexDirection: "row",
        alignItems: "center",
        paddingRight: 10,
    },
    rightSection: {
        flexDirection: "row",
        alignItems: "center",
        paddingRight: 10,
    },
    logo: {
        width: 50,
        height: 50,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "white",
        marginLeft: 10,
    },

});
