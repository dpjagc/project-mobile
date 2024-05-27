import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

export const CartTotals = () => {
  const { total } = useSelector((state) => state.cart);
  const tax = total / 5;
  const shipping = 50;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.cardBody}>
          <View style={styles.row}>
            <Text style={styles.label}>Subtotal</Text>
            <Text style={styles.amount}>${Math.round(total)}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Envío</Text>
            <Text style={styles.amount}>${shipping}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Impuesto 20%</Text>
            <Text style={styles.amount}>${Math.round(tax)}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.totalLabel}>Total del pedido</Text>
            <Text style={styles.totalAmount}>${Math.round(total + shipping + tax)}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = {
  container: {
    padding: 10,
  },
  card: {
    backgroundColor: '#6B7280',
    borderRadius: 8,
    padding: 10,
  },
  cardBody: {
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  label: {
    fontSize: 14,
    color: '#1F2937',
  },
  amount: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  totalAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1F2937',
  },
};

