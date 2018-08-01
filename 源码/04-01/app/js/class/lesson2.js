//数组结构赋值

{
    let a,b,rest;
    [a,b]=[1,2];
    console.log(a,b);
}

{
    let a,b,rest;
    [a,b,...rest]=[1,2,3,4,5,6]
    console.log(a,b,rest)
}

//对象解构赋值
{
    let a,b
    ({a,b}={a:1,b:2})
    console.log(a,b)

}

//默认值 

    //删掉3会发现是undefined,没找到配对的对像就是undefined,所以默认值就是来解决这个问题的
{
    let a,b,c,rest;
    [a,b,c=3]=[1,2];
    console.log(a,b,c);
}
    //使用场景1:变量的交换，es5是设置一个中间变量
{
    let a=1;
    let b=2;
    [a,b]=[b,a];
    console.log(a,b);
}
//假设返回两个值，一个是数量，一个是金额.es5是设置一个变量接收到这个值，然后根据索引来拿到
{
    function f(){
        return [1,2]
    }
    let a,b;
    [a,b]=f();
    console.log(a,b);
}

//这种是返回多个值的情况下可以只取到我要的值
{
    function f(){
        return [1,2,3,4,5]
    }
    let a,b,c;
    [a,,,,b]=f();
    console.log(a,b);

}

//适用于我不知道数组返回的长度是多少，我只返回第一个，其他的赋值给另一个数组
{
    function f(){
        return [1,2,3,4,5]
    }
    let a,b,c;
    [a,...b]=f();
    console.log(a,b);

}

//由对象获得单个的变量值 左侧对像右侧也对象
{
    let a={p:42,q:true};
    let {p,q}=a;
    console.log(p,q)

}


{
    let {a=10,b=5}={a:3};
    console.log(a,b);//a被重新赋值了
}

//前端和后端通信使用的是json，而json可以理解为一个对象。这里是嵌套对象和数组之间这么一个运用
{
    let metaData={
        title:'abc',
        test:[{
            title:'test',
            desc:'description'
        }]
    }
    let {title:esTitle,test:[{title:cnTitle}]}=metaData;
    console.log(esTitle,cnTitle)
}