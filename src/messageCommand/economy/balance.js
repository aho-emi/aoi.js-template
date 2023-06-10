module.exports=[{
  name: "balance",
  aliases: ["bal", "money"],
  description: "Shows the balance of a user",
  usage: "{prefix} balance / {prefix} balance @user",
  code:`
  
  $title[$username[$get[user]]'s Balance]
  $color[00ffff]
  $thumbnail[$userAvatar[$get[user]]]
  $addField[Bank;> $ **$numberSeparator[$getGlobalUserVar[bank;$get[user]];,]**;true]
  $addField[Wallet;> $ **$numberSeparator[$getGlobalUserVar[wallet;$get[user]];,]**;true]

  $let[user;$findUser[$msssage]]
  ` // This is global balance meaning it will show same amount in every server
},{
  name: "serverBalance",
  aliases: ["sbal", "gmoney"],
  description: "Shows the balance of a user in a server",
  usage: "{prefix} serverbalance / {prefix} sbal @user",
  code:`
  
  $title[$username[$get[user]]'s Balance]
  $color[00ffff]
  $thumbnail[$userAvatar[$get[user]]]
  $addField[Bank;> $ **$numberSeparator[$getUserVar[bank;$get[user]];,]**;true]
  $addField[Wallet;> $ **$numberSeparator[$getUserVar[wallet;$get[user]];,]**;true]

  $let[user;$findUser[$msssage]]
  ` // This is user guild balance meaning it will show different amount in every server
}]

// You might be thinking how to use this so basically you use $setGlobalUserVar or $setUserVar corresponding to which one you want to use.
