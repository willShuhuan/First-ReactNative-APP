
export default class Student{

    constructor(name,age,sex){
        this.name = name;
        this.age = age;
        this.sex = sex;
    }

    getDescription(){
        return '姓名：'+this.name +'\n性别：'+this.sex+'\n年龄：'+this.age
    }
}