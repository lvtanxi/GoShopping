import React, {Component} from 'react'
import {
    StyleSheet,
    Image,
    Text,
    ScrollView,
    Dimensions,
    View
} from 'react-native';
let {width}=Dimensions.get('window');
import CommonCell from './../common/CommonCell'
import NavigationItem from './../common/NavigationItem'
export default class index extends Component {
    static navigationOptions=({navigation})=>({
        tabBarLabel:"更多",
        tabBarIcon: ({tintColor}) => (
            <Image
                source={{uri:"icon_tabbar_misc_selected"}}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
        headerTitle:(
            <Text style={styles.titleText}>更多</Text>
        ),
        headerRight:(
            <NavigationItem icon="icon_mine_setting"/>
        ),
        headerStyle: { backgroundColor: "#FF6100" }
    });

    state = {
        items: [
            {title: "扫一扫", marginTop: 10},
            {title: "省流量模式", marginTop: 10},
            {title: "消息提醒"},
            {title: "邀请好友使用码团"},
            {title: "清空缓存", rightTitle: "1.99M"},
            {title: "问卷调查", marginTop: 10},
            {title: "支付帮助"},
            {title: "网络诊断"},
            {title: "关于码团"},
            {title: "我要应聘"},
            {title: "精品应用", marginTop: 10},
        ]
    };


    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    {
                        this.state.items.map(function (item, index) {
                            return (
                                <View key={index} style={{marginTop: item.marginTop}}>
                                    <CommonCell title={item.title} isSwitch={index === 1}
                                                rightTitle={item.rightTitle}/>
                                </View>
                            )
                        })
                    }
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
    imagePosition: {
        position: "absolute",//通用
        right: 10
    },
    container: {
        flex: 1
    },
    navOutStyle: {
        height: 54,
        backgroundColor: '#FF6100',
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    titleText:{
        fontSize:16,
        color:"#fff",
        width: width ,
        textAlign:"center"
    }
});