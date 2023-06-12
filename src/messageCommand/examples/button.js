module.exports=[{
  name: "button",
  code:`
  This is a button.
  $addButton[1;Click Me!;secondary;button;false]
  
` // This is normal button.
},{
  name: "authorButton",
  code:`
  This is a author only button.
  $addButton[1;Click Me!;secondary;authorButton.$authorID;false]
  
` // This is author only button.
},{
  name: "button",
  type: "interaction",
  prototype: "button", // Using "prototype" as this interaction belongs to a button.
  code:`
  
  $interactionReply[Clicked the button.]
  
  ` // This is normal button interaction.
},{ 
  type: "interaction",
  prototype: "button", // Using "prototype" as this interaction belongs to a button.
  code:`
  
  $interactionReply[Clicked the button.]

  $onlyIf[$splitText[2]==$authorID]
  $onlyIf[$splitText[1]==authorButton]
  $textSplit[$interactionData[customId];.]
  
  ` // This is author only button interaction.
}]

// https://github.com/aho-emi/aoi.js-template/edit/main/README.md#interaction
