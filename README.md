<div align="center">
  <h1>AOi.Js Template</h1>
  <p>An easy, clear & beginner friendly aoi.js template by <a href="https://discord.com/users/">Aho_Emi#1611</a></p>
</div>



### Modules Used
- Aoi.js & Its dependencies
- Aoi.parser
- Chalk


### Bot Setup
- Create an application in discord developer portal
- create a bot in bot section and copy the token
- If you are using replit go to secrets > put 'token' in secret_key, paste your token in value > save it.

#### Download the dependencies
```bash
npm i aoi.js@latest aoi.parser chalk@4 
```

## Custom Functions
Custom function in this template are similar to commands<br>
To make one create a file example.js. I have given the example code there

To use the custom function, its rather easy just use it as a normal function.

**Note:** You can only use custom function by their file name:<br>
example: if a custom function have `profile.js` as file name you need to use it as `$profile`

Okay so the one I made in `customFunc` folder: `example.js` is used as:<br>

```
$example[This is an example]
$example[Yep, this is totally an example?;715852000096419900]
```

## Interaction
You might have seen in the file that I there is `name:` option in some code and no in some because it has its own reason<br>
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
