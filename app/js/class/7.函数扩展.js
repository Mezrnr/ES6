{
    // 设置默认值
    function test(x, y = 'world') {
        console.log('默认值', x, y);
    }
    test('hello');
    test('hello', 'kill');
}

{
    let x = 'test';

    function test2(x, y = x) {
        console.log('作用域', x, y);
    }
    test2('kill');
}

{
    // ... 所有参数 转换为数组
    function test3(...arg) {
        for (let v of arg) {
            console.log('rest', v);
        }
    }
    test3(1, 2, 3, 4, 'a');
}

// 把数组 转换为离散的值
{
    console.log(...[1, 2, 4]);
    console.log('a', ...[1, 2, 4]);
}

{
    //  箭头函数 函数名 = 函数参数() => 返回值
    let arrow = v => v * 2;
    let arrow2 = () => 5;
    console.log('arrow', arrow(3));
    console.log(arrow2());

}

{
    // 尾调用 函数式编程 
    function tail(x) {
        console.log('tail', x);
    }

    function fx(x) {
        return tail(x)
    }
    fx(123)
}