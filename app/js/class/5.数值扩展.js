{
    console.log('B', 0B111110111); // 0B 二进制  不限大小写
    console.log(0o767); // 0o 八进制
}

{
    // 判断是否在有效值内 Number.isFinite 是否是无穷
    console.log('15', Number.isFinite(15)); // true
    console.log('NaN', Number.isFinite(NaN)); // false
    console.log('1/0', Number.isFinite('true' / 0)); // false
    // 判断该数字 是否是数字
    console.log('NaN', Number.isNaN(NaN)); // true
    console.log('0', Number.isNaN(0)); // false

}

{
    // 判断是不是整数
    console.log('25', Number.isInteger(25)); // ture
    console.log('25.0', Number.isInteger(25.0));  // true
    console.log('25.1', Number.isInteger(25.1)); // false
    console.log('25.1', Number.isInteger('25')); // false
}

{

    // 2 的+- 53 次方
    console.log(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER); // 数字的区间
    // 判断数字是否在有效区间
    console.log('10', Number.isSafeInteger(10)); // true
    console.log('a', Number.isSafeInteger('a')); // false
}

{
    // 返回小数的整数部分
    console.log(4.1, Math.trunc(4.1));
    console.log(4.9, Math.trunc(4.9));
}

{
    // 判断是整数 还是 负数
    console.log('-5', Math.sign(-5)); // -1
    console.log('0', Math.sign(0)); // 0
    console.log('5', Math.sign(5)); // 1
    console.log('50', Math.sign('50')); // 1 对字符串转换
    console.log('foo', Math.sign('foo')); // NaN
}


{
    // 立方根
    console.log('-1', Math.cbrt(-1)); //
    console.log('8', Math.cbrt(8)); // 2
}