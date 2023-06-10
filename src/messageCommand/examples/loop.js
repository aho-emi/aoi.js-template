// This will loop the message for unlimited amount of time
module.exports = [{
    name: "loop",
    type: "loop",
    channel: "channelID",
    executeOnStartup: false, // This will determine whether the code will execute when bot gets online
    every: 10000, // This will run the code every 10 seconds
    code: `
This is a loop`
}]

/* Remember $loop and this loop works alike but are not same.
$loop executes a awaited cmd for given time
This loop executes a given code for infinite time. */
