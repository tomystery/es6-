
//1. 传入的参数可以指定一个值 默认值的后面还是要有默认值的变量
{
    function test(x,y='world',c){
        console.log('默认值',x,y,c)
    }
    test('hello','world','haha');
    test('hello','kill')
}

//2. 

{
    let x='test';
    function test2(x,y=x){
        console.log('作用域',x,y);
    }
    test2();
}

{
    function test3(...args){
        for(let v of args){
            console.log('rest',v);
        }
        console.log(arguments);
        console.log(arguments[0]);
    }
    test3(1,2,3,4,'a') //把一系列的参数转换为一个数组
}


//把数组转换为一个离散的值。
{
    console.log(...[1,2,4]);
}

//箭头函数
{
    let arrow=v=>v*2;
    let arrow2=()=>5;
    console.log(arrow(3));
    console.log(arrow2());
}

//尾调用 存在于函数式编程的概念，就是函数的最好一句话是不是一个函数 作用：提升性能 因为之前的递归设置一个函数地址嵌套，那个是相当耗费资源的，而这个尾调用是提升性能。
{
    function tail(x){
        console.log('tail',x);
    }

    function fx(x){
        return tail(x);
    }
    fx(123);
}

