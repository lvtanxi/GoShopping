import React, {Component} from 'react'
import {
    StyleSheet,
    Image,
    Text,
    TouchableOpacity,
    Dimensions,
    NativeModules,
    FlatList
} from 'react-native';
let {width} = Dimensions.get('window');
export default class index extends Component {
    static navigationOptions = ({navigation}) => ({
        tabBarLabel: "基本",
        tabBarIcon: ({tintColor}) => (
            <Image
                source={{uri: "icon_tabbar_merchant_selected"}}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
        headerTitle: (
            <Text style={styles.titleText}>基本信息演示</Text>
        ),
        headerStyle: {backgroundColor: "#FF6100"}
    });
    state = {
        items: [
            {
                title:"react-native-camera",
                url:"CameraComponent"
            },
            {
                title:"与原生交互",
                url:"EachComponent"
            }
            ],
        selected: (new Map: Map<string, boolean>)
    };

    render() {
        return <FlatList
            data={this.state.items}
            extraData={this.state}
            keyExtractor={this._keyExtractor}
            scrollEnabled={false}
            renderItem={this._renderItem}
        />
    }

    _renderItem = ({item,index}) => (
        <IndexItem
            id={index}
            text={item.title}
            url={item.url}
            navigation={ this.props.navigation}
            selected={!!this.state.selected.get(index)}
        />
    );
    _keyExtractor = (item, index) => index;
}

class IndexItem extends React.PureComponent {
    render() {
        return (
            <TouchableOpacity style={styles.itemView} onPress={()=>this.props.navigation.navigate(this.props.url)}>
                <Text>{this.props.text}</Text>
            </TouchableOpacity>
        )
    }

}

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
    titleText: {
        fontSize: 16,
        color: "#fff",
        width: width,
        textAlign: "center"
    },
    itemView:{
        flex:1,
        height:44,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#fff",
        marginBottom:0.5
    }
});