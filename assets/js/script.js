"use strict";

// let word = "Azerbaycan salam";

// console.log(word.length);


// for (let i = 0; i < word.length; i++) {
//     console.log(word[i]);;
    
// }

// console.log(word.toLowerCase);

// console.log(word.toUpperCase);

// console.log(word.trim());

// console.log(word.charAt(2));

// console.log(word.charCodeAt);

// let res =word.concat(" salam")

// console.log(res);

// console.log(word.slice(1,5));
// console.log(word.substring(1,5));

// let txt = "jengan jnadviu anvj avoij iajo ajsi"

// let res = txt.substring(0,14) + "...";
// console.log(res);

// let res = word.replace("A","a");

// console.log(res);

// console.log(word.indexOf("z"));

// console.log(word.replaceAll("a","b"));

// let res = word.split(" ")
// console.log(res);



// let stu1 ={
//     id:1,
//     name:"Rufet",
//     surname:"Nesibov",
//     age: 21,
//     email:"rufet@code.edu.az"
// }
// let stu2 ={
//     id:2,
//     name:"Nurlan",
//     surname:"Musayev",
//     age: 26,
//     email:"nurlan@code.edu.az"
// }

// let stu3 ={
//     id:3,
//     name:"Shamil",
//     surname:"Ferruxov",
//     age: 20,
//     email:"shamil@code.edu.az"

// }

// const students = [stu1, stu2, stu3]
// function getAllData(array) {
//     for(const item of array){
//         if(item.age>18 && item.age<25){
//             console.log(item.name+" "+item.surname+" "+item.age+" "+item.email);
//         }
//     }
    
// }
// getAllData(students);

function changeText(string){
    let res ="";

    for (let i = string.length -1; i >= 0; i--) {
        res += string[i]
        
    
    }
    return res;
}

console.log(changeText("Cavid"));

function yearOfBirth(age){
    return 2024 - age;
}
// console.log(yearOfBirth(21));

let prs1 ={
    id:1,
    name:"Shamil",
    surname:"Ferruxov",
    age: 20,
    salary:2000

}

let prs2 ={
    id:2,
    name:"Nurlan",
    surname:"Musayev",
    age: 21,
    salary:2100

}

let prs3 ={
    id:3,
    name:"Rufet",
    surname:"Nesibov",
    age: 21,
    salary:2200

}

let prs4 ={
    id:4,
    name:"Ramin",
    surname:"Mahmudov",
    age: 22,
    salary:2400

}

const person =[prs1, prs2, prs3, prs4]

// function getPerson(array){
//     return array.length;
// }
// console.log(getPerson(person));

function avgSalary(array){
    let sum = 0;
    for(let i =0; i<array.length; i++){
        sum += array[i].salary
    }
    let average =sum / array.length;
     return average;

}
// console.log(avgSalary(person));






