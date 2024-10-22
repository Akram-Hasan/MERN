// // Function to generate a random color
function getRandomBGColor(){       
    const Letters = '0123456789ABCDEF'
    let color = '#'                              //Explanation is in script.gpt
    for (let i = 0; i < 6; i++) {
        color += Letters[Math.floor(Math.random() * 16)]
    }
    return color
}
function getRandomTextColor(){       
    const Letters = '0123456789ABCDEF'
    let color = '#'                              //Explanation is in script.gpt
    for (let i = 0; i < 6; i++) {
        color += Letters[Math.floor(Math.random() * 16)]
    }
    return color
}
console.log(getRandomBGColor())
console.log(getRandomTextColor())
// // Select all elements with the class 'box'
// const boxes = document.getElementsByClassName('box');

// // Loop through each box and assign a random background color
// for (let i = 0; i < boxes.length; i++) {
//     boxes[i].style.backgroundColor = getRandomBGColor();
//     boxes[i].style.color = getRandomTextColor()
// }

const boxes = document.querySelectorAll('.box')

boxes.forEach (box => {
    box.style.backgroundColor = getRandomBGColor();
    box.style.color = getRandomTextColor();
});
