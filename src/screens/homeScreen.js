import React, {useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DocumentReader from '../components/DocumentReader';


const homeScreen = ({ navigation }) => {
    return (
        <View style={styles.mainContainer}>
                <DocumentReader BookFile={(book_content)=>navigation.navigate('BookReader', {data: book_content})}></DocumentReader> 
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
    }
})


export default homeScreen;