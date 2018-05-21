import React, { Component } from 'react';
import { PropTypes} from 'prop-types';
import {
    StyleSheet,
    Text,
    View
} from 'react-native'

export default class PropsTest extends Component{
    static defaultProps={
        name:'xiaoming',
        age:16,
        sex:'male'
    }
    static propTypes={
        name:PropTypes.string,
        age:PropTypes.number,
        sex:PropTypes.string.isRequired,

    }
    render(){
        return(
        <View>
            <Text style={{fontSize:30}}>姓名.{this.props.name}</Text>
            <Text style={{fontSize:30}}>年龄.{this.props.age}</Text>
            <Text style={{fontSize:30}}>性别.{this.props.sex}</Text>
        </View>
        )
    }
}