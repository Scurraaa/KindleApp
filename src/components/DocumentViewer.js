import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

const DocumentViewer = (contents) => {
    return (
        <ScrollView contentContainerStyle={styles.mainContainer}>
            <Text style={styles.titleText}>{contents.book.slice(0,18)}</Text>
            <Text style={styles.documentText}>
                {contents.book.slice(18,contents.book.length)}
            </Text>
        </ScrollView>
    )
} 

const styles = StyleSheet.create({
    mainContainer: {        
        paddingVertical: 15,
        paddingHorizontal: 20,
        justifyContent: 'center',
    },

    titleText: {
        alignSelf: 'center',
        fontFamily: 'sans-serif-light',
        fontSize: 35,
        textAlign: 'justify',
        fontWeight: 'bold',

    },
    documentText: {
        fontFamily: 'sans-serif-light',
        fontSize: 30,
        textAlign: 'justify'
    }
})

export default DocumentViewer; 