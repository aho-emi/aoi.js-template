module.exports=[{
  name: "ban",
  description: "Bans a user from the server",
  usage: "{prefix} ban @user/id",
  code:`

$title[BAN]
$description[**$username[$get[user]]** has been banned from the server.]
$color[ff0000]

$ban[$guildID;$get[user]]

$let[user;$findUser[$message;false]]
$onlyIf[$findUser[$message]!=$authorID;You can't ban yourself]
$onlyPerms[banmembers;You lack \`banmembers\` permission to execute this command.]
  ` 
},{
  name: "unban",
  description: "Unbans a user from the server",
  usage: "{prefix} unban @user/id",
  code:`

$title[UNBAN]
$description[**$username[$get[user]]** is now unbanned.]
$color[ffff00]

$unban[$guildID;$get[user]]

$let[user;$findUser[$message;false]]
$onlyIf[$findUser[$message]!=$authorID;You can't ban yourself]
$onlyPerms[banmembers;You lack \`banmembers\` permission to execute this command.]
  ` 
}]
