module.exports=[{
  name: "ban",
  description: "kicks a user from the server",
  usage: "{prefix} kick @user/id",
  code:`

$title[KICKED]
$description[**$username[$get[user]]** has been kicked from the server.]
$color[ff0000]

$kick[$get[user];$guildID]

$let[user;$findUser[$message;false]]
$onlyIf[$findUser[$message]!=$authorID;You can't kick yourself]
$onlyPerms[kickmembers;You lack \`kickmembers\` permission to execute this command.]
  ` 
}]
