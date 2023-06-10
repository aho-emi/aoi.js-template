module.exports=[{
  name: "selectMenu",
  type: "interaction",
  prototype: "selectMenu",
  code:`
  
  $interactionReply[You selected an option.]
  
  ` // This is normal select menu interaction.
},{
  name: "selectMenuAuthor",
  type: "interaction",
  prototype: "selectMenu",
  code:`
  
  $interactionReply[You selected an option.]

  $onlyIf[$splitText[2]==$authorID]
  $textSplit[$interactionData[values[0]];.]
  
  ` // This is author only selet menu interaction.
}]
