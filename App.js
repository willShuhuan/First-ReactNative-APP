/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React , { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

// import HelloComponent from "./HelloComponent";
import LifeCycleComponent from "./LifeCycleComponent";
import EIComponent, {name, age, firstname, sum} from "./EIComponent";
import PropsTest from "./PropsTest";
import StateTest from "./StateTest";
import RefTest from "./RefTest";
import Student from "./Student";
import MIngStudent from "./MIngStudent";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
    constructor(props){
        super(props)
        this.state=({
            remove:false,
            result:'',
            size :0
        })
        this.stu = new MIngStudent('小红','女',18);
    }

  render() {
        var view = this.state.remove?null:<LifeCycleComponent/>;
        var text = this.state.remove?"让他复活":'干掉他';
        var params ={name:'zhang',age:18,sex:'男'}
        var {name,sex} = params;

    return (
      <View style={styles.container}>
          {/*//1.生命周期eg*/}
          {/*<Text*/}
              {/*style ={{fontSize:25}}*/}
              {/*onPress={()=>{*/}
                  {/*console.log('---LifeCycleComponent---'+this.state.remove);*/}
                    {/*this.setState({*/}
                        {/*remove:!this.state.remove*/}

                    {/*})*/}
                {/*}}*/}
          {/*>{text}</Text>*/}
          {/*{view}*/}
          {/*<Text style ={{fontSize:25}}>姓名:{name}</Text>*/}
          {/*<Text style ={{fontSize:25}}>年龄:{age}</Text>*/}
          {/*<Text style ={{fontSize:25}}>姓:{firstname}</Text>*/}
          {/*<Text style ={{fontSize:25}}*/}
          {/*onPress = {()=>{*/}
          {/*var result = sum(1,1);*/}
          {/*this.setState({*/}
          {/*result : result,*/}
          {/*})*/}
          {/*}*/}
          {/*}*/}
          {/*>1+1={this.state.result}</Text>*/}


          {/*//2.state使用*/}
          {/*<StateTest/>*/}

          {/*//3.ref使用*/}
          <Text
                style ={{fontSize:20}}
                onPress = {()=>{
                    var size = this.refs.reftest.getsize();
                    this.setState({
                        size:size,
                    })
                }}>
              {/*获取气球大小:{this.state.size}*/}
              {this.stu.getDescription()}
              </Text>

          {/*<RefTest ref = 'reftest'/>*/}

          {/*//4.props使用*/}
      {/*<PropsTest*/}
            {/*// name='小明'*/}
            {/*// sex = '男'*/}
          {/*//{...params}//ES6新语法*/}
          {/*name = {name}*/}
          {/*sex = {sex}*/}
      {/*/>*/}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    marginTop:50,
  },


});
