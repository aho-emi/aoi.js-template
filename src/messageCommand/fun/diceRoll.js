module.exports={
  name: "diceRoll",
  aliases: "dr",
  description: "Rolls a dice",
  usage: "{prefix} diceroll / {prefix} diceroll 100/1000/10000",
  code:`

You rolled **$random[1;$get[number]]** out of **$get[number]**.


$onlyIf[$isNumber[$get[number]]==true;Provided input is not a number!]
$let[number;$if[$message!=;$message;6]]


  ` 
}
