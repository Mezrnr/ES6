/*
let count 
let 1.块级作用域 2.不能重复声明 3.es6 默认开启严格模式 变量必须声明
const 1.块级作用域 2.声明必须赋值 不可修改   3.如果值为对象 对象可修改
 */

function test() {
    // for(let i=1;i<3;i++){   console.log(i); } console.log(i);
    let a = 1;
    // let a = 2;
}

function last() {
    const PI = 3.1415926;
    const k = {
        a: 1
    }
    k.b = 3;
    console.log(PI, k);
}

// test();
last();