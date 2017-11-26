import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class ProfileScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: `Hello ${navigation.state.params.name}`,
    });
    render() {
        const { navigate } = this.props.navigation;
        const { params } = this.props.navigation.state;
        return (
            <View>
                <Text>Greetings, {params.name}</Text>
                <Button
                    title="Home"
                    onPress={() =>
                        navigate('Home')
                    }
                />
            </View>
        );
    }
}

export default ProfileScreen;