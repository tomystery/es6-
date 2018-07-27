{
    console.log('a', `\u0061`)
    console.log('a', `\u20BB7`) //a ₻7 0xFFF,这个超过长度，所以就会把前四个20BB当成一个字符，7当成一个。由于不是unicode的编码就会返回那样的

    //在unicode里面怎么处理大于0xFFF的呢？就是用大括号把它包起来

    console.log('s', `\u{20BB7}`)
}


{
    //讲一个API codePointAt()
    let s = '𠮷'; //因为它的码值大于两个字节的，这个时候就把它处理为4个字节，而在计算长度的时候，每两个字节就是一个长度，所以这里长度就是2
    console.log('length', s.length);//2
    console.log('0', s.charAt(0));//取字符
    console.log('1', s.charAt(1));
    console.log('at0', s.charCodeAt(0));//取码值的
    console.log('at1', s.charCodeAt(1));

    let s1 = '𠮷a';
    console.log('length', s1.length);
    console.log('code0', s1.codePointAt(0));//codePointAt会自动给计算你4个的码值，只取两个字节
    console.log('code1', s1.codePointAt(0).toString(16));
    console.log('code2', s1.codePointAt(1));//这里的1只取后两个字节
    console.log('code3', s1.codePointAt(2));//97 就是a的编码
}

{
    console.log(String.fromCharCode("0x20bb7")) //es5中的方法
    console.log(String.fromCodePoint("0x20bb7"))//es6中的方法
}

{
    //字符串便利器接口 let of 可以正常处理unicode编码大于oxfff的情况
    let str = '\u{20bb7}abc';
    for (let i = 0; i < str.length; i++) {
        console.log('res', str[i])
    }

    for (let code of str) {
        console.log(code) 
    }

}

//2. 开始和结束 & 1 包含
{
    let str="string";
    console.log('includes',str.includes("t"));
    console.log('start',str.startsWith("s"));
    console.log('start',str.endsWith("g"));
}

//3.重复
{
    let str="abc";
    console.log(str.repeat(2));
}

//4.模版拼接
{
    let name="list";
    let info="hello world";
    let m=`i am ${name},${info}`;
    console.log(m);

}
//5.
{
console.log('1'.padStart(2,'0')); //日期上有用 2013-07
console.log('1'.padEnd(2,'0')); //日期上有用 2013-07
}

//6. 标签模版 防止xss攻击的时候用这个处理很好
{
    let user={
        name:'list',
        info:'hello world'
    }

   console.log(abc`i am ${user.name},${user.info}`) ;
    function abc(s,v1,v2){
        console.log(s,v1,v2)
        return s+v1+v2;
    }

}

//7. String.raw
{
    console.log(String.raw `Hi\n${1+2}`);//这个没换行 让字符转义变得没有用
    console.log(`Hi\n${1+2}`); //这个换行了 
}