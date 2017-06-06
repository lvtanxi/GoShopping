import React, {Component} from 'react'
import {
    StyleSheet,
    TouchableNativeFeedback,
    Image,
    Text,
    View
} from 'react-native';
export default class InnerViewCell extends Component {
    defaultProps = {
        icon: -1,
        title: "",
        num: "",
        textStyle: null,
    };

    render() {
        return (
            <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()}
                                     onPress={() => alert("点击")}>
                <View style={styles.innerView}>
                    {
                        this.props.num !== undefined ? <Text
                            style={ this.props.textStyle === null ? {fontSize: 12} : this.props.textStyle}>123123123</Text> :
                            <Image source={{uri: this.props.icon}} style={styles.icon}/>
                    }
                    <Text
                        style={ this.props.textStyle === undefined ? {fontSize: 12} : this.props.textStyle}>{this.props.title}</Text>
                </View>
            </TouchableNativeFeedback>
        )
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 20
    },
    innerView: {
        flex: 1,
        alignItems: "center",
        paddingTop: 15,
        paddingBottom: 15,
        borderLeftWidth:0.3,
        borderLeftColor:"#fff"
    }
});