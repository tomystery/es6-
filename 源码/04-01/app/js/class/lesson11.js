//weakSet和weakMap是set和map的弱引用

//set集合中的元素是不能重复的

//map和object做对比，key和value,object中的key是字符串，map中的key可以是任意值

//1.向set里面增加元素要用add方法,获取元素长度要用size属性
{
    let list = new Set();
    list.add(5);
    list.add(7);

    console.log('size', list.size);
}

{
    let arr = [1, 2, 3, 4, 5]
    let list = new Set(arr);
    console.log('size', list.size);
}

//2.利用set很重要的一个特性就是去重
{
    let list = new Set();
    list.add(1);
    list.add(2);
    list.add(1);
    console.log('list', list);

}

//3.set转换元素的时候不会做数据类型的一个转换

{
    let list = [1, 2, '4', '5', '4', '5', 1, 2];
    let list2 = new Set(list);
    console.log('list', list2);

}


//3.删除数据 .delete() .clear() .has()判断是否有某个元素全部清空元素 
{
    let arr = ['add', 'delete', 'clear', 'has'];
    let list = new Set(arr);
    console.log('has', list.has('add'));
    console.log('delete', list.delete('add'), list);
    list.clear();
    console.log('list', list);

}

//5..keys()和values(),.entries(),forEach()返回的都是value的值 不加方法也是可以的
{
    let arr = ['add', 'delete', 'clear', 'has'];
    let list = new Set(arr);

    for (let key of list.keys()) {
        console.log('keys', key)
    }

    for (let value of list.values()) {
        console.log('value', value)
    }

    for (let [key, value] of list.entries()) {
        console.log('entries', key, value)
    }

    list.forEach(function (item) {
        console.log(item);
    })
}


//6.weakset和set有什么不一样，WeakSet的值只能是对象，不能是其他基本的数据类型,否则会报错
/* Weakset中的对象都是弱引用，就是他不会检测这个对象有没有在其他地方用过，这也就表示它不会和垃圾回收机制挂钩上，
通俗的将就是说我在weakset中添加了一个对象，这个对象不是整个值拷过来，他是地址的一个引用，
而且他也不会去检测这个地址是不是被垃圾回收掉了，所以weakSet的两点特性一定要注意。 */
/* 区别还有一些属性：1.set属性是没有的 2.一些方法他也没有如clear（）3.无法遍历   */
{
    let weakList = new WeakSet();
    let arg = {};
    weakList.add(arg);

    console.log('weaklist', weakList);

}


//7.map

/*  1.map 的特性就是key可以是任何值，所以可以用数组作key
    2.map取key值要用.get()
    3.map添加值就是用.set() 
    */

    //map第一种定义方式
{
    let map = new Map();
    let arr = ['123'];

    map.set(arr, 456);
    console.log('map', map, map.get(arr));

}

//map的第二种定义方式
{
    let map=new Map([['a',123],['b',456]]);
    console.log('map args',map)
    console.log('size',map.size)
    console.log('delete',map.delete("a"),map);
    console.log('map args',map.clear(),map)
}

//weakMap weakMap和MAp的特性和set,weakSet是一样的
{
    let weakmap=new WeakMap();
    let o={};
    weakmap.set(o,123);
    console.log(weakmap.get(o));
}

