{
    let regex = new RegExp('xyz', 'i'); //i是修饰符
    let regex2 = new RegExp(/xyz/i); //i必须是一个参数而不是两个

    console.log(regex.test('xyz123'), regex2.test('xyz123'));

    let regex3 = new RegExp(/xyz/ig, 'i');//在es6中这里可以是两个参数 i和g
    console.log(regex3.flags);//后面的i会覆盖前面的修饰符
}

{
    let s = 'bbb_bb_b';
    let a1 = /b+/g;
    let a2 = /b+/y;

    console.log('one', a1.exec(s), a2.exec(s));//第一步都匹配'bbb'
    console.log('two', a1.exec(s), a2.exec(s));//第二步 'bb' null

    //相同点都是全局匹配
    //不同点：全局匹配不同的点是g修饰符是从上次匹配的位置继续寻找，y是必须从第一个开始寻找


    //如何确认我的正则是不是开启了y这种修饰符呢？出现了sticky
    console.log(a1.sticky, a2.sticky);

}

//u修饰符 u就是unicode 处理unicode的特征值
{
    console.log('u-1', /^\uD83D/.test('\uD83D\uDC2A'));//没加u会把这个\uD83D\uDC2A当成两个字母，
    console.log('u-2', /^\uD83D/u.test('\uD83D\uDC2A'));//这里会当成一个

    console.log(/\u{61}/.test('a'));//false 大括号包起来的内容是作为unicode字符的，如果不加u是不会被识别
    console.log(/\u{61}/u.test('a'));//true


    //正则匹配中的.是可以代表任何字符，其实unicode编码超过两个字节他就不能识别了。
    console.log(`\u{20BB7}`)
    let s = '𠮷';

    console.log('u', /^.$/.test(s));//u false
    console.log('u-2', /^.$/u.test(s));//u true

    //提示如果你的字符串中的有的字符是大于两个字节的一定要加上u修饰符才能正确识别

    console.log('test', /𠮷{2}/.test('𠮷𠮷'))
    console.log('test-2', /𠮷{2}/u.test('𠮷𠮷'))

    //.还有四个字符是不能处理的，如换行符，回车符，行分隔符，段分隔符，如果遇到了怎么处理呢？就是s修饰符但是es6还没有实现
}




