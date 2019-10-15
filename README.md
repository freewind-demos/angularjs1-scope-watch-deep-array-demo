AngularJS1 Scope "$watch" Deep Array Demo
=========================================

可以使用`$scope`的`$watch`来监听某些值的改变。

注意：watch的值发生变化时，angular是通过引用来判断其是否改变，所以如果返回的是数组或者object，就算内容完全相同，也会视为不同的对象。
此时应该将`$watch`的第三个参数设为`true`，否则会无限循环，直到报错：

```
Uncaught Error: [$rootScope:infdig] 10 $digest() iterations reached. Aborting!
```

```
npm install
npm run demo
```
