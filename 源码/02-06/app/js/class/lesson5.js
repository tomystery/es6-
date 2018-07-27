//数值扩展

{
    //1.在es6中二进制数值的表示方法都是以0b开头，大小写都可以
    console.log(0b111110111)

    //在8进制都是以0o开头 0o大小写都可以
    console.log(0o767)

}

{
    //2.数值无穷大或无穷小 判断是不是有尽头的 使用频率不高
    console.log('15',Number.isFinite(15));
    console.log('NaN',Number.isFinite(NaN));
    console.log('1/0',Number.isFinite('true'/0));
    console.log('0',Number.isNaN(0)); //0不是数字 
}

//3.判断是不是整数 把25.0也当作整数
{
  console.log('25', Number.isInteger(25)) 
  console.log('25', Number.isInteger(25.1)) 
  console.log('25', Number.isInteger('25')) 
 
}

//4.
{
    console.log(Number.MAX_SAFE_INTEGER,Number.MIN_SAFE_INTEGER) 
    //判断一个数是不是在
    console.log('10',Number.isSafeInteger(10));//10是不是一个有效安全的数
    console.log('a',Number.isSafeInteger('a'));//'a'都不是一个数字
}

//取一个小数的整数部分
{
    console.log(4.1,Math.trunc(4.1));//4
    console.log(4.1,Math.trunc(4.9));//4
}

//判断一个数是正数，负数还是0
{
    console.log('-5',Math.sign(-5));
    console.log('5',Math.sign(5));
    console.log('0',Math.sign(0));
    console.log('50',Math.sign('50'));//字符串转换为数字
    console.log('50',Math.sign('foo'));//NaN
}

//立方根

{
console.log('-1',Math.cbrt(-1)); //-1的立方根是-1
console.log('8',Math.cbrt(8)); //-1的立方根是-1
}

//三角函数，对数方法