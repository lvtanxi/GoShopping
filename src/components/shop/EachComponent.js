import React, {Component} from 'react'
import {
    StyleSheet,
    ScrollView,
    Button,
    DeviceEventEmitter,
    Text,
    NativeModules,
    View
} from 'react-native';
import KenBurnsView from './KenBurnsView'
export default class EachComponent extends Component {
    static navigationOptions = {
        title: "与Android原生交互"
    };

    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    showsVerticalScrollIndicator={false}>
                    <View style={styles.btn}>
                        <Button title="调用原生方法" onPress={this.call_button}/>
                    </View>
                    <View style={styles.btn}>
                        <Button title="启动原生界面" onPress={this.start_button}/>
                    </View>
                    <View style={styles.btn}>
                        <Button title="原生界面回调Rn" onPress={this.back_button}/>
                    </View>
                    <View style={styles.btn}>
                        <Button title="Callback形式回调" onPress={this.callback_button}/>
                    </View>
                    <View style={styles.btn}>
                        <Button title="Promise形式回调" onPress={this.promise_button}/>
                    </View>
                    <View style={styles.btn}>
                        <Text>常量共享: { NativeModules.MyNativeModule.URL}</Text>
                    </View>
                    <View style={styles.btn}>
                        <Button title="JPUSH" onPress={()=>this.props.navigation.navigate("JPushView")}/>
                    </View>
                    <View style={styles.btn}>
                        <Text>原生组件</Text>
                       <KenBurnsView style={{width:150,height:150}}/>
                    </View>
                </ScrollView>
            </View>
        )
    }

    componentDidMount() {
        //这里要注意以下不能使用alert
        DeviceEventEmitter.addListener('AndroidToRNMessage', (msg) => {
            console.log(msg);
        });
    }





        call_button() {
        NativeModules.MyNativeModule.rnCallNative("吕檀溪-RN调用原生模块的方法")
    }

    start_button() {
        NativeModules.MyNativeModule.startAndroidNative()
    }

    back_button() {
        NativeModules.MyNativeModule.returnMsgNative()
    }

    callback_button() {
        NativeModules.MyNativeModule.measureLayout(
            (x, y, width, height) => {
                console.log(x + "坐标" + y + "坐标" + width + "宽" + height + "高");
            },
            (error) => {
                console.log(error);
            }
        )
    }

    promise_button() {
        NativeModules.MyNativeModule.promiseButton("这是promise测试")
            .then(msg => console.log(msg))
            .catch(error => console.log(error))
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    btn: {
        margin: 10
    }
});