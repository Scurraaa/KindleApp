import React from 'react';
import { ScrollView, StyleSheet, Text, Platform } from 'react-native';

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
        fontFamily: Platform.OS === 'ios' ? 'Times New Roman' : 'sans-serif-light',
        fontSize: 35,
        textAlign: 'justify',
        fontWeight: 'bold',

    },
    documentText: {
        fontFamily: Platform.OS === 'ios' ? 'Times New Roman' : 'sans-serif-light',
        fontSize: 25,
        textAlign: 'justify'
    }
})

export default DocumentViewer; 