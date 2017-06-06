import React, {Component} from 'react'
import {
    StyleSheet,
    WebView,
    View
} from 'react-native';
export default class ShopCenterDeatil extends Component {
    state = {
        scalesPageToFit: true
    };
    render() {
        return <WebView
            automaticallyAdjustContentInsets={true}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            startInLoadingState={true}
            scalesPageToFit={this.state.scalesPageToFit}
            source={{uri: this.props.navigation.state.params.url}}/>
    }
}