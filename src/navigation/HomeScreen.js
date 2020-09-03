import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import {NavigationService} from '../../src/common';


class HomeScreen extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="dark-content" />
                <View>
                    <Text style={{fontSize:25}}>Home Screen</Text>
                </View>
                <TouchableOpacity
                        onPress={()=> NavigationService.back()}
                        style={{
                            justifyContent: 'flex-end',
                            backgroundColor: 'rgb(87,174,198)',
                            padding: 20,
                            marginTop: 20,
                            borderRadius: 30
                        }}>
                        <Text style={{fontSize: 20, textAlign: 'center', color: 'white'}}>Back</Text>
                    </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
    }
})

export default HomeScreen;  
