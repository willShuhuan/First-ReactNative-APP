import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native'

export default class FlexBoxTest extends Component{
    render(){
        return (
            //flexDirection:'column'纵向排列 row横向排列
            //flexwrap：是否允许多行排列
            //justifyContent:对齐方式 纵轴 纵向
            //alignitems：对齐方式 横向 横轴
            //flex:类似安卓weight
            <View style={ {flexDirection:'column',backgroundColor:"darkgray",marginTop:20,height:500,borderWidth:1,borderColor:'red',flexWrap:'wrap',alignItems:'flex-start'}}>
                <View style={ {width:100,height:40,backgroundColor:"darkcyan",margin:5,flex:1,padding:10}}>
                    <View style={ {backgroundColor:"red",flex:1}}/>
                </View>
                <View style={ {width:50,height:40,backgroundColor:"darkcyan",alignSelf:'flex-end',margin:5,flex:2}}>
                    <Text style={ {fontSize:16}}>2</Text>
                </View>
                <View style={ {width:100,height:40,backgroundColor:"darkcyan",margin:50}}>
                    <Text style={ {fontSize:16}}>3</Text>
                </View>
                <View style={ {width:50,height:40,backgroundColor:"darkcyan",margin:5,alignItems:'center',justifyContent: 'center'}}>
                    <Text style={ {fontSize:16}}>4</Text>
                </View>
            </View> )
    }
}

