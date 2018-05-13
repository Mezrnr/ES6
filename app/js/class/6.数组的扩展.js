{
    // 创建变量
    let arr = Array.of(3, 4, 7, 9, 11);
    console.log('arr=', arr);

    let empty = Array.of();
    console.log('empty', empty); // []
}

{
    let p = document.querySelectorAll('p');
    // 集合转换为数组
    let pArr = Array.from(p);
    pArr.forEach(function (item) {
        console.log(item.textContent);
    });
    // 对数组 转换 遍历 变换
    console.log(Array.from([1, 3, 5], function (item) {
        return item * 2
    }));
}

{
    // 填充数组
    console.log('fill-7', [1, 'a', undefined].fill(7)); // [7,7,7]
    console.log('fill,pos', ['a', 'b', 'c'].fill(7, 1, 3)); // [ a,7,7 ] 从位置1 开始 到 位置3 做替换
}

{
    // keys 获取下标
    for (let index of ['1', 'c', 'ks'].keys()) {
        console.log('keys', index);
    }
    // 获取内容
    for (let value of ['1', 'c', 'ks'].values()) {
        console.log('values', value);
    }
    // 同时获取
    for (let [index, value] of ['1', 'c', 'ks'].entries()) {
        console.log('values', index, value);
    }
}

{
    // copy 替换  
    console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4));
}

{
    // 查找 只找到第一个
    console.log([1, 2, 3, 4, 5, 6].find(function (item) {
        return item > 3
    }));
    // 返回下标 只找到第一个
    console.log([1, 2, 3, 4, 5, 6].findIndex(function (item) {
        return item > 3
    }));
}

{
    // 包含
    console.log('number', [1, 2, NaN].includes(1));
    console.log('number', [1, 2, NaN].includes(NaN));
}