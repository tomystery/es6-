{
    //generator基本定义

    let tell = function* () {
        yield 'a';
        yield 'b';
        return 'c';
    };

    let k = tell();
    console.log(k);
    console.log(k.next());
    console.log(k.next());
    console.log(k.next());
    console.log(k.next());
    /* gen返回的就是一个ite接口,知道怎么定义怎么使用就ok */
}

{
    /* gen和ite的关系，gen就是一个ite生成函数，所以可以直接把它赋值给simple.iterator,从而使这个对象也具备iterator接口，
     */

    //gen函数新的引用
    let obj = {};
    obj[Symbol.iterator] = function* () {
        yield 1;
        yield 2;
        yield 3;
    }

    for (let value of obj) {
        console.log('value', value)
    }
    console.log(obj);
}

{
    let state = function* () {
        while (1) {
            yield 'A'
            yield 'B'
            yield 'C'
        }
    }
    let status = state();
    console.log(status.next())
    console.log(status.next())
    console.log(status.next())
    console.log(status.next())
    console.log(status.next())

}

{
    /* let state=async function (){
        while(1){
            await 'A'
            await 'B'
            await 'C'
        }
    }
    let status=state();
    console.log(status.next())
    console.log(status.next())
    console.log(status.next())
    console.log(status.next())
    console.log(status.next()) */

    /* 这里的结果和上面的是一样的，但是这里要安装babel才能执行 */
}

//实例 ：什么时候用gen会发挥他强大的作用
{
    //抽奖次数的限制
    let draw = function (count) {
        //具体抽奖逻辑
        console.info(`剩余${count}次`)
    }

    let residue = function* (count) {
        while (count > 0) {
            count--;
            yield draw(count);
        }
    }

    let star = residue(5);
    let btn = document.createElement("button");
    btn.id = 'start';
    btn.textContent = '抽奖';
    document.body.appendChild(btn);
    document.getElementById('start').addEventListener('click', function () {
        star.next();
    }, false)
}


/* 长轮讯 服务端的某一个数据状态定期变化，我们前端需要定时去服务端取这个状态，
因为HTTP是无状态的连接，解决方法有两个，一个是websocket,一个是长轮询，因为websocket 浏览器兼容性不好，
长轮询是一个普遍的用法，通过gen使这个长轮询更加优雅*/

{
    //长轮询
    let ajax = function* () {
        yield new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve({ code: 0 })
            }, 200)
        })
    }

    let pull = function () {
        let generator = ajax();
        let step = generator.next();
        step.value.then(function (d) {
            if (d.code != 0) {
                setTimeout(function () {
                    console.log('wait');
                    pull();
                }, 1000)
            } else {
                console.log(d);
            }
        })
    }

    pull();
}

