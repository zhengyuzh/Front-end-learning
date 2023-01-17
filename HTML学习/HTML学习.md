## 1、HTML简介

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>菜鸟教程(runoob.com)</title>
</head>
<body>
 
<h1>我的第一个标题</h1>
 
<p>我的第一个段落。</p>
 
</body>
</html>
```

### 1.1 实例解析


![在这里插入图片描述](https://img-blog.csdnimg.cn/9ea565f50d264f1d89b60c8402d6fd7e.png)


- **<!DOCTYPE html>** 声明为 HTML5 文档
- **<html>** 元素是 HTML 页面的根元素
- **<head>** 元素包含了文档的元（meta）数据，如 **<meta charset="utf-8">** 定义网页编码格式为 **utf-8**。
- **<title>** 元素描述了文档的标题
- **<body>** 元素包含了可见的页面内容
- **<h1>** 元素定义一个大标题
- **<p>** 元素定义一个段落

**注：**在浏览器的页面上使用键盘上的 F12 按键开启调试模式，就可以看到组成标签。

---

### 1.2 什么是html？

**HTML 是用来描述网页的一种语言**。

- HTML 指的是超文本标记语言: **H**yper**T**ext **M**arkup **L**anguage
- HTML 不是一种编程语言，而是一种**标记**语言
- 标记语言是一套**标记标签** (markup tag)
- HTML 使用标记标签来**描述**网页
- HTML 文档包含了HTML **标签**及**文本**内容
- HTML文档也叫做 **web 页面**

1.3 html标签

---

### 1.3 HTML 标签

**HTML 标记标签通常被称为 HTML 标签 (HTML tag)。**

- HTML 标签是由*尖括号*包围的关键词，比如 <html>
- HTML 标签通常是*成对出现*的，比如 <b> 和 </b>
- 标签对中的第一个标签是*开始标签*，第二个标签是*结束标签*
- 开始和结束标签也被称为*开放标签*和*闭合标签*

```
<标签>内容</标签>
```

1.4 html 元素

### 1.4 HTML 元素

"HTML 标签" 和 "HTML 元素" 通常都是描述同样的意思.

但是严格来讲, 一个 HTML 元素包含了开始标签与结束标签，如下实例:

HTML 元素:

```
<p>这是一个段落。</p>
```



## 2、HTML基础

### 2.1 HTML 标题

HTML 标题（Heading）是通过`<h1> - <h6>` 标签来定义的。

```html
<h1>这是一个标题</h1>
<h2>这是一个标题</h2>
<h3>这是一个标题</h3>
```



### 2.2 HTML 段落

 HTML 段落是通过标签 `<p>` 来定义的。

```html
<p>这是一个段落。</p>
<p>这是另外一个段落。</p>
```



### 2.3 HTML 链接

HTML 链接是通过标签 <a> 来定义的。

```html
<a href="https://www.baidu.com">这是一个链接</a>
```



### 2.4 HTML 图像

HTML 图像是通过标签 <img> 来定义的.

```html
<img decoding="async" src="./images/home.png" width="258" height="139" />
```

