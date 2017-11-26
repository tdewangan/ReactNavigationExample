import React from 'react';
import { Text, View, Button } from 'react-native';

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome -- Home Screen'
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>Welcome to application</Text>
                <Button
                    title="Go to profile"
                    onPress={() =>
                        navigate('Profile', { name: 'Jane' })
                    }
                />
                <Button
                    title="Go to Chat"
                    onPress={() =>
                        navigate('Chat', { name: 'Jane' })
                    }
                />
            </View>
        );
    }
}

export default HomeScreen;