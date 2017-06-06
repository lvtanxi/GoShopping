import React, {Component} from 'react'
import {
    StyleSheet,
    Image,
    Text,
    FlatList,
    TouchableNativeFeedback,
    Dimensions,
    View
} from 'react-native';
let {width} = Dimensions.get("window");
export default class GridView extends Component {
    defaultProps = {
        datas: []
    };
    state = {selected: (new Map(): Map<string, boolean>)};
    _keyExtractor = (item, index) => item.id;

    render() {
        return <FlatList
            data={this.props.datas}
            extraData={this.state}
            keyExtractor={this._keyExtractor}
            scrollEnabled={false}
            contentContainerStyle={styles.contentStyle}
            renderItem={this._renderItem}
        />
    }

    _renderItem = ({item}) => (
        <GridViewItem
            id={item.id}
            selected={!!this.state.selected.get(item.id)}
            icon={item.icon}
            title={item.title}
        />
    );
}

class GridViewItem extends React.PureComponent {
    render() {
        return (
            <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()}
                                     onPress={() => alert(this.props.title)}>
                <View style={styles.itemView}>
                    <Image source={{uri: this.props.icon}} style={styles.icon}/>
                    <Text style={styles.titleStyle}>{this.props.title}</Text>
                </View>
            </TouchableNativeFeedback>
        )
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 52,
        height: 52
    },
    itemView: {
        alignItems: "center",
        width: width / 5
    },
    contentStyle: {
        flexWrap: 'wrap',
        flexDirection: "row",
        width: width
    },
    titleStyle: {
        fontSize: 12
    }
});