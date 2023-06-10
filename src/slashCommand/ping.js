module.exports={
  name: "ping",
  type: "interaction",
  prototype: "slash",
  code:`
  
  $interactionReply[Bot's Latency: $pingMs!]
  
  `
}

/* To create a slash command execute this code

$createApplicationCommand[global;ping;Shows latency ot the bot!;true;slash]

*/
