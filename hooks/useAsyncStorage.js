import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useAsyncStorage = (key) => {
    const [storedValue, setStoredValue] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadStoredValue = async () => {
            try {
                const jsonValue = await AsyncStorage.getItem(key);
                if (jsonValue !== null) {
                    setStoredValue(JSON.parse(jsonValue));
                }
            } catch (error) {
                console.error('Error al cargar el valor almacenado:', error);
            } finally {
                setIsLoading(false);
            }
        };

        loadStoredValue();

        return () => setStoredValue(null);
    }, [key]);

    const saveValue = async (value) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem(key, jsonValue);
            setStoredValue(value);
        } catch (error) {
            console.error('Error al guardar el valor en AsyncStorage:', error);
        }
    };

    const removeValue = async () => {
        try {
            await AsyncStorage.removeItem(key);
            setStoredValue(null);
        } catch (error) {
            console.error('Error al eliminar el valor de AsyncStorage:', error);
        }
    };

    const clearStorage = async () => {
        try {
            await AsyncStorage.clear();
            setStoredValue(null);
        } catch (error) {
            console.error('Error al limpiar el almacenamiento local:', error);
        }
    };

    return { storedValue, isLoading, saveValue, removeValue, clearStorage }; // Devolver el estado de carga además del valor almacenado
};
