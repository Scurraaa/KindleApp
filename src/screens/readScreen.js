import React from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';

const readScreen = ({navigation}) => {
    
    const contents = navigation.getParam('data')

    return ( 
        <ScrollView contentContainerStyle={styles.mainContainer}>
        <Text style={styles.titleText}>{contents.slice(0,18)}</Text>
        <Text style={styles.documentText}>
            {contents.slice(18,contents.length)}
        </Text>
    </ScrollView>
    );

}

readScreen.navigationOptions = ({navigation}) => {
    const incoming_data = navigation.getParam('data')
    return {
        headerTitle: incoming_data.slice(0, 18)
    }
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

export default readScreen;