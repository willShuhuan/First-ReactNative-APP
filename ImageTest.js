import React, { Component } from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View
} from 'react-native'

export default class ImageTest extends Component{
    render(){
        return(
        <View>
            {/*静态图片*/}
            <Image//静态图片
                style = {{width:400,height:100,borderWidth:1}}
                source={require('./qiqiu.png')}
                resizeMode ={'stretch'}/>
            <Image//网络图片*必须有宽高
                style = {{width:200,height:150,borderWidth:1}}
                source={{uri:'https://xcycdn.zhongguowangshi.com/live-img/201805/2018052215530003_1076.jpg'}}
                resizeMode ={'stretch'}/>
            <Image//android/ios原生 必须设置宽高 tintcolor 着色
                style = {{width:200,height:150,tintColor:'red'}}
                source={{uri:'ic_launcher'}}/>
            <Image//获取android/ios设备内的图片，略
                style = {{width:200,height:150}}
                source={require('./res/ic_launcher.png')}/>

        </View>)
    }
}