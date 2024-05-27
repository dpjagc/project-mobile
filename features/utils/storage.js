import AsyncStorage from "@react-native-async-storage/async-storage";

export const getStorage = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
        return window.localStorage;
    }
    return AsyncStorage;
}