const Utils = {
    /**
     * 格式化给的时间戳为字符串
     * @param timestamp 当前时间戳或者时间字符串
     * @param frmtstr 格式化规则
     */
    format: function (frmtstr = "yyyy-MM-dd hh:mm:ss", timestamp) {
        let date = new Date(timestamp);
        const formatRegs = {
            "y+": date.getFullYear(),
            "M+": date.getMonth() + 1,
            "d+": date.getDate(),       // 日
            "h+": date.getHours(),      // 时
            "m+": date.getMinutes(),    // 分
            "s+": date.getSeconds()     // 秒
        };
        if (/(y+)/i.test(frmtstr)) {
            frmtstr = frmtstr.replace(RegExp.$1, (formatRegs["y+"] + "").slice(0, RegExp.$1.length));
        }
        for (let key in formatRegs) {
            if (new RegExp("(" + key + ")").test(frmtstr)) {
                frmtstr = frmtstr.replace(RegExp.$1, RegExp.$1.length === 1 ? formatRegs[key] : ("00" + formatRegs[key]).slice(-RegExp.$1.length));
            }
        }
        return frmtstr;
    },

    timeNow: function (frmtstr = "yyyy-MM-dd hh:mm:ss") {
        return this.format(frmtstr, Date.now());
    },

    getType: function (data) {
        let res = Object.prototype.toString.call(data).toLowerCase();
        let type = Array.prototype.slice.call(res).slice(8, -1).join('');
        return type;
    },

    isPrimitiveType: function(data) {
        let type = this.getType(data);
        return ['string', 'number', 'boolean'].indexOf(type) > -1 ? true : false;
    },

    isReferenceType: function(data) {
        let type = this.getType(data);
        return ['function', 'object', 'array'].indexOf(type) > -1 ? true : false;
    }
}

module.exports = Utils;