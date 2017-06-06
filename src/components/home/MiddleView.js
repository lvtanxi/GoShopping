import React, {Component} from 'react'
import {
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    View
} from 'react-native';
import MiddleCommonView from './MiddleCommonView'
import Api from './../common/Api'
export default class MiddleView extends Component {
    render() {
        return (
            <View style={styles.container}>
                {this.renderLeftView()}
                {this.renderRightView()}
            </View>
        )
    }

    renderLeftView() {
        let data = Api.home.dataLeft;
        return (
        <TouchableOpacity onPress={()=>alert(data.title)} style={styles.leftView}>
            <View >
                <Image source={{uri:data.img1}} style={styles.leftImageStyle}/>
                <Image source={{uri:data.img2}} style={styles.leftImageStyle2}/>
                <Text>{data.title}</Text>
                <View style={{flexDirection:"row",marginTop:5}}>
                    <Text style={{color:"blue"}}>{data.price}</Text>
                    <Text style={{color:"orange",marginLeft:5,backgroundColor:"yellow"}}>{data.sale}</Text>
                </View>
            </View>
        </TouchableOpacity>
        )
    }

    renderRightView() {
        return (
            <View style={{flex:1}}>
                {
                    Api.home.dataRight.map(function (item, index) {
                        return <MiddleCommonView key={index} title={item.title}
                                                 subTilte={item.subTitle}
                                                 rightIcon={item.rightImage}
                                                 titleColor={item.titleColor}/>
                    })
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        flexDirection: "row"
    },
    leftImageStyle:{
        width:120,
        height:30
    },
    leftImageStyle2:{
        width:120,
        height:40
    },
    leftView:{
        flex:1,
        backgroundColor:"#FFF",
        marginRight:1,
        height:139,
        justifyContent:"center",
        alignItems:"center"
    }
});