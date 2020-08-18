import React, {useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as DP from 'expo-document-picker';
import * as FS from 'expo-file-system';


const homeScreen = ({ navigation }) => {

    const [data, setData] = useState();

    const picker = () => {
        try{
            DP.getDocumentAsync({ type: 'text/plain'}).then(
                (file) => FS.readAsStringAsync(file.uri).then(
                    (contents) => setData(contents)
                )
            )
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}> KINDLE LIKE APP </Text>
            </View>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => picker()}>
                <Text style={styles.buttonText}>Tap here to read a Book</Text>
            </TouchableOpacity>
            {typeof data === 'undefined' ? console.log(data) : navigation.navigate('BookReader', {data: data}) }
        </View>
    );
}


homeScreen.navigationOptions = () => {
    return {
        header: false
    }
}


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        marginBottom: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        marginTop: 15
    },
    buttonStyle: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    titleContainer: {
        alignItems: 'center',
        marginTop: 40,
    },
    
    titleText: {
        fontFamily: Platform.OS === 'ios' ? 'Arial' : 'monospace',
        fontWeight: "bold",
        fontSize: 20,
    },

    buttonText: {
        fontFamily: Platform.OS === 'ios' ? 'Arial' : 'monospace',
        fontSize: 20,
        color: "#fff",
        alignSelf: "center",
        textTransform: "uppercase"
    },
})


export default homeScreen;