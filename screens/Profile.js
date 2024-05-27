import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { SectionTitle } from '../components';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { API_URL } from '../constant';
import { Toast } from 'toastify-react-native';
import { useAsyncStorage } from '../hooks/useAsyncStorage';


export const Profile = () => {
    const { storedValue: userId, isLoading } = useAsyncStorage('userId');
    const [userData, setUserData] = useState({});
    const loginState = useSelector((state) => state.auth.isLoggedIn);
    const [userFormData, setUserFormData] = useState({
        id: '',
        name: '',
        email: '',
        phone: '',
        adress: '',
        password: '',
    });
    const navigation = useNavigation();

    const getUserData = async () => {
        if (!userId || isLoading) return; // No ejecutar si no hay userId o si está cargando
        try {
            const response = await axios.get(`${API_URL}/auth/user/${userId}`);
            const data = response.data;
            setUserFormData({
                ...userFormData,
                name: data.name,
                email: data.email,
                phone: data.phone,
                adress: data.adress,
                password: data.password,
            });
        } catch (error) {
            console.error('Error al obtener los datos del usuario:', error);
            Toast.error('Error al obtener los datos del usuario');
        }
    };

    useEffect(() => {
        getUserData(); // Llamar a la función al cargar el componente
    }, [userId, isLoading]); // Ejecutar cuando userId o isLoading cambien

    const updateProfile = async () => {
        try {
            await axios.put(`${API_URL}/auth/user/${userId}`, {
                name: userFormData.name,
                email: userFormData.email,
                phone: userFormData.phone,
                adress: userFormData.adress,
                password: userFormData.password,
            });
            Toast.success('Tu perfil se actualizó correctamente');
        } catch (error) {
            console.error('Error al actualizar el perfil:', error);
            Toast.error('Error al actualizar el perfil');
        }
    };

    useEffect(() => {
        if (!loginState) {
            Toast.error('Debes iniciar sesión para acceder a esta página');
            navigation.navigate('home');
        }
    }, [loginState]);

    return (
        <View style={styles.container}>
            <SectionTitle title="Perfil del usuario" path="Inicio | Perfil del usuario" />
            <View style={styles.formContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Tu nombre"
                    value={userFormData.name}
                    onChangeText={(text) => setUserFormData({ ...userFormData, name: text })}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Tu email"
                    value={userFormData.email}
                    onChangeText={(text) => setUserFormData({ ...userFormData, email: text })}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Tu teléfono"
                    value={userFormData.phone}
                    onChangeText={(text) => setUserFormData({ ...userFormData, phone: text })}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Tu dirección"
                    value={userFormData.adress}
                    onChangeText={(text) => setUserFormData({ ...userFormData, adress: text })}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Tu contraseña"
                    secureTextEntry={true}
                    value={userFormData.password}
                    onChangeText={(text) => setUserFormData({ ...userFormData, password: text })}
                />
                <Button title="Actualizar perfil" onPress={updateProfile} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
    },
    formContainer: {
        paddingTop: 10,
    },
    input: {
        height: 40,
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
});

