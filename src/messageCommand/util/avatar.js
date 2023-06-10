module.exports={
  name: "avatar",
  aliases: ["pfp", "av", "icon"], 
  description: "Shows the users profile picture",
  usage: "{prefix} avatar",
  code:`
$title[$username[$get[user]]'s Avatar]
$color[00ffff]
$footer[Requested by $username
$image[$userAvatar[$get[user]]]
  $let[user;$findUser[$message]]
  `
}
