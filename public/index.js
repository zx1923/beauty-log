
import BeautyLog from '../src/beautyLog';

const log = new BeautyLog({
  timeFormat: "hh:mm:ss",
  jsonFormat: 2
});

let info = {
  "name": "json",
  "page": 88,
  "isNonProfit": true,
  "address": {
    "street": "科技园路.",
    "city": "江苏苏州",
    "country": "中国"
  },
  "links": [
    {
      "name": "Google",
      "url": "http://www.google.com"
    }
  ]
};
log.debug(document.getElementsByClassName('info'))
log.debug("hello wolrd.")
log.debug(info);
log.debug(1234567890);
log.success("this is a success message");
log.debug([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
log.info(true, false);
log.error("this is an error message.");

log.setOption("showType", false);
log.debug("这行输出不再显示数据类似");

log.setOption("showType", true);
log.group("Group Console");
log.debug("hello wolrd.")
log.debug(1234567890);
log.debug([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
log.groupEnd();

log.warn("this is a warnning message");