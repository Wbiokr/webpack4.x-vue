no-for-in-array: true, //不允许使用for in 遍历数组
"no-any":false, //允许使用any
"no-empty-interface":true,//禁止空接口
"no-import-side-effect":true//禁止導入帶有副作用的語句
"no-inferrable-types":[true, "ignore-params", "ignore-properties"],//不允許將變量設置為數字、關鍵字等
no-magic-numbers: [true,1,2,3], //不允许在变量赋值之外使用常量数值。当没有指定允许值列表时，默认允许-1,0和1
no-namespace: [ true,"allpw-declarations"], //不允许使用内部modules和命名空间
no-non-null-assertion: false , //允许使用!后缀操作符的非空断言。
no-parameter-reassignment: true, //不允许重新分配参数
no-reference: true, // 禁止使用/// <reference path=> 导入 ，使用import代替
no-unnecessary-type-assertion： true, //如果类型断言没有改变表达式的类型就发出警告
no-var-requires： true, //不允许使用var module = require("module"),用 import foo = require('foo')导入
only-arrow-functions：[true，"allow-declarations"，"allow-named-functions"], //允许箭头表达式，不需要传统表达式 ； 允许独立的函数声明  ；允许表达，function foo() {}但不是function() {}
prefer-for-of:true,  //建议使用for(..of)
promise-function-async: true, 要求异步函数返回promise
typedef: [true, "call-signature", "parameter", "member-variable-declaration"], //需要定义的类型存在
typedef-whitespace： true, //类型声明的冒号之前是否需要空格
unified-signatures： true, //重载可以被统一联合成一个
ban-comma-operator：true, //禁止逗号运算符。

## function專用
await-promise： true,  //警告不是一个promise的await 
curly: true, //for if do while 要有括号
import-blacklist:true,
label-postion: true, //允许在do/for/while/swith中使用label
no-arg:true, //不允许使用 argument.callee
no-bitwise:false, //允许使用按位运算符
no-conditional-assignmen: false, //允许在do-while/for/if/while判断语句中使用赋值语句
no-console：true, //能使用console
no-construct: true, //不允许使用 String/Number/Boolean的构造函数
no-debugger： true, //不允许使用debugger
no-duplicate-super: true, //构造函数两次用super会发出警告
no-empty:true, //不允许空的块
no-eval: true, //不允许使用eval
no-floating-promises: true, //必须正确处理promise的返回函数
no-for-in-array: true, //不允许使用for in 遍历数组
no-implicit-dependencies: true, //不允许在项目的package.json中导入未列为依赖项的模块
no-inferred-empty-object-type： true， //不允许在函数和构造函数中使用{}的类型推断
no-invalid-template-strings： true, //警告在非模板字符中使用${
no-invalid-this：true, //不允许在非class中使用 this关键字
no-misused-new: true, //禁止定义构造函数或new class
no-null-keyword: true, //不允许使用null关键字
no-object-literal-type-assertion：true, //禁止objext出现在类型断言表达式中
no-return-await：true, //不允许return await
arrow-parens： true, //箭头函数定义的参数需要括号