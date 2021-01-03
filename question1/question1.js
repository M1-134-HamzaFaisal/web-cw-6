// 👇🏻 قم بحل السؤال الأول هنا
let Name =prompt(`whats your name?`);
console.log(Name)

function sayHello(){
    alert(`Hello,${Name}`);
}
if(Name){
    sayHello()
}else{
    alert(`Invalid Input`)
}