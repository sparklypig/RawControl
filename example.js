import rawControl from './rawControl.js'

// Some variables that will change when you press 'a' or 'up'
let aCount = 0
let upCount = 0

// Object that handles controls
const controls = {
    // 'a' key
    '61': () => {
        console.log(`You've pressed the a key ${++aCount} times!`)
    },
    // 'up' key
    '1b5b41': () => {
        console.log(`You've pressed the up key ${++upCount} times!`)
    }
}

console.log("Check this out")

// Runs rawControl with the controls object, showing all buffers, and displaying a message after each keypress
rawControl(controls, true, () => {
    console.log("You pressed a key!!! (quit with ctrl+c)")
})

console.log("it runs asynchronously")