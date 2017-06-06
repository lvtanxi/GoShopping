import React, {Component} from 'react'
import {
    StyleSheet,
    TouchableNativeFeedback,
    Text,
    Image,
    Switch,
    View
} from 'react-native';
export default class CommonCell extends Component {

    static defaultProps = {
        title: "",
        isSwitch: false,
        rightTitle: "",
        leftSource: -1,
        rightTitleStyle: null
    };

    state = {
        isOpen: false
    };

    render() {
        return (
            <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()}
                                     onPress={() => alert(this.props.title)}>
                <View style={styles.navOutStyle}>
                    {this.renderLeftView()}
                    {this.renderRightView()}
                </View>
            </TouchableNativeFeedback>
        )
    }

    renderRightView() {
        if (this.props.isSwitch) {
            return <Switch value={this.state.isOpen}
                           onValueChange={() => this.setState({isOpen: !this.state.isOpen})}/>
        }
        return (
            <View style={styles.rightView}>
                <Text
                    style={this.props.rightTitleStyle === null ? styles.rightTitle : this.props.rightTitleStyle}>{this.props.rightTitle}</Text>
                <Image source={{uri:"icon_cell_rightarrow"}}
                       style={styles.icon}/>
            </View>
        )
    }

    renderLeftView() {
        return (
            <View style={styles.rightView}>
                {
                    this.props.leftSource === -1 ? null :
                        <Image style={styles.LeftIcon} source={{uri:this.props.leftSource+""}}/>
                }
                <Text>{this.props.title}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 8,
        height: 13,
    },
    LeftIcon: {
        width: 30,
        height: 30,
        marginRight:5,
        borderRadius:15
    },
    navOutStyle: {
        height: 44,
        backgroundColor: '#FFF',
        flexDirection: "row",
        paddingLeft: 15,
        paddingRight: 15,
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomColor: "#dddddd",
        borderBottomWidth: 0.3
    },
    rightView: {
        flexDirection: "row",
        alignItems: "center"
    },
    rightTitle: {
        color: "#BBBBBB",
        marginRight: 3
    }
});