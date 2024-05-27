import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Pagination, ProductElement, Filters, SectionTitle } from "../components";
import axios from "axios";
import { API_URL } from "../constant";

export const Shop = ({ route }) => {
    const [filter, setFilter] = useState({ page: 1, category: "all", search: "", productsLength: 0 });
    const [productsData, setProductsData] = useState([]);

    const handlePageChange = (pageNumber) => {
        setFilter((prevFilter) => ({ ...prevFilter, page: pageNumber }));
    };

    const handleCategoryChange = (category) => {
        setFilter((prevFilter) => ({ ...prevFilter, category }));
    };

    const handleSearchChange = (search) => {
        setFilter((prevFilter) => ({ ...prevFilter, search }));
    };

    const handleReset = () => {
        setFilter({ page: 1, category: "all", search: "", productsLength: 0 });
        fetchData();
    };

    const handleProductsLength = (productsLength) => {
        setFilter((prevFilter) => ({ ...prevFilter, productsLength }));
    };

    const fetchData = async () => {
        try {
            const parameter = `?_page=${filter.page}&_limit=10${filter.category !== 'all' ? `&category=${filter.category}` : ""}${filter.search ? `&q=${encodeURIComponent(filter.search)}` : ""}`;
            const response = await axios.get(`${API_URL}/products${parameter}`);
            setProductsData(response.data);
            handleProductsLength(response.data.length);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <View style={styles.container}>
            <SectionTitle title="Comprar" path="Inicio | Comprar" />
            <View style={styles.content}>
                <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
                    <Filters
                        filter={filter}
                        handleReset={handleReset}
                        handleCategoryChange={handleCategoryChange}
                        handleSearchChange={handleSearchChange}
                        fetchData={fetchData}
                    />
                    {productsData.length === 0 && (
                        <Text style={styles.noProductsText}>
                            No se encontraron productos para este filtro.
                        </Text>
                    )}
                    <View style={styles.productsContainer}>
                        {productsData.map((product) => (
                            <ProductElement
                                key={product.id}
                                id={product.id}
                                title={product.name}
                                image={product.imageUrl}
                                price={product.price}
                            />
                        ))}
                    </View>
                </ScrollView>
            </View>
            <Pagination page={filter.page} productsLength={filter.productsLength} handlePageChange={handlePageChange} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
    },
    scrollView: {
        flex: 1,
    },
    scrollViewContent: {
        flexGrow: 1,
        paddingHorizontal: 16,
        paddingTop: 20,
        paddingBottom: 80, // Agrega un padding inferior para que el contenido no se superponga con el paginador
    },
    noProductsText: {
        textAlign: 'center',
        fontSize: 20,
        marginTop: 20,
    },
    productsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
});
