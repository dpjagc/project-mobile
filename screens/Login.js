import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, logoutUser } from '../features/auth/authSlice';
import { API_URL } from '../constant';
import axios from 'axios';
import { Toast } from 'toastify-react-native';
import { useNavigation } from "@react-navigation/native";
import { SectionTitle } from '../components';
import { useAsyncStorage } from '../hooks/useAsyncStorage';

export const Login = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const loginState = useSelector((state) => state.auth.isLoggedIn);
    const { storedValue: userId, saveValue, clearStorage } = useAsyncStorage('userId');

    const proceedLogin = () => {
        if (!isValidate()) return;
        axios
            .post(`${API_URL}/auth/login`, { email, password })
            .then((res) => {
                const { data } = res;
                const user = data;
                Toast.success('Inicio de sesión exitoso');
                saveValue(user.id);
                dispatch(loginUser());
                navigation.navigate('home');
            })
            .catch((err) => {
                Toast.error(err?.response?.data?.message ?? `El inicio de sesión falló debido a: ${err.message}`);
            });
    };

    const isValidate = () => {
        if (!email) {
            Toast.warn('Por favor ingrese un correo electrónico');
            return false;
        }

        if (password.length < 6) {
            Toast.warn('La contraseña debe tener un mínimo de 6 caracteres.');
            return false;
        }
        return true;
    };

    useEffect(() => {
        if (loginState) {
            clearStorage();
            dispatch(logoutUser());
        }
    }, []);

    return (
        <View style={styles.container}>
            <SectionTitle title="Iniciar sesion" path="Inicio | Iniciar sesion" />
            <TextInput
                value={email}
                onChangeText={(text) => setEmail(text)}
                placeholder="Correo electrónico"
                style={styles.input}
            />
            <TextInput
                value={password}
                onChangeText={(text) => setPassword(text)}
                placeholder="Contraseña"
                secureTextEntry={true}
                style={styles.input}
            />
            <Button title="Iniciar sesión" onPress={proceedLogin} />
            <TouchableOpacity onPress={() => navigation.navigate('register')}>
                <Text style={styles.link}>
                    ¿No tienes una cuenta? Por favor regístrese.
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = {
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        height: 40,
        width: '90%',
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    link: {
        textAlign: 'center',
        marginTop: 20,
        color: 'blue',
        textDecorationLine: 'underline',
    },
};

