//导出就用export

export let A=123;

export function test(){
    console.log('test');
}

export class Hello{
    test(){
        console.log('class')
    }
}

//1. ?如果我这个模块非常多，几十个上百个 那么要一一倒出来吗？
//2. 如果导出的模块非常多，但是我只关心其中的一个


/* 1. 那就在花括号中需要那项拿那项， */
/* 2. import *  as lesson from 路径   就是把所有的都倒入 */

/* export default {
    A,
    test,
    Hello
} */

//export default非常简洁，不需要你去干嘛