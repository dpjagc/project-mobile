import { StyleSheet, Text, View } from "react-native";
import { Footer, Header } from "../components";
import { Landing } from "./Landing";

export const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Landing />
            <Footer />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});