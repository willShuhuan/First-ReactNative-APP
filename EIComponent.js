import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View
} from 'react-native'

var name = '小明';
var age = '22';
const firstname = '王';//常量
export {name,age,firstname};

export default class EIComponent extends Component{
    render(){
        return <Text style={{fontSize:30}}>Hello React Native</Text>
    }
}

export function sum(a,b) {
    return a+b;
}

// var EIComponent = React.createClass({
//
// })
// module.exports = EIComponent;