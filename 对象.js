/*1.		*/
/*创建一个空对象，变量名为user*/
var user={};


/* 添加一个name属性，并设置值为John；*/
user.name='John';
console.log(user.name);

/* 添加一个surname属性，并设置其值为Mike； */
user.surname='Mike';
console.log(user.surname);

/* 将name属性的值改为Peter; */
user.name='Peter';
console.log(user.name);

/* 删除user的name属性 */
delete user.name;
console.log(user);

/*2.计算下面fruit对象共有多少个水果，应该输出50。	*/
var fruit = {
apple: 20,
pear: 20,
peach: 10
};
var sum = fruit.apple+fruit.pear+fruit.peach; 
console.log("水果数量共："+sum);

