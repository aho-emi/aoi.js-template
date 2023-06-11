<div align="center">
  <h1>AOi.Js Template</h1>
  <p>An easy, clear & beginner friendly aoi.js template by <a href="https://discord.com/users/">Aho_Emi#1611</a></p>
</div>



### Modules Used
- Aoi.js & Its dependencies
- Aoi.parser
- Chalk

### Quick Start
Already know aoi.js? Click below to fork the code.
<br><br>
<a href='https://replit.com/github/KOOL13/aoi.js-Bot-Template' target='_blank'><img alt='Repl.it' src='https://img.shields.io/badge/Repl.it-%230D101E.svg?style=for-the-badge&logo=replit&logoColor=white'></a>
__________________________

# Disclaimer
This template uses custom handler to load variables, custom Functions, client statue, commands..<br>
Just dont touch the handler.js and you are good for the time.
__________________________
# Getting Started!
#### Download the dependencies
```bash
npm i aoi.js@latest aoi.parser chalk@4 
```
### Bot Setup / Creating a client
- Create an application in discord developer portal
- create a bot in bot section and copy the token
Place your bot's token in the following spot:
```js
const bot = new AoiClient({
	token: 'YOUR BOT TOKEN HERE',
	prefix: '!'
})
```
> If your code is going to be public (for example replit), you should use env to hide your token and make the following change.
`token: 'YOUR BOT TOKEN HERE'` to `token: env.process.token`
### Variables
We will be using handler to access the variable from a different file.
create a file to store variable, remeber to change the path in index.js or main file.
```js
module.exports= {
  embedColor: "#FFFFFF",
  prefix: "a!",
  developer: "715852000096419900",

  wallet: 0,
  bank: 0
}
```
### Status
We will use status in a different file as well to separate it from index.js
This status will work as multi status in a single file
```js
module.exports={
  time: 12,
  statuses:[{
    text: "Emi's heartbeat ❤️", 
    type: "LISTENING",
    presence: "dnd"
  },{
    text: "Emi's Emotions 🥺", 
    type: "PLAYING",
    presence: "idle"
  }]
}
```

## Custom Functions
Custom function in this template are similar to commands<br>
To make one create a file example.js.
```js
module.exports = async d => {
const data = d.util.aoiFunc(d);
const [parameter, optParameter= "715852000096419900" || d.author.id ] = data.inside.splits

  
text = `Example You say? ${parameter}, You got it right? <@${optParameter}>`

data.result = text

return { code: d.util.setCode(data) }
}
```

To use the custom function, its rather easy just use it as a normal function.

**Note:** You can only use custom function by their file name:<br>
example: if a custom function have `profile.js` as file name you need to use it as `$profile`

I have pre-made a custom function `example.js` in `customFunc` folder which is used as:<br>

```
$example[This is an example]
$example[Yep, this is totally an example?;715852000096419900]
```

## Interaction
You might have seen in the example files that there is `name:` option in some code and not in some<br>
Only code which we are making author only is missing the `name:` option as we used `customId.$authorID` in customID field of button/select menu,<br>
It will act like a filter. Also authorID can be different so we cant preciesly use `name:` option.

### Using Interaction code in separate file
You don't like to use the interaction code and command in file then dont worry<br>
You can use it in different folder making it more organized
 
```js
module.exports=[{
  name: "button",
  type: "interaction",
  prototype: "button",
  code:`
  
  $interactionReply[Clicked the button.]
  
  ` // This is normal button interaction.
},{
  type: "interaction",
  prototype: "button",
  code:`
  
  $interactionReply[Clicked the button.]

  $onlyIf[$splitText[2]==$authorID]
  $onlyIf[$splitText[1]==authorButton]
  $textSplit[$interactionData[customId];.]
  
  ` // This is author only button interaction.
}]
```
Its use in same method as a normal command.




#### For any help mention me in AoI.Js Support server.
