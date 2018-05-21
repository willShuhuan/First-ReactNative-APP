import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native'

export default class RefTest extends Component{
    state ={
        size:80
    }
    constructor(props){
        super(props);
        // this.state={
        //     size:0
        // }
    }

    getsize(){
        return this.state.size;
    }
    render(){
        return(
        <View>
        <Text style={{fontSize:30}}
            onPress={()=>{
                this.setState(
                    {
                        size:this.state.size+10
                    }
                )
            }}
            >吹呀吹呀 我的骄傲放纵</Text>
            <Text style={{fontSize:30}}
                  onPress={()=>{
                      this.setState(
                          {
                              size:this.state.size-10
                          }
                      )
                  }}
            >吸呀吸呀，变小变小变小</Text>
            <Image
                style ={{width:this.state.size,height:this.state.size,alignItems: 'center'}}
                source={require('./qiqiu.png')}
            />
        </View>
        )
    }
}