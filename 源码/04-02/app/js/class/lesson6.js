//Array.of就是把一组数据对象转换为数组类型
{
    let arr = Array.of(3, 4, 7, 911);
    console.log('arr=', arr)

    let empty = Array.of();
    console.log(empty)
}

//2.把一些伪数组和 Array.from还有一个映射的功能
{
    let p = document.querySelectorAll('p');
    let pArr = Array.from(p);
    console.log(pArr);
    pArr.forEach(function (item) {
        console.log(item.textContent)
    })

    console.log(Array.from([1, 3, 5], function (item) { return item + 2 }))
}

//3.填充数组的功能
{
    console.log('file-7', [1, 'a', undefined].fill(7));
    console.log('file-7,pos', [1, 'a', undefined].fill(7, 1, 3));//从第一个开始换直到第三个，三其实就是长度
}

{
    //取下标
    for (let index of ['1', 'c', 'ks'].keys()) {
        console.log('keys', index);
    }

    //取下值
    for (let value of ['1', 'c', 'ks'].values()) {
        console.log('values', value) //有兼容性问题
    }

    //既想取索引又要取值
    for(let [index,value] of ['1','c','ks'].entries()){
        console.log('values',index,value)
    }
}

{
    console.log([1,2,3,4,5].copyWithin(0,3,4));
    //第一个参数表示从那个位置开始替换，我从那个位置开始读取数据，从那个位置截止，这个4其实就是在第4个位置之前，所以只取了4覆盖0的位置
    
}

//查找一个元素是不是在数组中 .find找到第一个符合条件的就可以了
{
 console.log([1,2,3,4,5,6].find(function(item){ return item>3}))
 console.log([1,2,3,4,5,6].findIndex(function(item){ return item>3})) //招第一个符合条件的下标
}

//includes是不是包含某个值
{
    console.log('number',[1,2,NaN].includes(1)); 
    console.log('number',[1,2,NaN].includes(NaN)); //es5中两个NaN是不能做相等运算的
}

{
    
}
