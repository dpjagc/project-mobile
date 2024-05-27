import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FormInput } from "./FormInput";
import { FormSelect } from "./FormSelect";

export const Filters = ({ filter, handleReset, handleCategoryChange, handleSearchChange, fetchData }) => {
    const [selectCategoryList, setSelectCategoryList] = useState([
        "all",
        "laptos",
        "accesories",
        "desktops"
    ]);

    const handleFilterSubmit = () => {
        fetchData();
    };

    return (
        <View style={styles.container}>
            <FormInput
                label="Buscar producto"
                name="search"
                size="inputSm"
                defaultValue={filter.search}
                onChange={(e) => {
                    handleSearchChange(e.nativeEvent.text);
                }}
            />
            <FormSelect
                label="Selecciona una categoría"
                name="category"
                list={selectCategoryList}
                size="selectSm"
                defaultValue={filter.category}
                onChange={(e) => {
                    handleCategoryChange(e);
                }}
            />
            <TouchableOpacity onPress={handleFilterSubmit} style={styles.button}>
                <Text style={styles.buttonText}>Buscar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleReset} style={styles.button}>
                <Text style={styles.buttonText}>Reiniciar</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E5E7EB',
        padding: 16,
        borderRadius: 8,
        marginBottom: 16,
    },
    button: {
        backgroundColor: '#007AFF',
        borderRadius: 8,
        paddingVertical: 12,
        alignItems: 'center',
        marginBottom: 8,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

