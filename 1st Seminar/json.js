// json 객체
const sopt = {
    name: "WE SOPT",
    slogan: "우리가 SOPT입니다",
    part: ["plan", "design", "android", "iOS", "server", "web"],
    number: 180,
    printName: function () {
      console.log("name : ", this.name);
    },
    printNum: function () {
      console.log("number : ", this.number);
    },
};

console.log("typeof sopt : " + typeof sopt); // typeof sopt : object

// + 와 , 의 차이
console.log("sopt : " + sopt); // 띄어쓰기 미포함
console.log("sopt : ", sopt); // 띄어쓰기 포함
console.log("sopt :" + JSON.stringify(sopt)); // sopt :{"name":"WE SOPT","slogan":"우리가 SOPT입니다","part":["plan","design","android","iOS","server","web"],"number":180} 

sopt.printName(); // name :  WE SOPT
sopt.number = 190;
sopt.printNum(); // number :  190

// json 배열
const dogs = [
    { name: "식빵", family: "웰시코기", age: 1, weight: 2.14 },
    { name: "콩콩", family: "포메라니안", age: 3, weight: 2.5 },
    { name: "두팔", family: "푸들", age: 7, weight: 3.1 },
];
  
console.log("dogs : " + dogs);
console.log("dogs : ", dogs);
console.log("dogs :" + JSON.stringify(dogs));
  
dogs.forEach(dog =>
    console.log(
      dog.name +
        "이는 종이 " +
        dog.family +
        "이고, 나이가 " +
        dog.age +
        "세입니다 ~",
    ),
);

// 식빵이는 종이 웰시코기이고, 나이가 1세입니다 ~ 
// 콩콩이는 종이 포메라니안이고, 나이가 3세입니다 ~ 
// 두팔이는 종이 푸들이고, 나이가 7세입니다 ~ 