import React, {Component} from 'react'
import {
    StyleSheet,
    Text,
    ScrollView,
    TouchableOpacity,
    Image,
    View
} from 'react-native';
import CommonCell from './../common/CommonCell'
import Api from './../common/Api'
export default class ShopCenterView extends Component {
    defaultProps={
        popToHome:null
    };
    render() {
        let that=this;
        return (
            <View>
                <CommonCell leftSource="gwzx" title="购物中心"
                            rightTitle="全部4家"/>
                <ScrollView style={styles.scrollviewStyle}
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}>
                    {
                        Api.home.shopCenter.map(function (item, index) {
                            return <ShopCenterItem shopImage={item.shopImage}
                                                   shopSale={item.shopSale}
                                                   shopName={item.shopName} key={index}
                                                   popTopShopCenter={that.props.popToHome}/>
                        })
                    }
                </ScrollView>
            </View>
        )
    }
}

class ShopCenterItem extends Component {
    defaultProps = {
        shopImage: "",
        shopSale: "",
        shopName: "",
        popTopShopCenter: null
    };

    render() {

        return (
            <TouchableOpacity onPress={this.clickItem.bind(this)}>
                <View style={styles.itemViewStyle}>
                    <Image source={{uri: this.props.shopImage}} style={styles.imageStyle}/>
                    <Text style={styles.shopSaleStyle}>{this.props.shopSale}</Text>
                    <Text style={styles.shopNameStyle}>{this.props.shopName}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    clickItem() {
        if (this.props.popTopShopCenter) {
            let url = "http://meishi.meituan.com/i/deal/37486027?stid=838566177688137728_c2_eff5f84dfd8aac1ac8a5c9461e5a75fce&cevent=imt%2Fhomepage%2Fguess";
            this.props.popTopShopCenter(url)
        }
    }
}

const styles = StyleSheet.create({
    imageStyle: {
        width: 120,
        height: 120,
        borderRadius: 5
    },
    scrollviewStyle: {
        flexDirection: "row",
        backgroundColor: "#FFF",
        padding: 10
    },
    itemViewStyle: {
        margin: 5
    },
    shopSaleStyle: {
        position: "absolute",
        left: 0,
        bottom: 30,
        padding: 3,
        backgroundColor: "#F4B258",
        borderRadius: 2,
        color: "#fff"
    },
    shopNameStyle: {
        textAlign: "center",
        color: "#333333",
        marginTop: 5
    }
});