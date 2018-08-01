{
    /*  数据结构横向对比，增，查，改删 */
    let map = new Map();
    let array = [];
    //增
    map.set('t', 1);
    array.push({ t: 1 });
    console.info('map-array', map, array)

    //查 就是这个数据结构中有没有这个值
    let map_exist = map.has('t');
    let array_exist = array.find(item => item.t);//这个会找到值
    console.info('map-array', map_exist, array_exist)

    //改
    map.set('t', 2);
    array.forEach(item => item.t ? item.t = 2 : '');
    console.log('map-array-modify', map, array)
    //删
    map.delete('t');
    let index = array.findIndex(item => item.t)//查找每一个元素中包含带t的
    array.splice(index, 1);
    console.info('map-array-empty', map, array);
}

//set和array的对比
{
    let set = new Set();
    let array = [];

    //增
    set.add({ t: 1 });
    array.push({ t: 1 });
    console.log('set-array', set, array)


    //查
    let set_exist=set.has({t:1});
    let array_exist=array.find(item=>item.t);
    console.info('set-array', set_exist, array_exist)

    //改
    set.forEach(item=>item.t ? item=2:'');
    array.forEach(item=>item.t ? item=2:'');
    console.info('set-array-modify',set,array)

    //删
    set.forEach(item=>item.t ? set.delete(item):'');
    let index = array.findIndex(item => item.t)//查找每一个元素中包含带t的
    array.splice(index, 1);
    console.log('set-array-empty',set,array);


}

//让set,map和object同时来对比

{
    let item={t:1};
    let map =new Map();
    let set=new Set();
    let obj={};

    //增
    map.set('t',1);
    set.add(item);
    obj['t']=1;

    console.info('map-set-obj',map,set,obj)


    //查
    console.info({
        map_exist:map.has('t'),
        set_exist:set.has(item),
        obj_exist:'t' in obj

    })

    //改
    map.set('t',2);
    item.t=2;//set是引用类型
    obj['t']=2;
    console.info('map-set-modify',obj,map,set);

    //删除
    map.delete('t');
    set.delete(item);
    delete obj['t'];
    console.info('map-set-obj-empty',obj,map,set)
    
}