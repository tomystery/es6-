class Timer{
    countdown (end,update,handle){//end是截止时间，uodate是更新的回调，倒计时结束以后回调函数是什么
        const now=new Date().getTime();
        console.log(now);
        const self=this;
        if(now-end){//如果到了截止时间
            handle.call(self);
        }else{
            let last_time=end-now;
            const px_d=1000*60*60*24;//1天是多少ms
            const px_h=1000*60*60;//1小时是多少ms
            const px_m=1000*60;
            const px_s=1000;
            let d=Math.floor(last_time/px_d);
            let h=Math.floor((last_time-d*px_d)/px_h);
            let m=Math.floor((last_time-d*px_d-h*px_h)/px_m);
            let s=Math.floor((last_time-d*px_d-m*px_m)/px_s);
            let r=[];
            if(d>0){
                r.push(`<em>${d}</em>天`);
            }
            if(r.length || h>0){
                r.push(`<em>${h}</em>时`);
            }
            if(r.length || m>0){
                r.push(`<em>${h}</em>分`);
            }
            if(r.length || s>0){
                r.push(`<em>${s}</em>秒`)
            }
            self.last_time=r.join('');
            update.call(self,r.join(''));

            //调用countdown完成轮询的过程
            setTimeout(function(){
                self.countdown(end,update,handle);
            },1000);
        }
    }
}

export default Timer;