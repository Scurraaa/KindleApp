import React, {useState} from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
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
    buttonText: {
        fontFamily: 'monospace',
        fontSize: 15,
        color: "#fff",
        alignSelf: "center",
        textTransform: "uppercase"
    },
})


export default DocumentReader