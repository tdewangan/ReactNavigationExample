import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome'
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>Hello, Navigation!</Text>
                <Button
                    title="Go to profile"
                    onPress={() =>
                        navigate('Profile', { name: 'Jane' })
                    }
                />
            </View>
        );
    }
}

export default HomeScreen;