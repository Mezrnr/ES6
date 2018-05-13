// 字符 unicode  的表现方法
{
    console.log('a', `\u0061`); // a 
    console.log('s', `\u20BB7`); //  []7   >0xFFF

    console.log('s', `\u{20BB7}`); // 𠮷 码值大于1个字节 使用 {  }
}


{
    // es5
    let s = '𠮷';
    console.log('length', s.length); // 2
    // 取字符
    console.log('0', s.charAt(0));
    console.log('1', s.charAt(1));
    // 取unicode
    console.log('at0', s.charCodeAt(0));
    console.log('at1', s.charCodeAt(1));

    // es6
    let s1 = '𠮷a';
    console.log('length', s1.length); // 3
    console.log('code0', s1.codePointAt(0)); // 10进制
    console.log('code0', s1.codePointAt(0).toString(16)); // 转换为16进制
    console.log('code1', s1.codePointAt(1)); // 
    console.log('code2', s1.codePointAt(2)); // 97 a
}

{
    // es5:
    console.log(String.fromCharCode("0x20bb7"));
    // es6:    
    console.log(String.fromCodePoint("0x20bb7"));
}

{
    let str = '\u{20bb7}abc';
    // es5
    for (let i = 0; i < str.length; i++) {
        console.log('es5', str[i]);
    }
    // es6    能识别大于一个字符长度的unicode 
    for (let code of str) {
        console.log('es6', code);
    }
}

{
    let str = "string";
    // 是否包含
    console.log('includes', str.includes("c")); // false
    // 判断以什么开始
    console.log('start', str.startsWith('str')); // false
    // 判断以什么结尾    
    console.log('end', str.endsWith('ng')); // true
}

{
    let str = "abc";
    // 重复字符串
    console.log(str.repeat(2)); // abcabc
}

{
    // 字符串模板
    let name = "list";
    let info = "hello world";
    let m = `i am ${name},${info}`;
    console.log(m);
}

{
    // 设置参数 为两位 补白
    console.log('1'.padStart(2, '0'));
    console.log('1'.padEnd(2, '0'));
}

{
    // 标签模板   
    let user = {
        name: 'list',
        info: 'hello world'
    };
    console.log(abc `i am ${user.name},${user.info}`);

    function abc(s, v1, v2) {
        console.log(s, v1, v2); // s 为数组   输出是会转为字符串 
        return s + v1 + v2
    }
}

{
    // 防止斜杠编译
    console.log(String.raw `Hi\n${1+2}`); // hi\n3
    
    console.log(`Hi\n${1+2}`); // hi 3
}