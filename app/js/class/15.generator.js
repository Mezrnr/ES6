{
    // generator基本定义
    let tell = function* () {
        yield 'a';
        yield 'b';
        return 'c'
    };
    // 执行函数
    let k = tell();

    console.log(k.next()); // {value: "a", done: false}
    console.log(k.next()); // {value: "b", done: false}
    console.log(k.next()); // {value: "c", done: true}
    console.log(k.next()); // {value: undefined, done: true}
}

{
    // generator 与 iterator 的关系
    let obj = {};
    obj[Symbol.iterator] = function* () {
        yield 1;
        yield 2;
        yield 3;
    }

    for (let value of obj) {
        console.log('value', value);
    }
}

{
    // 状态机
    let state = function* () {
        while (1) {
            yield 'A';
            yield 'B';
            yield 'C';
        }
    }
    let status = state();
    console.log(status.next()); // {value: "A", done: false}
    console.log(status.next()); // {value: "B", done: false}
    console.log(status.next()); // {value: "C", done: false}
    console.log(status.next()); // {value: "A", done: false}
    console.log(status.next()); // {value: "B", done: false}
}

// {
//   let state=async function (){
//     while(1){
//       await 'A';
//       await 'B';
//       await 'C';
//     }
//   }
//   let status=state();
//   console.log(status.next());
//   console.log(status.next());
//   console.log(status.next());
//   console.log(status.next());
//   console.log(status.next());
// }
//

{
    let draw = function (count) {
        //具体抽奖逻辑
        console.info(`剩余${count}次`)
    }
    // 通过 generator 进行变量的判断
    let residue = function* (count) {
        while (count > 0) {
            count--;
            yield draw(count);
        }
    }

    let star = residue(5);
    let btn = document.createElement('button');
    btn.id = 'start';
    btn.textContent = '抽奖';
    document.body.appendChild(btn);
    document.getElementById('start').addEventListener('click', function () {
        star.next();
    }, false)
}

{
    // 长轮询 事实与后端链接
    let ajax = function* () {
        yield new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve({
                    code: 0
                })
            }, 200);
        })
    }

    let pull = function () {
        let genertaor = ajax();
        let step = genertaor.next();
        step.value.then(function (d) {
            if (d.code != 0) {
                setTimeout(function () {
                    console.info('wait');
                    pull()
                }, 1000);
            } else {
                console.info(d);
            }
        })
    }

    pull();
}