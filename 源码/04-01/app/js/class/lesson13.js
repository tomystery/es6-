{
    //先创建一个类似于供应商的对象
    let obj = {
        time: '2017-03-11',
        name: 'net',
        _r: 123
    }

    //创建一个代理商
    let monitor = new Proxy(obj, {
        //拦截对象属性的读取
        get(target, key) {
            return target[key].replace('2017', '2018')

        },
        //拦截对象设置属性
        set(target, key, value) {//target值得就是这个obj对象那个，key指的是设置的那个属性，value指的是值你要设置成什么
            if (key === 'name') {
                return target[key] = value;
            } else {
                return target[key];
            }
        },
        //拦截key in object操作
        has(target, key) {
            //只暴露name属性，其他的都不暴露
            if (key === 'name') {
                return target[key]
            } else {
                return false;
            }
        },

        //拦截delete
        deleteProperty(target, key) {
            if (key.indexOf('_') > -1) {
                delete target[key];
                return true;
            } else {
                return target[key];
            }
        },

        //拦截Object.keys,Objet.getOwnPropertySymbols,Object.getOwnPropertyNames
        ownKeys(target) {
            return Object.keys(target).filter(item => item != 'time')
        }
    });

    console.log('get', monitor.time);
    monitor.time = '2018';
    monitor.name = 'vflvk';
    console.log('set', monitor.time, monitor);
    console.log('has', 'name' in monitor);

    /* delete monitor.time;
    console.log('delete',monitor)

    delete monitor._r;
    console.log('delete',monitor); */
    console.log('ownKeys', Object.keys(monitor));
}

//关于遍历会使用object.keys来遍历属性还有之前讲到的object.getOwnProperties,object.ownProperty,那么这些方法怎么样去拦截他们，有个方法是own.keys


{
    let obj = {
        time: '2017-03-11',
        name: 'net',
        _r: 123
    }

    console.log('Reflect get', Reflect.get(obj, 'time'));
    Reflect.set(obj, 'name', '霍尔果斯加行');
    console.log(obj);
    console.log('has', Reflect.has(obj, 'name'))
}


//一个解藕的校验模块 这里是非常不懂   24:25
{
    function validator(target, validator) {
        return new Proxy(target, {//这里target指的就是代理的实例
            _validator: validator,
            set(target, key, value, proxy) {
                if (target.hasOwnProperty[key]) {//判断当前的目标对象有没有key值
                    let va = this._validator[key];
                    if (!!va(value)) {
                        return Reflect.set(target, key, value, proxy)
                    } else {
                        throw Error(`不能设置${key}到${value}`)
                    }
                } else {//没有抛出异常
                    throw Error(`${key} 不存在`)
                }

            }

        })
    }

    const personValidators={//设置校验的条件
        name(val){
            return typeof val==='sting'
        },
        age(val){
            return typeof val==='number' && val>18
        }
    }

    class Person{
        constructor(name,age){
            this.name=name;
            this.age=age;
            this.mobile='1111';
            return validator(this,personValidators) //return返回一个proxy对象
        }
    }

    const person=new Person('lilei',30);
    console.info(person);
    person.name='han meimei';
    console.info(person)
}
//这样写和传统的有什么不同？通过代理把条件和业务本身完全隔离开