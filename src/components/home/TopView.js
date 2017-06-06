import React, {Component} from 'react'
import {
    StyleSheet,
    ScrollView,
    Text,
    Dimensions,
    View
} from 'react-native';
import Api from './../common/Api'
let {width} = Dimensions.get("window");

import GridView from './GridView'
export default class TopView extends Component {
    state = {
        activePage: 0
    };

    render() {
        let that = this;
        return (
            <View style={styles.container}>
                {/*内容部分*/}
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd={this._onMomentumScrollEnd.bind(this)}
                    pagingEnabled={true}>
                    {
                        Api.data.map(function (item, index) {
                            return  <GridView datas={item} key={index}/>
                        })
                    }

                </ScrollView>
                {/*圆点部分*/}
                <View style={styles.indicatorView}>
                    {
                        Api.data.map(function (item, index) {
                            return <Text key={index} style={{
                                fontSize: 25,
                                color: index === that.state.activePage ? "#EF5100" : "gray"
                            }}>&bull;</Text>
                        })
                    }
                </View>
            </View>
        )
    }

    //当一帧滚动结束后调用
    _onMomentumScrollEnd(e) {
        let currentPage = Math.floor(e.nativeEvent.contentOffset.x / width);
        this.setState({
            activePage: currentPage
        })
    }


}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF"
    },
    indicatorView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    }
});