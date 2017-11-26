import React from 'react';
import { Text, View } from 'react-native';

export default class ChatScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: 'Chat Screen',
    });
    render() {
        return (
            <View>
                <Text>Chat Screen</Text>
            </View>
        );
    }   
}
