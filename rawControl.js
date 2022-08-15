import process from 'process'

// Function to handle entering raw mode and running function on keypresses
// controls is a object dictionary that maps keys to functions
// displayBuffers is a flag to enable displaying each buffer
// defaultFunction is a function that runs for every keypress
// quitBuffer is a buffer string that will leave raw control
export default function rawControl(controls, displayBuffers = false, defaultFunction = null, quitBuffer = '03') {
    process.stdin.setRawMode(true)
    process.stdin.resume()

    process.stdin.on('data', (data) => {

        let flag = displayBuffers
        for(const key in controls) {
            if (data.compare(Buffer.from(key, 'hex')) === 0){
                controls[key]()
                flag = false
            }
        }
        if(flag) {
            console.log(data)
        }


        if(data.compare(Buffer.from(quitBuffer, 'hex')) === 0) {
            console.log('Quit')

            process.stdin.setRawMode(false)
            process.exit()
        }

        if(defaultFunction !== null) {
            defaultFunction()
        }
    })
}