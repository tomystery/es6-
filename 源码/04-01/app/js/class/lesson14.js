{
    //1 基本定义和生成实例

    //这里的生成类和es5中是不同的，es5中是通过一个函数，函数里面有this
    class Parent {
        constructor(name = 'mukewang') {
            this.name = name;
        }
    }

    let v_parent=new Parent('v');
    console.log('构造函数示例',v_parent)
}

//2 继承 怎么传递参数，其实非常简单的，只要在子类的构造函数里面写一个方法 super
{
    //继承
    class Parent{
        constructor(name="mukewang"){
            this.name=name;
        }
    }

    class Child extends Parent{
        constructor(name='child'){
            super(name);//完成子类向父类传递参数的一个过程,super一定是放在构造函数的第一行
            this.type='Child';
        }

    }
    console.log('继承',new Child('hello'));
}

//3 类中的getter和setter
{
    class Parent{
        constructor(name='hahhah'){
            this.name=name;
        }

        get longName(){//这里是属性而不是方法
            return 'mk'+this.name
        }

        set longName(value){
            this.name=value;
        }
    }

    let v=new Parent();
    console.log('getter',v.longName);
    v.longName='hello';
    console.log('setter',v.longName);
}

{
    //4 静态方法  静态方法是通过类去调用而不是通过类的实例去调用
    class Parent{
        constructor(name='mukewang'){
            this.name=name;
        }

        static tell(){
            console.log('tell');
        }
    }
    Parent.tell();
}


//5 静态属性 注意：static只是用来定义静态方法而不是用来定义静态属性的

{
    class Parent{
        constructor(name='mukewang'){
            this.name=name;
        }

        static tell(){
            console.log('tell');
        }
    }

    //在类定义完成以后直接在类上定义
    Parent.type='test';
    console.log('静态属性',Parent.type)
}