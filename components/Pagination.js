import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export const Pagination = ({ page, handlePageChange, productsLength }) => {
    return (
        <View style={styles.pagination}>
            <View style={styles.join}>
                <Button
                    title="<"
                    onPress={() => {
                        if (page === 1) {
                            return;
                        }
                        handlePageChange(page - 1);
                    }}
                />
                <Text style={styles.pageNumber}>Página {page}</Text>
                <Button
                    title=">"
                    onPress={() => {
                        if (productsLength < 10) {
                            return;
                        }
                        handlePageChange(page + 1);
                    }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    pagination: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
    },
    join: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    pageNumber: {
        fontSize: 20,
        marginHorizontal: 10,
    },
});
