import React from 'react';
import { View } from 'react-native';
import { CartItem } from './CartItem';
import { useSelector } from 'react-redux';

export const CartItemsList = () => {
  const { cartItems } = useSelector(state => state.cart);

  return (
    <View>
      {cartItems.map((item) => (
        <CartItem key={item.id} cartItem={item} />
      ))}
    </View>
  );
};

