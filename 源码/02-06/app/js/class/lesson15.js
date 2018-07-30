

// 什么是异步：这里又一个概念 promise是异步编程的一个概念
/* a执行完就执行B ，在程序上怎么设置a执行完就执行b,这个在程序上有两种方式，
一种是回调，一种是事件触发*/

/*1. 模拟ajax的过程  */
{
    let ajax = function (callback) {
        console.log('执行')
        setTimeout(function () {
            callback && callback.call()
        }, 1000)
    }
    ajax(function () {
        console.log('timeout1')
    })
}

//用回调处理代码很复杂，那个在前那个在后很难辨别

{
    let ajax = function () {
        console.log('执行2')
        return new Promise(function (resolve, reject) {//resolve执行下一个操作，reject终断当前操作
            setTimeout(function () {
                resolve()
            }, 1000)
        })
    };


    ajax().then(function () {//为什么有.then,因为ajax执行完之后返回的是promise实例，而这个实例是由.then方法表示要执行下一步，而这个then的参数，这个函数体就表示下一步
        console.log('promise', 'timeout2')
    })


}

{
    let ajax = function () {
        console.log('执行3')
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve()
            }, 1000)
        })
    };


    ajax().then(function () {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve()
            }, 2000)
        })
    }).then(function () {
        console.log('timeout3')
    })


}

//如果在中间某一步出错了，我怎么来捕获错误

/* {
    let ajax = function (num) {
        console.log('执行4')
        return new Promise(function (resolve, reject) {
            if (num > 5) {
                resolve()
            } else {
                throw new Error("出错了")
            }
        })
    }
    ajax(4).then(function () {
        console.log('log', 6);
    }).catch(function (err) {
        console.log('catch', err)
    });

    ajax(3).then(function () {
        console.log('log', 3);
    }).catch(function (err) {
        console.log('catch', err)
    });
} */

{
    //所有图片加载完再添加到页面
    function loadImg(src) {
        return new Promise((resolve, reject) => {
            let img = document.createElement('img');
            img.src = src;
            img.onload = function () {
                resolve(img);
            }
            img.onerror = function (err) {
                reject(err)
            }
        })
    }

    function showImgs(imgs) {
        imgs.forEach(function (img) {
            document.body.appendChild(img);
        })
    }
/* Promise.all,这个all表示把多个promise实例当作一个promise实例，是说all下面的就是一个数组，数组传进来多个promise实例，当所有promise状态发生改变的时候，那么
这个新的promise实例才会跟着发生变化，所以在这里的意思就是说我们下面的三张图片所有的状态都完成以后才会触发新的promise对象， */
    Promise.all([
        loadImg('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR88PwC9XjkYupZuW5MU-mDkFMiHAGHAcrQMoM0oVhZaf4fTxnC'),
        loadImg('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYyyn0ELRPwHCwsRkAKAujpiNvR2b4gdzLpJtn4UnrpR1cIMhB'),
        loadImg('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF2H7-dbXjZI56YdOHhm6LRZK9bbzAo8ZXqRHKE2iYLQJwt2dH'),
    ]).then(showImgs);

   /*  loadImg本来就是一个promise实例，这个实例做加载的动作，将三个图片加载动作放在promise all这个函数里面形成一个新的promise,当三张图片都加载完成以后才会触发显示图片的逻辑。 */
}


//和primise.raise 和prmise.all相反的一个意思，我有三张图片位于三个不同的位置，页面要加载一张图片，我也不知道那张图片的加载时间较快，我三张图片有三个来源，加载一个就可以，因此先到先得

{
    function loadImg(src) {
        return new Promise((resolve, reject) => {
            let img = document.createElement('img');
            img.src = src;
            img.onload = function () {
                resolve(img);
            }
            img.onerror = function (err) {
                reject(err)
            }
        })
    }

    function showImgs(img){
        let p=document.createElement('p');
        p.appendChild(img);
        document.body.appendChild(p);
    }

    /* race是说有一个状态率先改变，那么race实例也发生改变 */
    Promise.race([
        loadImg('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR88PwC9XjkYupZuW5MU-mDkFMiHAGHAcrQMoM0oVhZaf4fTxnC'),
        loadImg('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYyyn0ELRPwHCwsRkAKAujpiNvR2b4gdzLpJtn4UnrpR1cIMhB'),
        loadImg('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF2H7-dbXjZI56YdOHhm6LRZK9bbzAo8ZXqRHKE2iYLQJwt2dH')
    ]).then(showImgs)
}