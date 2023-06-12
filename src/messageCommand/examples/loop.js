/* // This will loop the message for unlimited amount of time
module.exports = [{
    name: "loop",
    type: "loop",
    channel: "1101580123788017724", // Will only work if bot has access ti that channel
    executeOnStartup: false, // This will determine whether the code will execute when bot gets online
    every: 10000, // This will run the code every 10 seconds
    code: `
This is a loop`
}]

// Remember $loop and this loop works alike but are not same. $loop executes an awaited cmd for given time
// This loop executes a given code for infinite time.

// I am commenting this because i dont know executeOnStartup: false does work properly

*/
