// 数组解构赋值
{
    let a, b, rest;
    [a, b] = [1, 2];
    console.log(a, b); // 1 2
}

// 解构赋值 ...
{
    let a, b, rest;
    [a, b, ...rest] = [1, 2, 3, 4, 5, 6];
    console.log(a, b, rest); // 1 2 [ 3, 4, 5, 6 ]
}

// 对象解构赋值
{
    let a, b;
    ({
        a,
        b
    } = {
        a: 1,
        b: 2
    })
    console.log(a, b); // 1 2
}

// 没有配对成功 为 undefind  可以 设置默认值 c=3
{
    let a, b, c, rest;
    [a, b, c = 3] = [1, 2];
    console.log(a, b, c);
}

// 变量交换
{
    let a = 1;
    let b = 2;
    [a, b] = [b, a];
    console.log(a, b); // 2 1
}

// 函数返回值
{
    function f() {
        return [1, 2]
    }
    let a, b;
    [a, b] = f();
    console.log(a, b); // 1 2
}

// 选择变量赋值
{
    function f() {
        return [1, 2, 3, 4, 5]
    }
    let a, b, c;
    [a, , , b] = f();
    console.log(a, b); // 1 4
}

// ... 剩余参数  , 为占位
{
    function f() {
        return [1, 2, 3, 4, 5]
    }
    let a, b, c;
    [a, , ...b] = f();
    console.log(a, b);
}

// 对象解构赋值 
{
    let o = {
        p: 42,
        q: true
    };
    let {
        p,
        q
    } = o;
    console.log(p, q); // 42 true
}

// 对象设置默认值
{
    let {
        a = 10, b = 5
    } = {
        a: 3
    };
    console.log(a, b); // 3 5
}


// 对象 嵌套使用 
{
    let metaData = {
        title: 'abc',
        test: [{
            title: 'test',
            desc: 'description'
        }]
    }
    let {
        title: esTitle,
        test: [{
            title: cnTitle
        }]
    } = metaData;
    console.log(esTitle, cnTitle); // abc test
}