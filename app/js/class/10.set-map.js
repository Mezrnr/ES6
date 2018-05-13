// set 中的元素必须是唯一的
{
    let list = new Set();
    list.add(5);
    list.add(7);

    console.log('size', list.size); // 2 获取 set 的长度
}

{
    let arr = [1, 2, 3, 4, 5];
    let list = new Set(arr);

    console.log('size', list.size); // 5
}

{
    let list = new Set();
    list.add(1);
    list.add(2);
    list.add(1); // 添加不进去 set 可以去重

    console.log('list', list);

    let arr = [1, 2, 3, 1, '2']; // set 不会对数据类型进行转换
    let list2 = new Set(arr);

    console.log('unique', list2);
}

{
    let arr = ['add', 'delete', 'clear', 'has'];
    let list = new Set(arr);
    // 判断是否存在
    console.log('has', list.has('add')); // true
    // 移除
    console.log('delete', list.delete('add'), list); // true
    // 清空
    list.clear();
    console.log('list', list);
}

{
    let arr = ['add', 'delete', 'clear', 'has'];
    let list = new Set(arr);
    // 遍历
    for (let key of list.keys()) {
        console.log('keys', key); // 'add', 'delete', 'clear', 'has'
    }
    // 遍历
    for (let value of list.values()) {
        console.log('value', value); // 'add', 'delete', 'clear', 'has'
    }
    // 遍历
    for (let [key,
        value]of list.entries()) {
        console.log('entries', key, value);
    }

    list
        .forEach(function (item) {
            console.log(item); // 'add', 'delete', 'clear', 'has'
        })
}

{
    // 对象 弱引用 与垃圾回收 无关
    let weakList = new WeakSet();

    let arg = {};

    weakList.add(arg);

    // weakList.add(2);

    console.log('weakList', weakList);
}

{
    // 可以用数组作为key
    let map = new Map();
    let arr = ['123'];

    map.set(arr, 456);

    console.log('map', map, map.get(arr));
}

{
    let map = new Map([
        [
            'a', 123
        ],
        ['b', 456]
    ]);
    console.log('map args', map);
    console.log('size', map.size);
    console.log('delete', map.delete('a'), map);
    console.log('clear', map.clear(), map);
}

{
    let weakmap = new WeakMap();

    let o = {};
    weakmap.set(o, 123);
    console.log(weakmap.get(o));
}

{
    // 数据结构横向对比，增，查，改，删 ----------------------------------------------
    let map = new Map();
    let array = [];
    // 增
    map.set('t', 1);
    array.push({t: 1});

    console.info('map-array', map, array);

    // 查
    let map_exist = map.has('t');
    let array_exist = array.find(item => item.t);
    console.info('map-array', map_exist, array_exist);

    // 改
    map.set('t', 2);
    array.forEach(item => item.t
        ? item.t = 2
        : '');
    console.info('map-array-modify', map, array);

    // 删
    map.delete('t');
    let index = array.findIndex(item => item.t);
    array.splice(index, 1);
    console.info('map-array-empty', map, array);
}

{
    // set和array的对比
    let set = new Set();
    let array = [];

    // 增
    set.add({t: 1});
    array.push({t: 1});

    console.info('set-array', set, array);

    // 查
    let set_exist = set.has({t: 1});
    let array_exist = array.find(item => item.t);
    console.info('set-array', set_exist, array_exist);

    // 改
    set.forEach(item => item.t
        ? item.t = 2
        : '');
    array.forEach(item => item.t
        ? item.t = 2
        : '');
    console.info('set-array-modify', set, array);

    // 删
    set.forEach(item => item.t
        ? set.delete(item)
        : '');
    let index = array.findIndex(item => item.t);
    array.splice(index, 1);
    console.info('set-array-empty', set, array);
}

{
    // map,set,object对比
    let item = {
        t: 1
    };
    let map = new Map();
    let set = new Set();
    let obj = {};

    // 增
    map.set('t', 1);
    set.add(item);
    obj['t'] = 1;

    console.info('map-set-obj', obj, map, set);

    // 查
    console.info({
        map_exist: map.has('t'),
        set_exist: set.has(item),
        obj_exist: 't' in obj
    })

    // 改
    map.set('t', 2);
    item.t = 2;
    obj['t'] = 2;
    console.info('map-set-obj-modify', obj, map, set);

    // 删除
    map.delete('t');
    set.delete(item);
    delete obj['t'];
    console.info('map-set-obj-empty', obj, map, set);
}

// 优先考虑 map  set