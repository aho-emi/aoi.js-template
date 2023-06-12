module.exports=[{
  name: "awaitMessages",
  code: `
  $awaitMessages[$channelID;$authorID;15s;everything;awaitedcommandexample;Oh? You don't want to talk to me..?] 
  What's your name?
  `
    // Please make sure that the awaitedCommand name is ALL lowercase or else it won't work.
  
},{
  name: "awaitedcommandexample",
  type: "awaited",
  code: `
  Nice to meet you, $message!
  `
}]
