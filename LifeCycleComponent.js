import React,{ Component }from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native'

export default class LifeCycleComponent extends Component{

    constructor(props){//完成组件初始化
        super(props)
        console.log('---LifeCycleComponent---'+'1  constructor ')
        this.state = {
            count:0,
        }
    }

    componentWillMount(){//组件装载之前调用
        console.log('---LifeCycleComponent---'+'2  componentWillMount装载之前')
    }

    componentDidMount(){//组件装载完成之后调用
        console.log('---LifeCycleComponent---'+'4  componentDidMount装载完成了')
    }

    componentWillReceiveProps(){//组件在更新的时候调用
        console.log('---LifeCycleComponent---'+'componentWillReceiveProps即将更新')
    }

    shouldComponentUpdate(nextProps, nextState){//组件是否需要更新
        console.log('---LifeCycleComponent---'+'shouldComponentUpdate组件是否需要更新')
        return true;
    }

    componentWillUpdate(nextProps, nextState){//组件在更新前调用
        console.log('---LifeCycleComponent---'+'componentWillUpdate组件更新之前')
    }

    componentDidUpdate(nextProps, nextState){//组件在更新之后调用
        console.log('---LifeCycleComponent---'+'componentDidUpdate组件更新了')
    }

    componentWillUnmount(){//组件在移除之前调用
        console.log('---LifeCycleComponent---'+'componentWillUnmount组件将要移除')
    }

    render(){
        console.log('---LifeCycleComponent---'+'3  render组件渲染')
        return<View>
            <Text style={{fontSize:30,backgroundColor:'gray'}}
                  onPress={()=>{
                      this.setState({
                          count:this.state.count+1,
                      })
                  }}
            >ReactNative</Text>
            <Text style={{fontSize:32}}>被打了{this.state.count}</Text>
        </View>
    }
}