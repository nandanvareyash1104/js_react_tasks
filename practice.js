// let arr = [1,2,3,4,5];
// let a = prompt("Enter a Number");
// a = Number.parseInt(a);
// arr.push(a);
// console.log(arr);

// let arr = [33,5,2,45,23,89]
// let n = arr.filter((x)=>{
//     return x%5==0;
// })
// console.log(n);

// let arr = [33,5,2,45,23,89]
// let n = arr.map((x)=>{
//     return x*x;
// })
// console.log(n);

// const a = document.querySelector('.p');
// setTimeout(function (){
//     p.textcontent ="my name is yash"
// },2000);
// p.style.color="red";
// console.log(a);

// async & await

// async function test() {
//   let gujarat = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("25deg");
//     }, 3000);
//   });
//   let mp = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("10deg");
//     }, 6000);
//   });
//   console.log("fetching gujarat wether...");
//   let gujw = await gujarat;
//   console.log("fetched gujarat wether :" + gujw);

//   console.log("fetching mp wether...");
//   let mpw = await mp;
//   console.log("fetched MP wether :" + mpw);
//   return [gujw, mpw];
// }

// const west = async () => {
//   console.log("not waiting...");
// };

// const all = async () => {
//   console.log("welcome the wheter control room");
//   let a = await test();
//   let b = await west();
// };

// all();





// function foo(b) {
//     const a = 10;
//     return a + b + 11;
//   }

//   function bar(x) {
//     const y = 3;
//     return foo(x * y);
//   }

//   const baz = bar(7);
//   console.log(baz);

// fetch api

// get
console.log("hello");
fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => console.log(data));

  // post
const data = {
  title: "this is title",
  body: "post body",
  userId: "4",
};

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify(data),
  headers: {
    "Content-type": "application/json",
  },
})
  .then((res) => res.json())
  .then((data) => console.log(data));
