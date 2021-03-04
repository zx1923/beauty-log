const log = new beautyLog({
    timeFormat: "hh:mm:ss"
});
log.debug("hello wolrd.")
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