{
    let arr = ['hello', 'world'];
    let map = arr[Symbol.iterator](); //在数组中使用
    console.log(map.next()); // {value: "hello", done: false}
    console.log(map.next()); // {value: "world", done: false}
    console.log(map.next()); // {value: "undefind", done: true} done 表示循环已经结束
}

{
    // obj 定义iterator接口
    let obj = {
        start: [1, 3, 2],
        end: [7, 9, 8],
        [Symbol.iterator]() {
            let self = this;
            let index = 0;
            let arr = self.start.concat(self.end);
            let len = arr.length;
            return {
                next() {
                    if (index < len) {
                        return {
                            value: arr[index++],
                            done: false
                        }
                    } else {
                        return {
                            value: arr[index++],
                            done: true
                        }
                    }
                }
            }
        }
    }
    // for of 默认调用 [Symbol.iterator]() 
    for (let key of obj) {
        console.log(key);
    }
}

{
    let arr = ['hello', 'world'];
    for (let value of arr) {
        console.log('value', value);
    }
}