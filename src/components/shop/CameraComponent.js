import React, {Component} from 'react'
import {
    StyleSheet,
    Text,
    View
} from 'react-native';


export default class CameraComponent extends Component {
    static navigationOptions={
        title:"Camera"
    };
    state = {
        torchMode: 'off',
        cameraType: 'back',
    };
    render() {
        return (
            <Text>asd</Text>
        )
    }
}
const styles = StyleSheet.create({});