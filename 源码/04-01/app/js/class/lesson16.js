{
    let arr = ['hello', 'world'];
    let map = arr[Symbol.iterator]();//数组直接调用iterator接口
    console.log(map);
    console.log(map.next());
    console.log(map.next());
    console.log(map.next());

    /* {value: "world", done: false} done表示循坏还有没有下一个状态，true也就是表示没有下一步了 */
}


//我们是不是可以自定义iterator接口,答案是肯定可以的

{
    let obj = {
        start: [1, 3, 2],
        end: [7, 9, 8],
        [Symbol.iterator]() {//声明一个ierator接口方法
            let self = this;
            let index = 0;
            let arr = self.start.concat(self.end);
            let len = arr.length;
            return {
                next() {
                    if (index < len) {
                        return {
                            value: arr[index++],
                            done: false
                        }
                    } else {
                        return {
                            value: arr[index++],
                            done: true
                        }
                    }
                }
            }
        }
    }

    /* 我们遍历obj要达到一个什么效果呢？就是先遍历start然后遍历end, */
    console.log(obj[Symbol.iterator]().next())
    for (let key of obj) {
        console.log(key);
    }

    /* 不管将来是怎么样的数据结构，如果想自定义这个方法一定要按照这个操作 */
}

