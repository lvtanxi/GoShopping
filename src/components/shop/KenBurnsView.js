import React, {PropTypes} from 'react'
import {
    requireNativeComponent,
    View
} from 'react-native';

let iface = {
    name: "KenBurnsView",
    propTypes: {
        source: PropTypes.string,
        ...View.propTypes
    }
};

export default requireNativeComponent("KenBurnsView",iface);
