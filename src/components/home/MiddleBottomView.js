import React, {Component} from 'react'
import {
    StyleSheet,
    View
} from 'react-native';

import MiddleCommonView from './MiddleCommonView'
import Api from './../common/Api'

export default class MiddleBottomView extends Component {
    render() {
        let top=Api.home.middleTop;
        let bottom=Api.home.middleBottom;
        return (
            <View>
                <MiddleCommonView  title={top.title}
                                  subTilte={top.subTitle}
                                  rightIcon={top.rightImage}
                                  titleColor={top.titleColor}/>
                <View style={styles.bottomView}>
                    {
                        bottom.map(function (item,index) {
                            return <MiddleCommonView key={index} title={item.title}
                                                     subTilte={item.subTitle}
                                                     tplurl={item.tplurl}
                                                     rightIcon={item.rightImage}
                                                     titleColor={item.titleColor}/>
                        })
                    }
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    bottomView:{
        flexDirection:"row",
        flexWrap:"wrap"
    }
});