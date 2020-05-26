# interview  
面试复习准备

## plan
1. 基础知识(js基础)  
	* 基本数据类型
		* 有几种数据类型
			Number/String/Boolean/Null/Undefined/Symbol 5种简单数据类型 Symbol为es6新加数据类型
		* typeOf输出
			typeOf(10) -> Number
			typeOf(NaN) -> Number(NaN为数字类型)

			typeOf(true) -> Boolean
			typeOf(false) -> Boolean

			typeOf("123") -> String
			typeOf("abc") -> String

			typeOf(undefined) -> undefined
			typeOf(a) -> undefined(不存在的变量)

			typeOf(null) -> object
			typeOf(Array) -> object
			typeOf(Object) -> object

			typeOf Symbol() -> symbol
		* instanceOf输出
			主要用于检测引用类型(左边是对象，右边是函数.根据对象的原形链往上找，如果原形链上有右边函数.prototype，返回true;否则返回false)
			eg: var obj = {}; obj instanceOf Object; //=> true; 
	* 文件系统
		* fs: 异步readFile() 同步readFileSync()
	* 网络
		* tcp/udp区别及使用场景
			TCP优点: 
				TCP提供一种面向连接的、可靠的字节流服务
				在一个TCP连接中，仅有两方进行彼此通信。广播和多播不能用于TCP
				TCP使用校验和，确认和重传机制来保证可靠传输
				TCP给数据分节(给每一个传送的数据字节都编号)进行排序，并使用累积确认保证数据的顺序不变和非重复
				TCP使用滑动窗口机制来实现流量控制，通过动态改变窗口的大小进行拥塞控制
			TCP缺点:
				UDP面向报文无连接的、尽最大努力交付，即不保证可靠交付
				慢，效率低，占用系统资源高，易被攻击 
				在传递数据之前，要先建连接，这会消耗时间，而且在数据传递时，确认机制、重传机制、拥塞控制机制等都会消耗大量的时间，而且要在每台设备上维护所有的传输连接，事实上，每个连接都会占用系统的CPU、内存等硬件资源。 而且，因为TCP有确认机制、三次握手机制，这些也导致TCP容易被人利用，实现DOS、DDOS、CC等攻击
			UDP优点: 
				快，比TCP稍安全 UDP没有TCP的握手、确认、窗口、重传、拥塞控制等机制，UDP是一个无状态的传输协议，所以它在传递数据时非常快。没有TCP的这些机制，UDP较TCP被攻击者利用的漏洞就要少一些
			UDP缺点:
				不可靠，不稳定 因为UDP没有TCP那些可靠的机制，在数据传递时，如果网络质量不好，就会很容易丢包 
			
			什么时候应该使用TCP： 当对网络通讯质量有要求的时候，比如：整个数据要准确无误的传递给对方，这往往用于一些要求可靠的应用，比如HTTP、HTTPS、FTP等传输文件的协议，POP、SMTP等邮件传输的协议。 在日常生活中，常见使用TCP协议的应用如下： 浏览器，用的HTTP FlashFXP，用的FTP Outlook，用的POP、SMTP Putty，用的Telnet、SSH QQ文件传输 ………… 
			什么时候应该使用UDP： 当对网络通讯质量要求不高的时候，要求网络通讯速度能尽量的快，这时就可以使用UDP。 比如，日常生活中，常见使用UDP协议的应用如下： QQ语音 QQ视频 TFTP ……

		* 三次握手，四次挥手原理（手写一遍）
			TCP 固定首部20个字节
	* 闭包
	* npm包
	* 原型链
	* this问题
	* class
	* 工厂模式

2. node高级 
	* 事件循环原理
	* 异步解决方案
	* 性能
		node php java
	* express
		各版本特点
	* redis
		各版本特点/集群/原理
	* mongodb
		各版本特点 是否支持rollback/单点
		索引
	* queue
		使用场景
	* 自带库函数、三方库函数
	* 堆栈
	* 多进程

3. 算法复习
	* hashMap原理
	* 数组
	* 链表
	* 排序
		冒泡	
	 	快排
	* 汉诺塔
	* mongodb&Mysql内部算法

4. linux
	* 常用命令
	* 高并发实现
	* 带宽、流量、pv、uv、内存
