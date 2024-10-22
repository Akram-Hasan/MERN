document.addEventListener('DOMContentLoaded', () => {
    // Elements with their respective classes, delays, and texts
    const elements = [
        { elementClass: ".element1", delay: 1000, text: 'Initializing Hacking' },
        { elementClass: ".element2", delay: 2000, text: 'Reading your files' },
        { elementClass: ".element3", delay: 4000, text: 'Password files Detected' },
        { elementClass: ".element4", delay: 5000, text: 'Sending alll passwords and personal files to server' },
        { elementClass: ".element5", delay: 6000, text: 'Cleaning up' }
    ];

    // Function to add dots to an element
    function addDots(element) {
        const numberOfDots = 3;
        for (let i = 0; i < numberOfDots; i++) {
            setTimeout(() => {
                const dot = document.createElement('span');
                dot.classList.add('dot');
                dot.textContent = '.'; // Add text content for the dot
                element.appendChild(dot);
            }, i * 1000); // Delay each dot by 1000ms (1 second)
        }
    }

    // Iterate through each element and apply the effect
    elements.forEach(item => {
        const element = document.querySelector(item.elementClass);

        // Add text after the specified delay
        setTimeout(() => {
            element.insertAdjacentText('afterbegin', item.text);
            
            // Add dots immediately after the text
            addDots(element);
            
        }, item.delay); // Initial delay before adding the text
    });
});


// //line 1
// document.addEventListener('DOMContentLoaded', () => {
//     let element = document.querySelector(".element1");
//     let dotContainer = document.querySelector('.first');

//     // Add text after 1 second
//     setTimeout(() => {
//         element.insertAdjacentText('afterbegin', 'Initializing Hacking');
        
//         // Function to add dots
//         function addDots() {
//             // Number of dots to add
//             const numberOfDots = 3;
        
//             for (let i = 0; i < numberOfDots; i++) {
//                 const dot = document.createElement('span');
//                 dot.classList.add('dot');
//                 dotContainer.appendChild(dot);
//             }
//         }
        
//         // Delay adding dots by 1 second after the text
//         setTimeout(() => {
//             addDots();
//         }, 0); // Adjust the delay as needed (1000ms = 1 second)
        
//     }, 1000); // Initial delay before adding the text
// });

// //line 2
// document.addEventListener('DOMContentLoaded', () => {
//     let element = document.querySelector(".element2");
//     let dotContainer = document.querySelector('.second');

//     // Add text after 1 second
//     setTimeout(() => {
//         element.insertAdjacentText('afterbegin', 'Initializing Hacking');
        
//         // Function to add dots
//         function addDots() {
//             // Number of dots to add
//             const numberOfDots = 3;
        
//             for (let i = 0; i < numberOfDots; i++) {
//                 const dot = document.createElement('span');
//                 dot.classList.add('dot');
//                 dotContainer.appendChild(dot);
//             }
//         }
        
//         // Delay adding dots by 1 second after the text
//         setTimeout(() => {
//             addDots();
//         }, 2000); // Adjust the delay as needed (1000ms = 1 second)
        
//     }, 2000); // Initial delay before adding the text
// });

// //line 3
// document.addEventListener('DOMContentLoaded', () => {
//     let element = document.querySelector(".element3");
//     let dotContainer = document.querySelector('.third');

//     // Add text after 1 second
//     setTimeout(() => {
//         element.insertAdjacentText('afterbegin', 'Initializing Hacking');
        
//         // Function to add dots
//         function addDots() {
//             // Number of dots to add
//             const numberOfDots = 3;
        
//             for (let i = 0; i < numberOfDots; i++) {
//                 const dot = document.createElement('span');
//                 dot.classList.add('dot');
//                 dotContainer.appendChild(dot);
//             }
//         }
        
//         // Delay adding dots by 1 second after the text
//         setTimeout(() => {
//             addDots();
//         }, 0); // Adjust the delay as needed (1000ms = 1 second)
        
//     }, 4000); // Initial delay before adding the text
// });


// //line 4
// document.addEventListener('DOMContentLoaded', () => {
//     let element = document.querySelector(".element4");
//     let dotContainer = document.querySelector('.forth');

//     // Add text after 1 second
//     setTimeout(() => {
//         element.insertAdjacentText('afterbegin', 'Initializing Hacking');
        
//         // Function to add dots
//         function addDots() {
//             // Number of dots to add
//             const numberOfDots = 3;
        
//             for (let i = 0; i < numberOfDots; i++) {
//                 const dot = document.createElement('span');
//                 dot.classList.add('dot');
//                 dotContainer.appendChild(dot);
//             }
//         }
        
//         // Delay adding dots by 1 second after the text
//         setTimeout(() => {
//             addDots();
//         }, 0); // Adjust the delay as needed (1000ms = 1 second)
        
//     }, 5000); // Initial delay before adding the text
// });


// //line 5
// document.addEventListener('DOMContentLoaded', () => {
//     let element = document.querySelector(".element5");
//     let dotContainer = document.querySelector('.fifth');

//     // Add text after 1 second
//     setTimeout(() => {
//         element.insertAdjacentText('afterbegin', 'Initializing Hacking');
        
//         // Function to add dots
//         function addDots() {
//             // Number of dots to add
//             const numberOfDots = 3;
        
//             for (let i = 0; i < numberOfDots; i++) {
//                 const dot = document.createElement('span');
//                 dot.classList.add('dot');
//                 dotContainer.appendChild(dot);
//             }
//         }
        
//         // Delay adding dots by 1 second after the text
//         setTimeout(() => {
//             addDots();
//         }, 0); // Adjust the delay as needed (1000ms = 1 second)
        
//     }, 6000); // Initial delay before adding the text
// });


// async function print() {
// let promise = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         let element = document.querySelector(".element1")
//         element.insertAdjacentText('afterbegin', 'Initializing Hacking')
//         },0)

//         setTimeout(()=>{
//             document.addEventListener('DOMContentLoaded', () => {
//                 const container = document.querySelector('.dot-container');
                
//                 // Number of dots to add
//                 const numberOfDots = 3;
            
//                 for (let i = 0; i < numberOfDots; i++) {
//                     const dot = document.createElement('span');
//                     dot.classList.add('dot');
//                     container.appendChild(dot);
//                 }
//             },1000)
//         });
//         })
        
        


// }
// // promise.then{
    
// // }
// // setTimeout(()=>{
    
    
    
        
    
// //     // let dot = document.querySelector(".loading-dots")
// //     // dot.insertAdjacentHTML('afterbegin','<span>.</span> <span>.</span> <span>.</span>')
// // }, 1000) 

// print()


// setTimeout(() => {
//     let element = document.querySelector(".element2")
//     element.insertAdjacentText('afterbegin', 'Reading your Files')
// }, 2000)

// setTimeout(()=>{
//     let element = document.querySelector(".element3")
//     element.insertAdjacentText('afterbegin','Password files detected') 
// }, 4000)

// setTimeout(()=>{
//     let element = document.querySelector(".element4")
//     element.insertAdjacentText('afterbegin','Sending all passwords and personal files to server ')
// }, 5000)

// setTimeout(()=>{
//     let element = document.querySelector(".element5")
//     element.insertAdjacentText('afterbegin','Cleaning up') 
// }, 7000)



