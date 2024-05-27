import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { API_URL } from '../constant';
import axios from 'axios';
import { Toast } from 'toastify-react-native';
import { SectionTitle } from '../components';

export const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const navigation = useNavigation();

    const isValidate = () => {
        let isProceed = true;
        let errorMessage = '';

        if (name.length === 0) {
            isProceed = false;
            errorMessage = 'Por favor ingrese el valor en el campo de nombre de usuario';
        } else if (email.length === 0) {
            isProceed = false;
            errorMessage = 'Por favor ingrese el valor en el campo de correo electrónico';
        } else if (phone.length < 4) {
            isProceed = false;
            errorMessage = 'El teléfono debe tener más de 3 caracteres.';
        } else if (address.length < 4) {
            isProceed = false;
            errorMessage = 'La dirección debe tener más de 3 caracteres.';
        } else if (password.length < 6) {
            isProceed = false;
            errorMessage = 'Por favor ingrese una contraseña de más de 5 caracteres';
        } else if (confirmPassword.length < 6) {
            isProceed = false;
            errorMessage = 'Por favor ingrese una contraseña de confirmación de más de 5 caracteres';
        } else if (password !== confirmPassword) {
            isProceed = false;
            errorMessage = 'Las contraseñas deben coincidir';
        }

        if (!isProceed) {
            Toast.warn(errorMessage);
        }

        return isProceed;
    };

    const handleSubmit = () => {
        const regObj = {
            name,
            email,
            phone,
            address,
            password,
        };

        if (isValidate()) {
            axios
                .post(`${API_URL}/auth/register`, regObj)
                .then((res) => {
                    Toast.success('Registro exitoso');
                    navigation.navigate('login');
                })
                .catch((err) => {
                    Toast.error(`Fallido: ${err.message}`);
                });
        }
    };

    return (
        <View style={styles.container}>
            <SectionTitle title="Registro" path="Inicio | Registro" />
            <TextInput
                style={styles.input}
                placeholder="Nombre"
                value={name}
                onChangeText={setName}
            />
            <TextInput style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput style={styles.input}
                placeholder="Telefono"
                value={phone}
                onChangeText={setPhone}
            />
            <TextInput style={styles.input}
                placeholder="Direccion"
                value={address}
                onChangeText={setAddress}
            />
            <TextInput style={styles.input}
                placeholder="Contraseña"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <TextInput style={styles.input}
                placeholder="Repetir contraseña"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
            />
            <Button
                title="Registrarme"
                onPress={handleSubmit}
            />
            <TouchableOpacity onPress={() => navigation.navigate('login')}>
                <Text style={styles.link}>
                    ¿Ya tienes una cuenta? Por favor inicia sesión.
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
    },
    input: {
        height: 40,
        width: '90%',
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    link: {
        textAlign: 'center',
        marginTop: 20,
        color: 'blue',
        textDecorationLine: 'underline',
    },
});

