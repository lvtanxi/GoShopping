import React, {Component} from 'react'
import {
    StyleSheet,
    View
} from 'react-native';

import InnerViewCell from './../common/InnerViewCell'
export default class ShopCell extends Component {

    defaultProps = {
        items: [],
        textStyle: null,
        bgColor:"#FFF"
    };


    render() {
        let that = this.props;
        return (
            <View style={[styles.container,{backgroundColor:this.props.bgColor}]}>
                {
                    this.props.items.map(function (item, index) {
                        return <InnerViewCell icon={item.icon} title={item.title} key={index}
                                              num={item.num} textStyle={that.textStyle}/>
                    })
                }
            </View>
        )
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor:"#FFF"
    },
});