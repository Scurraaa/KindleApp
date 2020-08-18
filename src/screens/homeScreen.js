import React, {useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DocumentReader from '../components/DocumentReader';


const homeScreen = ({ navigation }) => {
    return (
        <>
        <View style={styles.mainContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}> KINDLE LIKE APP </Text>
            </View>
            <View style={styles.buttonContainer}>
                <DocumentReader BookFile={(book_content)=>navigation.navigate('BookReader', {data: book_content})}></DocumentReader> 
            </View>
        </View>
        </>
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
    titleContainer: {
        alignItems: 'center',
        marginTop: 40,
    },
    titleText: {
        fontFamily: 'monospace',
        fontWeight: "bold",
        fontSize: 20,
    },
    buttonContainer: {
        marginTop: 15
    }
})


export default homeScreen;