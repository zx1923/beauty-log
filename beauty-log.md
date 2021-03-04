# beauty-log

beauty-log 是一个在浏览器上使用的 log 增强工具。

beauty-log 的功能：

- 增强 console 对象；
- 支持配色和文字高亮；
- 支持输出日志时间标记；
- 支持输出目标的数据类型；
- 配色可定制化；
- 可代替 console.log 、console.error 和 console.warn；
- 支持日志分组。

## 如何使用

可在 `dist` 目录下找到 `beauty-log.js` 文件，通过 script 标签引入即可：

```html
<script src="path/to/beauty-log.js"></script>
```

之后可以通过 new 创建 beautyLog 实例：

```js
const log = new beautyLog({
    showTime: true,			// 是否显示日志时间前缀
    showType: true,			// 是否显示目标的数据类型
    timeFormat: "hh:mm:ss"	// 如果 showTime 为 true，那么这里定义时间的格式
});
```

最后，通过 debug 方法即可输出调试信息：

```js
log.debug("hello world.");
```

![](E:\Sean\10-Js\JavaScript整理\03-项目\imgs\debug.png)

### options

创建 beautyLog 实例时可以进行简单的配置，支持的配置项有：

| 属性名     | 功能                                     | 默认值              |
| ---------- | ---------------------------------------- | ------------------- |
| showTime   | 是否显示时间前缀                         | true                |
| showType   | 是否显示数据类型                         | true                |
| timeFormat | 时间的格式，仅在 showTime 为 true 时有效 | yyyy-MM-dd hh:mm:ss |

当 showType 为 false 将不显示数据类型：

![](E:\Sean\10-Js\JavaScript整理\03-项目\imgs\debug_showtype_false.png)

既不显示时间，也不显示数据类型：

![](E:\Sean\10-Js\JavaScript整理\03-项目\imgs\debug_show_option_false.png)

运行时如需变更配置，可以通过 setOption(optionName, value) 来修改：

```js
// set showTime true
log.setOption("showTime", true);
log.debug("hello world.");
```

### API

- beautyLog.debug()
- beautyLog.error()
- beautyLog.warn()
- beautyLog.info()
- beautyLog.clear()
- beautyLog.group()
- beautyLog.groupEnd()
- beautyLog.labelkey()
- beautyLog.setOption()

---

#### beautyLog.debug(msgs)

输出调试信息，msgs 可以是普通类型，也可以是引用类型，如果是引用类型，将调用其内部的 toString() 方法转字符串后输出。

示例输出常见类型的数据：

```js
log.debug("this is a debug message");
log.debug(1234567890);
log.debug(true, false);
log.debug(1 === 2, null === undefined);
log.debug({ name: "Tom", age: 20 });
log.debug([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
log.debug(alert);
```

输出效果：

![](E:\Sean\10-Js\JavaScript整理\03-项目\imgs\debug_all_types.png)

---

#### beautyLog.error(msgs)

输出错误信息，内部通过调用 console.trace 来实现，输出效果如下：

![](E:\Sean\10-Js\JavaScript整理\03-项目\imgs\error.png)

---

#### beautyLog.warn(msgs)

输出警告信息，与 beautyLog.error 类似。

![](E:\Sean\10-Js\JavaScript整理\03-项目\imgs\warn.png)

---

#### beautyLog.info(msgs)

输出 infomation ，仅语义不同，功能上与 debug 类似。

![](E:\Sean\10-Js\JavaScript整理\03-项目\imgs\info.png)

---

#### beautyLog.clear()

清除控制台的全部输出。

---

#### beautyLog.group(msgs)

输出一组日志，需配合 `beautyLog.groupEnd()` 一起使用。

![](E:\Sean\10-Js\JavaScript整理\03-项目\imgs\group.png)

---

#### beautyLog.groupEnd(msgs)

标记一个输出组的结束，需与 `beautyLog.group()` 一起使用。

---

#### beautyLog.labelkey(key, value)

输出一个键值对标签。

![](E:\Sean\10-Js\JavaScript整理\03-项目\imgs\labelkey.png)

---

#### beautyLog.setOption(optionName, value)

设置 option 的某个属性值，optionName 见上表。



## License

MIT