import React, {Component} from 'react'
import {
    StyleSheet,
    Image,
    Text,
    ScrollView,
    View
} from 'react-native';

import CommonCell from './../common/CommonCell'

import ShopCell from './ShopCell'

export default class index extends Component {
    static navigationOptions = {
        tabBarLabel: '我的',
        tabBarIcon: ({tintColor}) => (
            <Image
                source={{uri: "icon_tabbar_mine_selected"}}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };
    state = {
        items: [
            {
                title: "小码钱包",
                marginTop: 10,
                leftSource: "draft",
                rightTitle: "用户余额:￥100"
            },
            {title: "抵用券", leftSource: "like"},
            {title: "积分商城", marginTop: 10, leftSource: "card"},
            {
                title: "今日推荐",
                marginTop: 10,
                leftSource: "new_friend",
                rightTitle: "new"
            },
            {
                title: "我要合作",
                marginTop: 10,
                leftSource: "pay",
                rightTitle: "轻松开店，招财进宝"
            }
        ],
        items2: [
            {icon: "order1", title: "待付款"},
            {icon: "order2", title: "待使用"},
            {icon: "order3", title: "待评价"},
            {icon: "order4", title: "退款/售后"}
        ],
        items3: [
            {num: "100", title: "码哥券"},
            {num: "12", title: "评价"},
            {num: "50", title: "收藏"},
        ]
    };

    render() {
        return (
            <View style={{flex: 1}}>
                <ScrollView>
                    {this.renderHeaderView()}
                    <View>
                        <CommonCell title="我的订单"
                                    leftSource="collect"
                                    rightTitle="查看全部订单"/>
                        <ShopCell items={this.state.items2} bgColor="#FFF"/>
                    </View>

                    {
                        this.state.items.map(function (item, index) {
                            return (
                                <View style={{marginTop: item.marginTop}} key={index}>
                                    <CommonCell title={item.title}
                                                leftSource={item.leftSource}
                                                rightTitle={item.rightTitle}
                                                rightTitleStyle={index === 3 ? styles.newLeft : null}/>
                                </View>
                            )
                        })
                    }
                </ScrollView>
            </View>
        )
    }

    renderHeaderView() {
        return (
            <View style={styles.headerView}>
                <View style={styles.userMessage}>
                    <Image source={{uri: "xzh"}} style={styles.headerImage}/>
                    <Text style={styles.nameStyle}>我就是小马电商</Text>
                </View>
                <ShopCell items={this.state.items3} textStyle={styles.textStyle}
                          bgColor="rgba(255,255,255,0.1)"/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
    headerImage: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    newLeft: {
        color: "#fff",
        backgroundColor: "#EF5100",
        borderRadius: 15,
        fontSize: 12,
        paddingLeft: 3,
        paddingRight: 3,
        textAlign: "center",
        marginRight: 5
    },
    textStyle: {
        fontSize: 12,
        color: "#FFF"
    },
    headerView: {
        backgroundColor: "#EF5100",
        flex: 1
    },
    userMessage: {
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 15,
        marginTop: 20,
        marginBottom: 10
    },
    nameStyle: {
        fontSize: 16,
        color: "#FFF",
        marginLeft: 10
    },
});