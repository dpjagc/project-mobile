import { createDrawerNavigator } from '@react-navigation/drawer';
import { useSelector } from 'react-redux';
import { useNavigation } from "@react-navigation/native";
import { About, Cart, Contact, Home, Login, OrderHistory, Profile, Register, Shop, ThankYou, SingleProduct } from '../screens';
import { useWindowDimensions } from 'react-native';
import { Header } from './Header';

const Drawer = createDrawerNavigator();


export const MyDrawer = () => {
    const navigation = useNavigation();
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const dimensions = useWindowDimensions();
    const isLargeScreen = dimensions.width >= 768;

    return (
        <Drawer.Navigator initialRouteName='Inicio' screenOptions={{ header: () => <Header /> }}>
            <Drawer.Screen name="Inicio" component={Home} options={{ headerShown: true }} />
            <Drawer.Screen name="Comprar" component={Shop} />
            <Drawer.Screen name="Sobre nosotros" component={About} />
            <Drawer.Screen name="Contactenos" component={Contact} />
            <Drawer.Screen name="Iniciar sesion" component={Login} options={{ drawerItemStyle: { display: isLoggedIn ? 'none' : 'flex' } }} />
            <Drawer.Screen name="Registrarme" component={Register} options={{ drawerItemStyle: { display: isLoggedIn ? 'none' : 'flex' } }} />

            <Drawer.Screen name="home" component={Home} options={{ drawerItemStyle: { display: 'none' } }} />
            <Drawer.Screen name="user-profile" component={Profile} options={{ drawerItemStyle: { display: 'none' } }} />
            <Drawer.Screen name="shop" component={Shop} options={{ drawerItemStyle: { display: 'none' } }} />
            <Drawer.Screen name="shop/product" component={SingleProduct} options={{ drawerItemStyle: { display: 'none' } }} />
            <Drawer.Screen name="about" component={About} options={{ drawerItemStyle: { display: 'none' } }} />
            <Drawer.Screen name="login" component={Login} options={{ drawerItemStyle: { display: 'none' } }} />
            <Drawer.Screen name="register" component={Register} options={{ drawerItemStyle: { display: 'none' } }} />
            <Drawer.Screen name="contact" component={Contact} options={{ drawerItemStyle: { display: 'none' } }} />
            <Drawer.Screen name="about-us" component={About} options={{ drawerItemStyle: { display: 'none' } }} />
            <Drawer.Screen name="cart" component={Cart} options={{ drawerItemStyle: { display: 'none' } }} />
            <Drawer.Screen name="thank-you" component={ThankYou} options={{ drawerItemStyle: { display: 'none' } }} />
            <Drawer.Screen name="order-history" component={OrderHistory} options={{ drawerItemStyle: { display: 'none' } }} />
        </Drawer.Navigator>
    );
}