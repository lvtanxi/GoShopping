import React from 'react'
import {TabNavigator, StackNavigator} from 'react-navigation';

import Home from './home'
import Shop from './shop'
import Mine from './mine'
import More from './more'

import ShopCenterDeatil from "./home/ShopCenterDeatil"
import CameraComponent from "./shop/CameraComponent"
import EachComponent from "./shop/EachComponent"
import JPushView from "./shop/JPushView"


const HomeTab = TabNavigator({
    Home: {screen: Home},
    Shop: {screen: Shop},
    Mine: {screen: Mine},
    More: {screen: More}
}, {
    tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
    swipeEnabled: false, // 是否可以左右滑动切换tab
    backBehavior: 'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
    tabBarOptions: {
        activeTintColor: '#EF5100', // 文字和图片选中颜色
        inactiveTintColor: '#999999', // 文字和图片未选中颜色
        backgroundColor: "red",
        showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
        indicatorStyle: {
            height: 0  // 如TabBar下面显示有一条线，可以设高度为0后隐藏
        },
        style: {
            backgroundColor: "#FFF",
            borderTopWidth: 0.3,
            borderTopColor: "#dddddd",
            height: 56
        },
        labelStyle: {
            fontSize: 12,
            padding: 0
        }
    },
});

const SimpleApp = StackNavigator({
        HomeTab: {
            screen: HomeTab
        },
        ShopCenterDeatil: {screen: ShopCenterDeatil},
        CameraComponent: {screen: CameraComponent},
        EachComponent: {screen: EachComponent},
        JPushView: {screen: JPushView}
    }, {
        mode: 'card',  // 页面切换模式, 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal效果)
        headerMode: 'float', // 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏
        gesturesEnabled: true,  // 是否可以右滑返回
        initialRouteName: "HomeTab"
    }
);

export  default  SimpleApp