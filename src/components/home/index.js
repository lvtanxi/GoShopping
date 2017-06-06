import React, {Component} from 'react'
import {
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    View
} from 'react-native';

import TopView from './TopView'
import MiddleView from './MiddleView'
import MiddleBottomView from './MiddleBottomView'
import ShopCenterView from './ShopCenterView'
import ShopLikeView from './ShopLikeView'
import NavigationItem from './../common/NavigationItem'
import {Paragraph} from './../common/Text'
let {width}=Dimensions.get('window');
export default class index extends Component {
    static navigationOptions = ({ navigation }) => ({
        tabBarLabel: '首页',
        tabBarIcon: ({tintColor}) => (
            <Image
                source={{uri: "icon_tabbar_homepage"}}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
        headerTitle: (
            <TouchableOpacity style={styles.searchBar}>
                <Image source={{uri:"search_icon"}} style={styles.searchIcon} />
                <Paragraph>一点点</Paragraph>
            </TouchableOpacity>
        ),
        headerRight: (
            <NavigationItem
                icon="icon_homepage_message"/>
        ),
        headerLeft: (
            <NavigationItem
                title='福州'
                titleStyle={{ color: 'white' }}/>
        ),
        headerStyle: { backgroundColor: "#FF6100" },
    });

    render() {
        return (
            <View style={styles.container}>
                {/*主要内容*/}
                <ScrollView>
                    {/*头部View*/}
                    <TopView/>
                    {/*中间内容*/}
                    <MiddleView/>
                    <MiddleBottomView/>
                    {/*购物中心*/}
                    <ShopCenterView popToHome={this.popToHome.bind(this)}/>
                    {/*猜你喜欢*/}
                    <ShopLikeView onPressBack={this.onPressBack.bind(this)}/>
                </ScrollView>
            </View>
        )
    }

    popToHome(url) {
        this.gotoNetPage("ShopCenterDeatil", {url: url})
    }

    onPressBack(id) {

    }

    gotoNetPage(name, param = {}) {
        this.props.navigation.navigate(name, param)
    }

    //处理网络请求什么的
    componentDidMount() {
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
    margin: {
        marginRight: 5
    },
    container: {
        flex: 1,
    },
    topInputStyle: {
        flex: 1,
        height: 40,
        backgroundColor: 'white',
        borderRadius: 17,
        paddingLeft: 10,
        marginLeft: 5,
        marginRight: 5
    },
    rightNavViewStyle: {
        flexDirection: "row",
        alignItems: "center"
    },
    searchBar: {
        width: width * 0.7,
        height: 30,
        borderRadius: 19,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        alignSelf: 'center',
    },
    searchIcon: {
        width: 20,
        height: 20,
        margin: 5,
    }
});