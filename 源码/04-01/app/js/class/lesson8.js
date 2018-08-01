//1.怎么算是简洁表达
{
    //简洁表示法
    let o = 1;
    let k = 2;
    let es5 = {
        o: o,
        k: k
    };
    let es6 = {
        o,
        k

    }
    console.log(es5);
    console.log(es6);


    //2.如果对象里面有方法的化

    let es5_method = {
        hello: function () {
            console.log('hello');
        }
    };

    let es6_method = {
        hello() {
            console.log('hello')
        }
    }

    console.log(es5_method.hello(), es6_method.hello())

}

//3. 属性表达式 实现了变量的一个依赖
{
    let a = 'b';
    let es5_obj = {
        a: 'c'
    };

    let es6_obj = {
        [a]: 'c' //这里的a其实取的是最顶层上的值为b
    }
    console.log(es5_obj, es6_obj)
}

//4.判断两个字符串是不是完全相等
{
    console.log('字符串', Object.is('abc', 'abc'), 'abc' === 'abc');
    console.log('数组', Object.is([], []), [] === []) //虽然都是空数组，数组是引用类型，它们的地址不相等。所以严格意义上是不相等的
}

//5.Object.assign{} 拷贝对象 浅复制 引用地址而不是把值拷过去
//这个拷贝知识拷贝自身的属性，如果这个上面还有原型上的，那么就不会拷贝继承的属性，也不会拷贝不可枚举的属性
{
    console.log('拷贝', Object.assign({ a: 'a' }, { b: 'b' }))
}


//6.entries
{
    let test = { k: 123, o: 456 };
    for (let [key, value] of Object.entries(test)) {
        console.log(key, value)
    }
}

//7. 扩展运算符 //这里编译不通过的，babel支持不好
{
    let { a, b, ...c } = { a: 'test', b: 'kill', c: 'ddd', d: 'ccc' };

}