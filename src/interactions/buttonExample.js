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
