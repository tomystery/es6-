import $ from 'jquery';

class Interface {
    //直接写三个接口 
    //遗漏接口
    getOmit(issue) {
        let self = this;
        return new Promise((resolve, reject) => {
            $.ajax({
                url: '/get/omit',
                data: {
                    issue: issue
                },
                dataType: 'json',
                success: function (res) {
                    self.setOmit(res.data);
                    resolve.call(self, res)
                },
                error: function (err) {
                    reject.call(err)
                }
            })
        })
    }
/* 上面的有两个点，第一个是使用promise对象达到异步操作，这个是给调用对象的外部进行的
第二个，self.setOmit用对象的方法传递数据是为了在其他方法中用回调的方式解决，或者说
 */
    //获取开奖号码的接口
    getOpenCode(issue) {
        let self = this;
        return new Promise((resolve, reject) => {
            $.ajax({
                url: '/get/opencode',
                data: {
                    issue: issue
                },
                dataType: 'json',
                success: function (res) {
                    self.setOpenCode(res.data);
                    resolve.call(self, res)
                },
                error: function (err) {
                    reject.call(err)
                }

            })
        });
    }

    //获取当前状态
    getState(issue) {
        let self = this;
        return new Promise((resolve, reject) => {
            $.ajax({
                url: '/get/state',
                data: {
                    issue: issue
                },
                dataType: 'json',
                success: function (res) {
                    resolve.call(self, res)
                },
                error: function (err) {
                    reject.call(err)
                }

            })
        });
    }
}

export default Interface