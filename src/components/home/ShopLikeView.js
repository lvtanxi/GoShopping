import React, {Component} from 'react'
import {
    StyleSheet,
    Text,
    FlatList,
    Image,
    TouchableOpacity,
    View
} from 'react-native';

import CommonCell from './../common/CommonCell'
import HttpUtils from './../common/HttpUtils'
import Api from './../common/Api'
export default class ShopLikeView extends Component {
    state = {
        datas: [],
        selected: (new Map(): Map<string, boolean>)
    };
    _keyExtractor = (item, index) => item.id;

    render() {
        return (
            <View style={styles.container}>
                <CommonCell leftSource="cnxh" title="猜你喜欢"/>
                <FlatList
                    extraData={this.state}
                    data={this.state.datas}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}/>
            </View>
        )
    }

    _renderItem = ({item}) => (
        <LikeItem
            id={item.id}
            selected={!!this.state.selected.get(item.id)}
            item={item}
            onPressBack={this.props.onPressBack}/>
    );

    componentDidMount() {
        this.loadDataFormNet()
    }

    loadDataFormNet() {
        HttpUtils.getFatch(Api.recommend)
            .then((json) => {
                this.setState({
                    datas: json.data
                })

            }, (error) => {
                alert(error)
            })
    }

}

class LikeItem extends React.PureComponent {
    defaultProps = {
        item: {
            imgurl: "",
            brandname: "",
            title: "",
            solds: "",
            value: "",
            id: ""
        },
        onPressBack: null
    };

    render() {
        return (
            <TouchableOpacity onPress={() => this.props.onPressBack(this.props.item.id)}>
                <View style={styles.listViewStyle}>
                    <Image source={{uri: this.dealWithImgUrl(this.props.item.imgurl)}}
                           style={styles.imageStyle}/>
                    <View style={styles.rightView}>
                        <View style={styles.rightTopView}>
                            <Text style={styles.text}>{this.props.item.brandname}</Text>
                            <Text style={styles.text}>{this.props.item.value}</Text>
                        </View>
                        <Text style={{fontSize: 12}}>{this.props.item.title}</Text>
                        <View style={styles.rightBottomView}>
                            <Text style={{color: "#FF6100"}}>￥{this.props.item.price}</Text>
                            <Text>已售{this.props.item.solds}</Text>
                        </View>

                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    dealWithImgUrl(url) {
        if (url.search("w.h") === -1)
            return url;
        return url.replace("w.h", "120.90")
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10
    },
    imageStyle: {
        width: 120,
        height: 90,
        borderRadius: 3
    },
    listViewStyle: {
        backgroundColor: "#FFF",
        padding: 10,
        borderBottomColor: "#e8e8e8",
        borderBottomWidth: 0.5,
        flexDirection: "row",
        alignItems: "center"
    },
    rightView: {
        marginLeft: 8,
        flex: 1
    },
    rightTopView: {
        flexDirection: "row",
        marginBottom: 7,
        justifyContent: "space-between"
    },
    rightBottomView: {
        flexDirection: "row",
        marginTop: 7,
        justifyContent: "space-between"
    },
    text: {
        color: "#333333"
    }
});