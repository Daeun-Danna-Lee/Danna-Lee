// Object 생성자 함수
const person = new Object(); // 빈 객체 생성

person.name = "이다은";
person.part = "Server";
person["group"] = "OB";
person.sayHello = function () {
    console.log(`안녕하세요 ${this.name} 입니다.`);
};

console.log(typeof person); // object
console.log(person);

person.sayHello(); // 안녕하세요 이다은 입니다.

console.log("=====================")

// 객체 리터럴
const emptyObject = {}; // 빈 객체 생성
console.log(typeof emptyObject); // object

const animal = {
    animalType: "dog",
    animalName: "뽀삐",
    animalFriends: ["코코", "초코", "쿠키"],
    bark: function () {
        console.log(`${this.animalName}: 멍멍`);
    },
    thisFriends: function () {
        this.animalFriends.forEach(friend => {
        console.log(`${this.animalName}의 친구: ${friend}`);
        });
    },
};

console.log(animal); 
animal.bark(); // 뽀삐: 멍멍
animal.thisFriends(); // 뽀삐의 친구: 코코 \n 뽀삐의 친구: 초코 \n 뽀삐의 친구: 쿠키
