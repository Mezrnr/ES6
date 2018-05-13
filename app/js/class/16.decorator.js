// 类修饰器 修改类的行为 扩展类的功能
// npm i babel-plugin-transform-decorators-legacy --save-dev
{
    //  本身 修改名称 该属性的描述对象
    let readonly = function (target, name, descriptor) {
        descriptor.writable = false;
        return descriptor
    };

    class Test {
        @readonly
        time() {
            return '2017-03-11'
        }
    }

    let test = new Test();

    // test.time=function(){
    //   console.log('reset time');
    // };

    console.log(test.time());
}


{
    let typename = function (target, name, descriptor) {
        target.myname = 'hello';
    }

    @typename
    class Test {

    }

    console.log('类修饰符', Test.myname);
    // 第三方库修饰器的js库：core-decorators; npm install core-decorators
}

{
    // 可以用作日志的收集
    let log = (type) => {
        return function (target, name, descriptor) {
            let src_method = descriptor.value; // 原始的函数体
            descriptor.value = (...arg) => {
                src_method.apply(target, arg); // 原来的方法先执行
                console.info(`log ${type}`); 
            }
        }
    }

    class AD {
        @log('show')
        show() {
            console.info('ad is show') 
        }
        @log('click')
        click() {
            console.info('ad is click');
        }
    }

    let ad = new AD();
    ad.show();
    ad.click();
}