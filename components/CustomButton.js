import { Text, View, StyleSheet, Pressable } from 'react-native';
import {} from 'react-native';
import { colors } from '../utils/colors';

const CustomButton = ({ title, onPress }) => {
    return (
        <View>
            <Pressable
                onPress={onPress}
                style={({ pressed }) =>
                    pressed
                        ? [styles.buttonContainer, styles.pressed]
                        : styles.buttonContainer
                }
            >
                <Text style={styles.buttonText}>{title}</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        width: 110,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: colors.secondaryBtnColor,
        borderWidth: 2,
        borderRadius: 8,
        backgroundColor: colors.primaryBtnColor,
        elevation: 2,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.textBtnColor,
    },
    pressed: {
        opacity: 0.75,
    },
});

export default CustomButton;
