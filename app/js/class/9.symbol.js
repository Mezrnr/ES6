{
    // 声明 值永远是独一无二的
    let a1 = Symbol();
    let a2 = Symbol();
    console.log(a1 === a2); // false
    let a3 = Symbol.for('a3'); // a3是配值
    let a4 = Symbol.for('a3'); // 已存在 直接取值
    console.log(a3 === a4); // true
}

{
    let a1 = Symbol.for('abc');
    let obj = {
        [a1]: '123',
        'abc': 345,
        'c': 456
    };
    console.log('obj', obj);

    // 取不到 Symbol 的值 for in 
    for (let [key, value] of Object.entries(obj)) {
        console.log('let of', key, value);
    }

    // （只能） 获取Symbol 值  返回数组 
    Object.getOwnPropertySymbols(obj).forEach(function (item) {
        console.log(obj[item]);
    })

    // 获取所有的值  返回数组
    Reflect.ownKeys(obj).forEach(function (item) {
        console.log('ownkeys', item, obj[item]);
    })
}