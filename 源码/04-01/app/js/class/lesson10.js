//symobol数据类型是新增加的数据类型，二是Symbol是什么，以及它的作用

/* 
我通过变量a生成一个数据类型5,我也可以通过b生成同样的数据类型5,这两个是一样的，
但是Symbol声明的变量a和b永远是不可能相等的
 */

{ //Symbol.for()的时候声明一个key值，他会检查这个key值有没有在全局注册过，如果注册过就会返回这个key值，如果没注册过就会调Symbol生成这个独一无二的值
    //声明
    let a1 = Symbol();
    let a2 = Symbol();
    console.log(a1 === a2);
    let a3 = Symbol.for('a3');
    let a4 = Symbol.for('a3');//这里key值'a3'定义过，那么a4就会拿到a3的值，那么它们返回的结果是相等的
    console.log(a3 === a4);
}


{ //对象中有用到Symbol做key值的话，你通过for in或者value of都拿不到那个值
    let a1 = Symbol.for('abc');
    let obj = {
        [a1]: '123',
        'abc': 345,
        'c': 456
    };
    console.log(obj);


    //for of是拿不到Symbol属性的
    for (let [key, value] of Object.entries(obj)) {
        console.log('let of', key, value);
    }

    //这个就能拿到Symbol的属性值了 getOwnPropertySymbols
    Object.getOwnPropertySymbols(obj).forEach(function (item) {
        console.log(obj[item]);//
    })

    //.ownKeys能使得变为数组的那种形式再使用foreach把这些都循环出来
    Reflect.ownKeys(obj).forEach(function (item) {
        console.log('ownKeys', item, obj[item])
    })
}