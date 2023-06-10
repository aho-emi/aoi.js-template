module.exports=[{
  name: "removeMoney",
  usage: "{prefix} removemoney 10000 @user",
  code:`
Removed $message[1] money from $username[$get[user]]. 
$setGlobalUserVar[wallet;$math[$getGlobalUserVar[wallet;$get[user]]-$message[1]];$get[user]]

$let[user;$findUser[$messageSlice[1]]]
  
$onlyIf[$authorID==$getVar[developer];Error, Developer Mismatched!]
  
  ` /* Removes money from a user.. We are right now making this work for developer only.
  And its global user money. */
}]
