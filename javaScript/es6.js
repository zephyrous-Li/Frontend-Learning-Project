// 1. 参数默认值
function sum(a, b = 1) {
  return a + b;
}

sum(1);

// 2. 剩余参数
function sum1(...args) {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
}
sum1(1, 3, 5, 7, 44, 2);

// 3. 展开运算符
const number = [1, 7, 8, 6, 45, 7, 2];
// 对数组展开
sum1(...number);
// 复制数组（浅克隆）
const arr2 = [...number];
// 复制对象（深克隆）
const obj1 = {
  name: "123",
  age: 123,
  loves: ["321", "311", "2123"],
};
const obj2 = {
  ...obj1,
  love: [...obj1.loves],
};

// 3. 在函数内判断函数调用方式（是否使用new）

function Persion() {
  // 创建构造函数时使用
  // new.target如果通过会返回函数本身，否则undefined
  if (new.target === undefined) {
    throw (Error = "没有使用new调用");
  }
}
// 4. 箭头函数
// 解决this指向问题
// 箭头函数没有this,arguments new.target,原型

// 5. 对象字面量语法
function creatUser(name, pwd, Id) {
  return { name, pwd, Id };
}
// 6. 方法简写
const user = {
  firstName,
  lastName,
  nickName() {
    this.firstName + this.lastName;
  },
};
// 7. 计算属性名

function setName() {
  return "name";
}
// 只要是表达式的值都可以放这里
// const prop1 = "name";
const prop1 = setName();

const user1 = {
  [prop1]: "mingzi",
};

// 8. Object API

// 8.1 两个数据是否相等
Object.is(NaN, NaN); //true
Object.is(+0, -0); // false

// 8.2 混合对象
Object.assign(user, user1); //建议使用展开运算，会改动user对象

// 8.3 Object.getOwnPropertyNames 的枚举属性
// 先排数字（升序），再排其他

// 8.4 Object.setPrototypeOf  设置对象隐式原型
// Object.setPrototypeOf(user1, user);
// user1._proto_ = user;    等效语法

// 面向对象开发 类
// 类结构
class Name {
  constructor(type, name, ...list) {}
  print() {}
}
const a = new Name("狗", "旺财");

// 同样具有对象的计算属性名
const c = "sss";
class Name {
  constructor(type, name, ...list) {}
  [c]() {}
}
const b = new Name("狗", "旺财");

// getter与setter
// 和es6以前Object.defineProperty 定义对象成员的读取与设置
// 与java的读取与赋值相同，只能用函数处理
class Name1 {
  constructor(type, name, ...list) {
    this.name = name;
  }
  // Name 的访问器
  // 访问器控制的参数不在原型上
  get name() {
    return this.name + "的名字";
  }
  set name(name) {
    this.name = name;
  }
}

// 实例成员与静态成员

// 不需要创建实例就可以访问的成员称为静态成员，只能通过构造函数本身来访问
// 使用static定义的成员称为静态成员
class Name2 {
  constructor() {}
  static d = 50;
}

// 字段初始化器
// 1.使用static的字段初始化器，添加的是静态成员
// 2.没有使用static的字段初始化器，添加的成员位于实例产生的对象上
// 3.箭头函数在字段初始化器，位于当前对象上（不在原型上）

// 类本质上还是函数可以作为表达式被返回

// 类的继承 extends 表达继承关系
// class Dog extends Aminal {}
// 如果Dog是Aminal的子类，则Dog的constructor首行要运行super()函数，相当于调用父类构造器
// 构成继承关系（完成原型链继承）
// super作用对象调用，可以使用父类的方法，super.a 和b=new Aminal()  b.a()等价

// 解构
// 解构
// let { name, sex } = user;
// 非同名属性解构
// let {name, sex:gender} = user
// 将sex的值赋值给了gender
// 可以深层解构

// 符号
// 给对象设置私有属性，只在对象内部使用，用于处理不希望被外部访问的方法等（符号不可枚举）
// 无论符号名是否相同，每次调用symbol（）创建的符号不相同
// 符号可以作为对象的属性名存在，这种属性称为符号属性
// Symbol.for(); 创建共享符号
const syb1 = Symbol();
// 通过设计创建私有方法getRandom，仅对象内部使用，外部无法访问该函数
const hero = (() => {
  const getRandom = Symbol();
  return {
    atttack: 30,
    [getRandom](min, max) {
      return Math.random * (max - min) + min;
    },
    aTK() {
      const dmg = this.atttack * this[getRandom](0.8, 1.5);
    },
  };
})();

// fatch方法
const url = "";
const config = {
  method: "GET",
  // ...
};
async function fatchUrl() {
  const res = await fetch(url, config);
}

// request对象
// 最好保证每次请求都是个新的request对象
async function fatchUrl() {
  const req = new Request("url地址", "配置");
  const res = await fetch(req);
}
// response对象
//  res.json()

// headers对象
const header = new Headers({
  a: 1,
  b: 2,
});

// 文件上传
// 流程：客户端将文件数据发送给服务器
// 服务器保存上传的文件数据
// 服务器响应给客户端文件访问地址
// 方法post
// 表单格式multiart/form-data
// 请求体中包含键值对，键的名字与服务器约定
// 键的名称：imagefile,值：文件数据

async function upLoad() {
  const inp = "";
  console.log(inp.files, "上传的文件");
  if (inp.files.length === 0) {
    alert("未选择文件");
    return;
  }
  const formData = new FormData();
  formData.append("imagefile", inp.files[0]);
  const url = "";
  const res = await fetch(url, {
    method: "POST",
    body: formData,
  });
  console.log(res, "请求返回");
  const result = await res.json();
  return result;
}

// 迭代器
// 如果一个对象具有next方法，并且该方法返回一个对象，格式如下
// 具有知名符号[Symbol.iterator]符号
// 并且属性值是个迭代器创建函数的对象就是个可迭代对象
// 展开运算符可以作用于可迭代对象

/**
 * 迭代器
 * @returns  {Object} - 包含 done 和 value 属性的对象
 */
function next() {
  return {
    /**
     * 当前迭代的值
     * @type {*}
     */
    value: "",
    /**
     * 表示迭代是否已经完成
     * @type {boolean}
     */
    done: "",
  };
}
const arr = [1, 2, 3, 4, 5];
// for循环遍历
function forArr() {
  for (let i = 0; i < arr.length; i++) {
    const e = arr[i];
  }
}
// 迭代器操作
function iteratorArr() {
  const iterator = {
    i: 0, //当前的数组下标
    next() {
      let res = {
        value: arr[this.i],
        done: this.i >= arr.length,
      };
      this.i++;
      return res;
    },
  };
  // 迭代器循环，取出数据
  let data = iterator.next();
  while (!data.done) {
    //没有迭代完成，则一直取出数据
    data = iterator.next();
    // 数据操作
    // ...
  }
}


// 生成器
