// alert("hello world")

// const , let , and var type 




// const x = 20
// console.log(x)
// const x = 30
// x = 60

// console.log(x)  we can not reassigne and redeclare value in const 
//  this is the wirong method beacuse in javascript we can inly one time declare with const key word





// let x= 50
// console.log(x)
// x= 20
// console.log(x)  we can re asigne thevalue of let but we cant reassigne with let  keyword



// let y = true

// console.log(y)

// console.log(typeof(y))


// let y = null

// console.log(y)
// console.log(typeof(y))



// let a = 5;
// let b = 10;

// console.log("Before swapping:");
// console.log("a =", a);
// console.log("b =", b);

// // Swapping logic
// let temp = a;
// a = b;
// b = temp;

// console.log("After swapping:");
// console.log("a =", a);
// console.log("b =", b);


// let heading = document.getElementById("heading")
// console.log(heading)
// heading.innerText = "There ware two friend in the forest a mnago tree and a banyan tree "
// heading.style.backgroundColor = "red"

// let a = 5;
// let b = 10;


// let noswap = document.getElementById("noswap")
// noswap.innerHTML = `${a} and ${b}`;

// const swapping =()=>{


// }




let a = prompt("Enter the first number")
let b = prompt("Enter the second number")
let temp = a
const nochange = document.getElementById("data")
nochange.innerHTML = (`${a} and ${b}`)
const changeValue = () => {
    temp = a
    a = b
    b = temp
    nochange.innerHTML = (`${a} and ${b}`)
}

let changeButton = document.getElementById("changeButton");
changeButton.addEventListener("click", changeValue)