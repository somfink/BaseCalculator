import { useState } from 'react';
import { Text, StyleSheet, View, TextInput } from 'react-native';
import { colors } from '../utils/colors';
import CustomButton from './CustomButton';

const LandingPage = () => {
    const [baseConcentration, setBaseConcentration] = useState('');
    const [targetConcentration, setTargetConcentration] = useState('');
    const [targetVolume, setTargetVolume] = useState('');
    const [output, setOutput] = useState('null');

    const baseInputHandler = enteredText => {
        setBaseConcentration(enteredText);
    };

    const targetInputHandler = enteredText => {
        setTargetConcentration(enteredText);
    };

    const volumeInputHandler = enteredText => {
        setTargetVolume(enteredText);
    };

    const concentrationCalculator = () => {
        if (
            baseConcentration.trim() === '' ||
            targetVolume.trim() === '' ||
            targetVolume.trim() === ''
        ) {
            setOutput('Something went wrong! Please fill empty input!');
            setBaseConcentration('');
            setTargetConcentration('');
            setTargetVolume('');
            return;
        }

        const x = Number(baseConcentration);
        const y = Number(targetConcentration);
        
        const calcValue = x - y;

        const sum = y + calcValue;
        const percentOfBase = calcValue / sum;

        const baseValue = Math.round(targetVolume * percentOfBase);

        const currentBaseVolume = targetVolume - baseValue;

        setOutput(
            `You must add ${baseValue} ml base 0mg, and ${currentBaseVolume} ml base ${x}mg to get ${targetVolume} ml base ${targetConcentration}mg`
        );
        // setOutput(`${baseConcentration}, ${targetConcentration}, ${targetVolume}`);
        setBaseConcentration('');
        setTargetConcentration('');
        setTargetVolume('');
    };

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Text style={styles.text}>Base concentration:</Text>
                <TextInput
                    placeholder="ex. 12 mg"
                    style={styles.inputText}
                    placeholderTextColor={colors.primaryColor}
                    keyboardType="number-pad"
                    onChangeText={baseInputHandler}
                    value={baseConcentration}
                    autoCorrect={false}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.text}>Target concentration:</Text>
                <TextInput
                    placeholder="ex. 6 mg"
                    style={styles.inputText}
                    placeholderTextColor={colors.primaryColor}
                    keyboardType="number-pad"
                    onChangeText={targetInputHandler}
                    value={targetConcentration}
                    autoCorrect={false}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.text}>Target volume:</Text>
                <TextInput
                    placeholder="ex. 1000 ml"
                    style={styles.inputText}
                    placeholderTextColor={colors.primaryColor}
                    keyboardType="number-pad"
                    onChangeText={volumeInputHandler}
                    value={targetVolume}
                    autoCorrect={false}
                />
            </View>
            <View style={styles.btnContainer}>
                <CustomButton
                    title="Calculate"
                    onPress={concentrationCalculator}
                />
            </View>
            <View style={styles.outputContainer}>
                <Text style={styles.outputText}>{output}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputContainer: {
        marginTop: 32,
        marginHorizontal: 16,
    },
    outputContainer: {
        marginTop: 32,
        marginHorizontal: 16,
        alignItems: 'center',
    },
    btnContainer: {
        marginTop: 32,
        marginHorizontal: 16,
        alignItems: 'flex-end',
    },
    text: {
        color: colors.primaryColor,
        fontSize: 20,
    },
    inputText: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginTop: 8,
        borderWidth: 2,
        borderRadius: 8,
        borderColor: colors.primaryColor,
        color: colors.primaryColor,
    },
    outputText: {
        color: colors.primaryColor,
        fontSize: 20,
    },
});

export default LandingPage;
