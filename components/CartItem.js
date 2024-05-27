import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { removeItem, updateCartAmount } from '../features/cart/cartSlice';

export const CartItem = ({ cartItem }) => {
  const { id, title, price, image, amount } = cartItem;
  const dispatch = useDispatch();

  return (
    <View style={styles.card}>
      <View style={styles.container}>
        <Image
          source={{ uri: `../assets${image}` }}
          style={styles.image}
        />
        <View style={styles.details}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Cantidad</Text>
            <TextInput
              style={styles.input}
              value={String(amount)}
              onChangeText={(value) => dispatch(updateCartAmount({ id: id, amount: value }))}
            />
          </View>
          <TouchableOpacity onPress={() => dispatch(removeItem(id))} style={styles.deleteButton}>
            <Text style={styles.deleteButtonText}>Eliminar</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.price}>Total: ${((price * amount ?? 0)).toFixed(2)}</Text>
    </View>
  );
};

const styles = {
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    padding: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 16,
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#2D3748',
  },
  inputContainer: {
    marginBottom: 6,
  },
  label: {
    fontSize: 14,
    color: '#4A5568',
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 4,
    paddingVertical: 6,
    paddingHorizontal: 10,
    fontSize: 14,
    color: '#1A202C',
  },
  deleteButton: {
    backgroundColor: '#E53E3E',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  deleteButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 'auto',
    color: '#2D3748',
  },
};

