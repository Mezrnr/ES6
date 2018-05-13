{
    let obj = {
        time: '2017-03-11',
        name: 'net',
        _r: 123
    };
    // Proxy 代理
    let monitor = new Proxy(obj, {
        // 拦截对象属性的读取 
        get(target, key) {
            return target[key].replace('2017', '2018')
        },
        // 拦截对象设置属性
        set(target, key, value) {
            if (key === 'name') {
                return target[key] = value;
            } else {
                return target[key];
            }
        },
        // 拦截key in object操作
        has(target, key) {
            if (key === 'name') {
                return target[key]
            } else {
                return false;
            }
        },
        // 拦截delete
        deleteProperty(target, key) {
            if (key.indexOf('_') > -1) {
                delete target[key];
                return true;
            } else {
                return target[key]
            }
        },
        // 拦截Object.keys,Object.getOwnPropertySymbols,Object.getOwnPropertyNames
        ownKeys(target) {
            return Object.keys(target).filter(item => item != 'time')
        }
    });

    console.log('get', monitor.time); // 2017-03-11

    monitor.time = '2018';
    monitor.name = 'mukewang';
    console.log('set', monitor.time, monitor); //2018-03-11

    console.log('has', 'name' in monitor, 'time' in monitor); // true false

    // delete monitor.time;
    // console.log('delete',monitor);
    //
    // delete monitor._r;
    // console.log('delete',monitor);
    console.log('ownKeys', Object.keys(monitor)); // {name, _r}

}

{
    let obj = {
        time: '2017-03-11',
        name: 'net',
        _r: 123
    };

    // Reflect 替换 直接对obj的获取
    console.log('Reflect get', Reflect.get(obj, 'time'));
    Reflect.set(obj, 'name', 'mukewang');
    console.log(obj);
    console.log('has', Reflect.has(obj, 'name')); // true
}




{
    // 解耦
    function validator(target, validator) {
        // 拦截
        return new Proxy(target, {
            _validator: validator,
            set(target, key, value, proxy) {
                // 判断是否有这个key
                if (target.hasOwnProperty(key)) {
                    let va = this._validator[key];
                    if (!!va(value)) {
                        return Reflect.set(target, key, value, proxy)
                    } else {
                        throw Error(`不能设置${key}到${value}`)
                    }
                } else {
                    throw Error(`${key} 不存在`)
                }
            }
        })
    }

    // 校验选项
    const personValidators = {
        name(val) {
            return typeof val === 'string'
        },
        age(val) {
            return typeof val === 'number' && val > 18
        },
        mobile(val) {

        }
    }

    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            this.mobile = '1111';
            return validator(this, personValidators)
        }
    }

    const person = new Person('lilei', 30);

    console.info(person);

    person.name = 'Han mei mei';

    console.info(person);
}