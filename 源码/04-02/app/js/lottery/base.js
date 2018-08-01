import $ from 'jquery';
class Base {
    /* 
    奖金 玩法 说明
    [initPlayList 初始化奖金和玩法说明] 
    return 
     */

    initPlayList() {
        this.play_list.set('r2', {
            bonus: 6,
            tip: '从01～11中任选2个或多个号码，所选号码与开奖号码任意三个号码相同，即中奖<em>6</em>元',
            name: '任二'
        })
            .set('r3', {
                bonus: 19,
                tip: '从01～11中任选3个或多个号码，所选号码与开奖号码任意三个号码相同，即中奖<em>19</em>元',
                name: '任三'
            })
            .set('r4', {
                bonus: 78,
                tip: '从01～11中任选4个或多个号码，所选号码与开奖号码任意三个号码相同，即中奖<em>78</em>元',
                name: '任四'
            })
            .set('r5', {
                bonus: 540,
                tip: '从01～11中任选5个或多个号码，所选号码与开奖号码任意三个号码相同，即中奖<em>540</em>元',
                name: '任五'
            })
            .set('r6', {
                bonus: 90,
                tip: '从01～11中任选6个或多个号码，所选号码与开奖号码任意三个号码相同，即中奖<em>90</em>元',
                name: '任六'
            })
            .set('r7', {
                bonus: 26,
                tip: '从01～11中任选7个或多个号码，所选号码与开奖号码任意三个号码相同，即中奖<em>26</em>元',
                name: '任七'
            })
            .set('r8', {
                bonus: 9,
                tip: '从01～11中任选5个或多个号码，所选号码与开奖号码任意三个号码相同，即中奖<em>9</em>元',
                name: '任五'
            })
    }
    /* [initNumber 初始化号码 ]
    
    return */
    initNumber() {
        for (let i = 0; i < 12; i++) {
            //set写法是不允许重复的，这个的号码01,02,03也确实是不重复的
            this.initNumber.add(('' + i).padStart(2, 0))
        }
    }

    /* 设置一下遗漏数据,先清空，再重新赋值
     */
    setOmit(omit) {
        let self = this;
        self.omit.clear();
        for (let [index, item] of omit.entries()) {
            self.omit.set(index, item)
        }
        $(self.omit_el).each(function(index,item){
            $(item).text(self.omit.get(index))

        })
    }

    /* 设置开奖
    什么时候用map,什么时候用set要注意区分
     */
    setOpenCode(code){
        let self=this;
        self.open_code.clear();
        for(let item of code.values()){
            self.open_code.add(item);
        }
        self.updateOpenCode && self.updateOpenCode.call(self,code);
    }

    /* 号码选中取消 */
    toggleCodeActive(e){
        let self=this;
        let $cur=$(e.currentTarget);
        $cur.toggleClass('btn-boll-active');
        self.getCount();
    }
}