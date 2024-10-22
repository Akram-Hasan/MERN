/* Create a business name generator by combining list of adjectives and shop name and another word
Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub
*/
let Adjectives
let Shop_name
let Another_word

const randomIndex1 = Math.floor(Math.random()*3)
console.log(randomIndex1)
if(randomIndex1 === 0){
    Adjectives = "Crazy"
}
else if(randomIndex1 === 1){
    Adjectives = "Amazing"
}
else{
    Adjectives = "Fire"
}
console.log(Adjectives)

const randomIndex2 = Math.floor(Math.random()*3)
console.log(randomIndex2)
if(randomIndex2 === 0){
    Shop_name = "Engine"
}
else if(randomIndex2 === 1){
    Shop_name = "Foods"
}
else{
    Shop_name = "Garments"
}
console.log(Shop_name)

const randomIndex3 = Math.floor(Math.random()*3)
console.log(randomIndex3)
if(randomIndex3 === 0){
    Another_word = "Bros"
}
else if(randomIndex3 === 1){
    Another_word = "Limited"
}
else{
    Another_word = "Hub"
}
console.log(Another_word)

console.log(`The business name is ${Adjectives} ${Shop_name} ${Another_word}`)


// let obj1 = {
//     1:"Crazy",
//   2 : "Amazing",
//   3 : "Fire"
//   }
//   let obj2 = {
//       1: "Engine",
//       2: "Foods",
//       3: "Garments"
//     };
//   let obj3 = {
//     1: "Bros",
//     2: "Limited",
//     3: "Hub"
//   };
  
  
  
//   var ran1 = Math.floor(Math.random() * 3) + 1;
//   var ran2 = Math.floor(Math.random() * 3) + 1;
//   var ran3 = Math.floor(Math.random() * 3) + 1;
  
  
  
  
//   console.log(obj1[ran1] + " " + obj2[ran2] + " " + obj3[ran3]);