# Coursera笔记
> Coursera，启动！



## HTML, CSS, and Javascript for Web Developers

### Browser-Sync使用


### HTML

#### 第8讲 字符实体引用

- 对于字符 `<`（less than），采用 `&lt;` 进行转义。
- 对于字符 `>`（great than），采用 `&gt;` 进行转义。
- 对于字符 `&`（ampersand），采用 `&amp;` 进行转义。
<br />

- 对于字符 `©` (corpright)，采用 `&corp;` 进行转义。
- 对于字符 `"` (quote)，采用 `&quot;` 进行转义。
<br />

- `&nbsp;` （non-breaking&nbsp;space）用于避免多个单词分开换行。
	- 尽量不要将该符号滥用于留出多个空格。
<br />

注意：不要忘记分号。
<br />


#### 第9讲 创建链接

`<a href="www.baidu.com">打开百度</a>` 

- `href` 属性，配置跳转地址：
	- 可以填绝对路径。
		- 例如 `www.baidu.com`
	- 可以填相对路径。
		- 目标如果和当前页面在同一个文件夹下，直接填文件名即可。例如 `index.html`
		- 如果在子文件夹下，需要填写 `site/index.html` 
		- 如果在父文件夹下，需要填写 `../site/index.html`
	- 可以填片段标识。
	    - 例如 `#section1` 。
	    - 注意，需要先在其他元素中添加 `name="section1"` 或 `id="section1"` 属性。
- `target` 属性，配置打开链接的地方：
	- `_blank` 在新开页签打开链接。
	- `_self` 当前页面打开链接，如果有多个frame，会在frame里打开。
	- `_top` 在当前页签打开链接，可以无视frame。
	
#### 第10讲 显示图像

`<img src="路径" width="200" height="200" alt="图片备注">`

- 图片是内联元素，并且只有一个空标签，没有闭合标签。
- `src` 属性基本等同于链接的 href 属性。
- `width` 和 `height` 属性设置图片宽高，建议都加上。
- `alt` 属性用于帮助视障用户，以及无法查看图片时提供说明。
- `title` 属性在指针悬停时提供信息


### CSS3

#### 第13讲 元素、类和ID选择器

- 元素选择器，指定元素名称即可
```
p {    //要改变样式的元素名称
	color: bule;
}
```
<br />

- 类选择器，需要给元素指定所属类
```
.class1 {    //点+类名，之间不允许空格
	color: blue;
}
```
```
...
<p class="class1">...</p>    //给元素添加类，不需要加上“.”
...
```
<br />

- ID选择器，需要给元素指定ID
```
#name {    //#+ID，之间不允许空格
	color: blue;
}
```
```
...
<p id="name">...</p>    //给元素添加ID，不需要加上“#”
...
```
<br />

不同类型的选择器可以共享声明：
```
div, .class1 {    //所有div元素和属于class1类的元素，文字都会变成蓝色
	color: blue;
}
```
<br />

#### 第14讲 组合选择器

- 元素+类选择器
```
p.big {    //所有p元素且类型为big的，中间没有空格
	font-size: 20px;
}
```
<br />

- 子选择器
```
article > p {    //所有article元素下的直接子p元素，所以不包括 article > div > p
	color: blue;
}
```
<br />

- 后代选择器
```
article p {    //所有article元素下的所有p元素，包括 article > div > p 
	color: blue;
}
```
<br />

可以根据这三种语法对不同选择器进行组合
- `.class1.class2` 可以指定同时拥有两种样式的元素

也还有一些目前没讲到的选择器
<br />

#### 第15讲 伪类选择器

用冒号+预定义的伪类名指定

- `:link` 链接的样式

- `:visited` 访问过的链接的样式

- `:hover` 悬停的样式

- `:active` 点击的样式

- `:nth-child(...)` 针对某元素下的某些子元素，可以输入数字，也可以是符合规则的，如奇数偶数等

- 以及其他很多……







# Git笔记

## 《Github入门与实践》

### Git初始设置

```
$ git config --global user.name "Firstname Lastname"
```
设置姓名，用希望的昵称替换 `Fistname Lastname` 部分。
<br />

```
$ git config --global user.email "your_email@example.com"
```
设置邮箱地址，用希望的邮箱替换 `your_email@example.com` 部分。
<br />

```
$ git config --global color.ui auto
```
提高命令输出可读性。
<br />

完成后会在“~/.gitconfig”中生成配置文件，也可以直接编辑保存。

### Github设置SSH Key

> 如果已经创建过，请用现有的密钥进行设置。<br />
> 如有多台设备，可以复制“~/.ssh”文件夹。

#### 生成密钥

```
$ ssh-keygen -t rsa -C "your_email@example.com"
```
创建SSH Key，用**注册github的邮箱**替换 `your_email@example.com` 部分，<br />
会出现以下结果：
```
$ ssh-keygen -t rsa -C "your_email@example.com"
Generating public/private rsa key pair.
Enter file in which to save the key
(/Users/your_user_directory/.ssh/id_rsa):    //按回车键
Enter passphrase (empty for no passphrase):     //输入密码，可以留空，这样不用每次提交都输入
Enter same passphrase again:    //再次输入密码，两次输入都不会显示，需要盲打
```
设置完密码后会出现以下结果：
```
Your identification has been saved in /Users/your_user_directory/.ssh/id_rsa.
Your public key has been saved in /Users/your_user_directory/.ssh/id_rsa.pub.
The key fingerprint is:
【fingerprint值】 your_email@example.com
The key's randomart image is:
【略】
```
在用户目录下生成的 id_rsa 文件是私有密钥，id_rsa.pub 是公开密钥。

#### 在Github添加公开密钥

打开Github账户找到SSH Keys设置界面，添加密钥。<br />
在 Title 中输入希望的密钥名称。<br />
打开 id_rsa.pub 文件，内容如下：
```
$ cat ~/.ssh/id_rsa.pub
ssh-rsa 【公开密钥的内容】 your_email@example.com
```
粘贴 `ssh-rsa 【公开密钥的内容】 your_email@example.com` 到需要填写的 Key 部分。<br />
添加完成后，就可以用手中的私人密钥与 GitHub 进行认证和通信了。
```
$ ssh -T git@github.com
The authenticity of host 'github.com (207.97.227.239)' can't be established.
RSA key fingerprint is 【fingerprint值】.
Are you sure you want to continue connecting (yes/no)? 		//输入yes
```
出现如下结果即为成功:
```
Hi hirocastest! You've successfully authenticated, but GitHub does not provide shell access.
```



## 一些Git命令

`$ git remote add github.com:【github-book/git-tutorial.git】`
- 用 git remote add命令将在 GitHub 上创建的仓库路径为 `git@github.com:用户名/仓库名` ，并将其设置成本地仓库的远程仓库。
<br />

`git push -u origin main`
- `-u` 能设置本地仓库当前分支的上游（此处为 origin 的 main 分支），下次获取或提交可以不用再次指定
<br />




