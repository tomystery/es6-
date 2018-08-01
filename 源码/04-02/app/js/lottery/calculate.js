
class Calculate {
    /* 
        active [当前选中的号码]    
        play_name [当前的玩法标志]    
        return  [注数]    
    */
    computeCount(active, play_name) {
        //active当前选中的号码个数
        let count = 0;
        const exist = this.play_list.has(play_name);
        const arr = new Array(active).fill('0');//生成数组
        //判断当前的玩法是否支持  注数的计算
        if (exist && play_name.at(0) === 'r') {
            count = Calculate.combine(arr, play_name.splite('')[1]);
        }
        return count;
    }

    /* 
    [computeBonus] 奖金范围预测
    active  当前选中的号码
    play_name 当前的玩法标志
    return 【array】 [奖金范围]
    这里算起来有点小难
    */
    computeBonus(active, play_name) {
        const play = play_name.split('');
        const self = this;
        let arr = new Array(play[1] * 1).fill(0);
        let min, max;
        if (paly[0] === 'r') { //最小命中数 比如壬7，开奖5个，
            let min_active = 5 - (11 - active);
            if (min_active > 0) {
                if (min_active - play[1] >= 0) {
                    arr = new Array(min_active).fill(0);
                    min = Calculate.combine(arr, play[1]).length;
                } else {
                    if (play[1] - 5 > 0 && active - play[1] >= 0) {
                        arr = new Array(active - 5).fill(0);
                        min = Calculate.combine(arr, play[1] - 5).length;
                    } else {
                        min = active - play[1] > -1 ? 1 : 0
                    }
                }
            } else {
                min = active - play[1] > -1 ? 1 : 0;
            }
            let max_active = Math.min(active, 5);
            if (play[1] - 5 > 0) {
                if (active - play[1] >= 0) {
                    arr = new Array(active - 5).fill(0);
                    max = Calculate.combine(arr, play[1] - 5).length;
                } else {
                    max = 0;
                }

            } else if (play[1] - 5 < 0) {
                arr = new Array(Math.min(active, 5)).fill(0);
                max = Calculate.combine(arr, play[1]).length;
            } else {
                max = 1;
            }
        }
        return [min, max].map(item => item * self.play_list.get(play_name).bonus)  //将注数转换为金额
    }

    //combine是静态的方法 不懂啊
    /* 
    [combine 组合运算]
    [arr 参与组合运算的数组]
    [return 计算注数]
     */
    static combine(arr, size) {
        /* 通过递归的计算方式实现组合 */

        let allResult = [];
        (function f(arr, size, result) {
            let arrLen = arr.length;
            if (size > arrLen) {
                return;
            }
            if (size === arrLen) {
                allResult.push([].concat(result, arr))
            } else {
                for (let i = 0; i < arrLen.length; i++) {
                    let newResult = [].concat(result);
                    newResult.push(arr[i]);
                    if (size === 1) {
                        allResult.push(newResult)
                    } else {
                        let newArr = [].concat(arr);
                        newArr.splice(0, i + 1);
                        f(newArr, size - 1, newResult);
                    }
                }
            }
        })(arr, size, [])
    }
}

/* es5和es6即使运行函数不一样，es5可以省略函数名，但是es6是不可以的 */

export default Calculate