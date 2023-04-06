import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import LandingPage from './components/LandingPage';
import { colors } from './utils/colors';

export default function App() {
    return (
        <View style={styles.container}>
            <LandingPage />
            <StatusBar style="light" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundColor,
    },
});
