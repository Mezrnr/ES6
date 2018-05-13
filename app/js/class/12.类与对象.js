{
    // 基本定义和生成实例
    class Parent {
        // 设置默认值
        constructor(name = 'mukewang') {
            this.name = name;
        }
    }
    let v_parent = new Parent('v');
    console.log('构造函数和实例', v_parent);
}

{
    // 继承
    class Parent {
        constructor(name = 'mukewang') {
            this.name = name;
        }
    }

    class Child extends Parent {

    }

    console.log('继承', new Child());
}

{
    // 继承传递参数
    class Parent {
        constructor(name = 'mukewang') {
            this.name = name;
        }
    }

    class Child extends Parent {
        constructor(name = 'child') {
            // 覆盖父类的值 放在第一行
            super(name);
            this.type = 'child';
        }
    }

    console.log('继承传递参数', new Child('hello'));
}

{
    // getter,setter
    class Parent {
        constructor(name = 'mukewang') {
            this.name = name;
        }
        // 读取属性
        get longName() {
            return 'mk' + this.name
        }
        // 设置属性
        set longName(value) {
            this.name = value;
        }
    }

    let v = new Parent();
    console.log('getter', v.longName); // mkmukewang
    v.longName = 'hello';
    console.log('setter', v.longName); // mkhello
}

{
    // 静态方法
    class Parent {
        constructor(name = 'mukewang') {
            this.name = name;
        }
        // 静态方法
        static tell() {
            console.log('tell');
        }
    }

    Parent.tell(); // tell 用类调用 不是用类的实例调用

}

{
    // 静态属性
    class Parent {
        constructor(name = 'mukewang') {
            this.name = name;
        }

        static tell() {
            console.log('tell');
        }
    }

    Parent.type = 'test';

    console.log('静态属性', Parent.type); // 直接在类上定义


}