
const Utils = require("./utils");
const Theme = require("./theme/theme");


function _prevwork (colorType, ...objmsg) {
    let data = [], color = [];
    if (this.config.showTime) {
        data.push("%c" + Utils.timeNow(this.config.timeFormat));
        if (this.theme.datetime[colorType]) {
            color.push(this.theme.datetime[colorType]);
        }
        else {
            color.push(this.theme.datetime.default);
        }
    }
    return {data, color};
}

function _println (colorType, ...objmsg) {
    let {data, color} = _prevwork.call(this, colorType, ...objmsg);
    // 转字符串
    let msgs = objmsg.map(function (val, index) {
        let datatype = Utils.getType(val);
        let msgstr = '';
        if (this.config.showType) {
            msgstr = `%c[${datatype}]`;
            color.push(this.theme.datatype[colorType]);
            color.push(this.theme.msg[colorType])
        }
        else {
            color.push(this.theme.msg[colorType]);
        }
        let s = msgstr + "%c";
        switch (datatype) {
            case 'boolean':
            case 'number':
            case 'null':
            case 'undefined':
                return s + val.toString();
            case 'string':
                return s + val;
            case 'object':
                return s + JSON.stringify(val);
            case 'array':
                return s + '[' + val.join(', ') + ']';

            default:
                return s + val.toString()
        }
    }.bind(this));
    data.push(msgs.join(''));
    data = data.join('');
    let logstr = [data].concat(color);
    
    this.log(...logstr);
}

function BeautyLog (options = {}) {
    this.version = "1.0.6";
    this.config = {
        showTime: true,
        showType: true,
        timeFormat: 'yyyy-MM-dd hh:mm:ss'
    }
    this.config = Object.assign(this.config, options);
    // theme color
    this.theme = this.config.theme || Theme;

    this.log = console.log;

    // show version infomation
    this.labelkey("Beauty-Log", `Version: ${this.version}`);
}

BeautyLog.prototype.setOption = function (key, value) {
    if (typeof this.config[key] === 'undefined') return;
    this.config[key] = value;
}

BeautyLog.prototype.labelkey = function (key, value) {
    let data = `%c${key}%c${value}`;
    let color = [this.theme.key, this.theme.value];
    console.log(data, ...color);
}

BeautyLog.prototype.debug = function (...objmsg) {
    _println.call(this, "default", ...objmsg);
}

BeautyLog.prototype.error = function (...objmsg) {
    this.log = console.trace;
    _println.call(this, "error", ...objmsg);
    this.log = console.log;
}

BeautyLog.prototype.warn = function (...objmsg) {
    this.log = console.trace;
    _println.call(this, "warn", ...objmsg);
    this.log = console.log;
}

BeautyLog.prototype.success = function (...objmsg) {
    _println.call(this, "success", ...objmsg);
}

BeautyLog.prototype.info = function (...objmsg) {
    _println.call(this, "info", ...objmsg);
}

BeautyLog.prototype.group = function (...lables) {
    this.log = console.group;
    _println.call(this, "info", ...lables);
    this.log = console.log;
};

BeautyLog.prototype.groupEnd = console.groupEnd;
BeautyLog.prototype.clear = console.clear;

module.exports = BeautyLog;