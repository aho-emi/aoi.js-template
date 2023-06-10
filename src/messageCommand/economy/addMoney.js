module.exports=[{
  name: "addMoney",
  usage: "{prefix} addmoney 10000 @user",
  code:`
Gave $message[1] money to $username[$get[user]]. 
$setGlobalUserVar[money;$math[$getGlobalUserVar[money;$get[user]]+$message[1]];$get[user]]

$let[user;$findUser[$messageSlice[1]]]
  
$onlyIf[$authorID==$getVar[developer];Error, Developer Mismatched!]
  
  ` /* Add money to a user.. We are right now making this work for developer only.
  And its global user money. */
}]


// I am skipping some options like: aliases, description etc. You can use it if you want to...
