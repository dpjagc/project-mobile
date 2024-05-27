import React from 'react';
import { View, TouchableOpacity, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAsyncStorage } from '../hooks/useAsyncStorage';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../features/auth/authSlice';

export const UserOptionsPopover = ({ onPress }) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const loginState = useSelector((state) => state.auth.isLoggedIn);
    const { storedValue: userId, saveValue, clearStorage } = useAsyncStorage('userId');

    const handleLogout = () => {
        if (loginState) {
            clearStorage();
            dispatch(logoutUser());
            navigation.navigate('Inicio');
        }
    };
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <View style={styles.popover}>
                <Button onPress={() => { navigation.navigate("user-profile"); onPress() }} style={styles.button} title='Perfil' />
                <Button onPress={() => { navigation.navigate("order-history"); onPress() }} style={styles.button} title='Historial de ordenes' />
                <Button onPress={() => { handleLogout(); onPress() }} style={styles.button} title='Cerrar sesión' />
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

