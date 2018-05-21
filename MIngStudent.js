import Student from "./Student";
export default class MIngStudent extends Student{

    constructor(){
        super('小红红','女女',21);
    }

    getDescription(){
        return '哈哈：' +super.getDescription();
    }
}