import React, {Component} from 'react'
import {
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    Dimensions,
    View
} from 'react-native';
let {width} = Dimensions.get("window");
export default class MiddleCommonView extends Component {
    defaultProps = {
        title: "",
        subTilte: "",
        rightIcon: "",
        titleColor: "",
        tplurl:""
    };

    render() {
        return (
            <TouchableOpacity onPress={()=>alert(this.props.title)}>
                <View style={styles.container}>
                    <View>
                        <Text style={{
                            color: this.props.titleColor,
                            fontSize: 14,
                            fontWeight: "bold"
                        }}>{this.props.title}</Text>
                        <Text style={styles.subTitleStyle}>{this.props.subTilte}</Text>
                    </View>
                    <Image source={{uri: this.props.rightIcon}} style={styles.image}/>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 69,
        flexDirection: "row",
        width:width*0.5-1,
        alignItems: "center",
        justifyContent: "space-around",
        marginBottom: 1,
        marginRight:1,
        backgroundColor: "#FFF"
    },
    image: {
        width: 64,
        height: 43,
        resizeMode:"contain"
    },
    subTitleStyle: {
        color: "gray",
        fontSize: 12,
        marginTop: 5,
        width:100
    }
});