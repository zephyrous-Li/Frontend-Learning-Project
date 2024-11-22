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

const prop1 = "name";
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