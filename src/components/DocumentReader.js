import React, {useState} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Platform } from 'react-native';
import * as DP from 'expo-document-picker';
import * as FS from 'expo-file-system';

const DocumentReader = ({BookFile}) => {
    const picker = () => {
        try{
            DP.getDocumentAsync({ type: 'text/plain'}).then(
                (file) => FS.readAsStringAsync(file.uri).then(
                    (contents) => BookFile(contents)
                )
            )
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <View>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}> KINDLE LIKE APP </Text>
            </View>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => picker()}>
                <Text style={styles.buttonText}>Tap here to read a Book</Text>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
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


export default DocumentReader