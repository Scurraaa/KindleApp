import React from 'react';
import {View, Text, ScrollView} from 'react-native';

import DocumentViewer from '../components/DocumentViewer';


const readScreen = ({navigation}) => {

    const data = navigation.getParam('data')

    return ( 
        <DocumentViewer book={data}></DocumentViewer>
    );

}

readScreen.navigationOptions = ({navigation}) => {
    const incoming_data = navigation.getParam('data')
    return {
        headerTitle: incoming_data.slice(0,18)
    }
}

export default readScreen;