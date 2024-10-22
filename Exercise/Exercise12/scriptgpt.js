// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    //               0123456789 10 11 12 13 14 15
    //               0123456789 A  B  C  D  E  F
    let color = '#';
    // console.log(letters[0])
    // console.log(letters[1])
    // console.log(letters[2])
    // console.log(letters[3])
    // console.log(letters[4])
    // console.log(letters[10])
    // console.log(letters[11])
    // console.log(letters[12])
    // console.log(letters[13])
    // console.log(letters[14])


    let random = Math.floor(Math.random() * 16)
    for (let i = 0; i < 6; i++) {
        // console.log(random)
        // console.log(letters[random])
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

console.log(getRandomColor())
// // Select all elements with the class 'box'
// const boxes = document.getElementsByClassName('box');
// // boxes[0].style.backgroundColor = 'black';
// // Loop through each box and assign a random background color
// for (let i = 0; i < boxes.length; i++) {
// boxes[i].style.backgroundColor = getRandomColor();
// }

// Select all elements with the class 'box'
const boxes = document.querySelectorAll('.box');

// Loop through each box and assign a random background color
boxes.forEach(box => {
    box.style.backgroundColor = getRandomColor();
});

// let random = Math.random()
// console.log(random)

// document.body.style.backgroundColor = 'Grey'
// // document.getElementsByClassName('container').style.backgroundColor = 'white';
// document.getElementsByClassName('container')[0].style.backgroundColor = 'white';
// const boxes = document.getElementsByClassName('box')

// boxes.style.backgroundcolor = 'blue';
// boxes[2].style.backgroundcolor = 'green';
// boxes[3].style.backgroundcolor = 'white';
// boxes[4].style.backgroundcolor = 'black';

// // if(random < 0.33){
// //     console.log()
// //     boxes[0].style.backgroundColor = 'pink'
// //     document.documentElement[2].style.backgroundColor = 'black'
// //     boxes[1].style.backgroundcolor = 'red';
// //     boxes[2].style.backgroundcolor = 'green';
// //     boxes[3].style.backgroundcolor = 'white';
// //     boxes[4].style.backgroundcolor = 'black';
// // }
// // else if(random < 0.67 && random > 0.34){
// //     boxes[0].style.backgroundcolor = 'blue';
  
// //     boxes[2].style.backgroundcolor = 'green';
// //     boxes[3].style.backgroundcolor = 'white';
// //     boxes[4].style.backgroundcolor = 'black';
// // }
// // else{
// //     boxes[0].style.backgroundcolor = 'blue';
   
// //     boxes[2].style.backgroundcolor = 'green';
// //     boxes[3].style.backgroundcolor = 'white';
// //     boxes[4].style.backgroundcolor = 'black';
// // }