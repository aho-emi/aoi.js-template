module.exports=[{
  name: "lock",
  description: "Locks a server channel",
  usage: "{prefix} lock / {prefix} lock #channel",
  code:`

Locked <#$get[channel]>!

$modifyChannelPerms[$get[channel];$guildID;-sendmessages]

$onlyIf[$checkContains[$channelPermissionsFor[$guildID;$get[channel];,];SendMessages,]==true;Channel is already locked!]

$let[channel;$findChannel[$message]]

$onlyPerms[managechannels;You lack \`managechannels\` permission to execute this command.]
  ` 
},{
  name: "unlock",
  description: "Unlocks a locked server channel",
  usage: "{prefix} unlock / {prefix} unlock #channel",
  code:`

Unlocked <#$get[channel]>!

$modifyChannelPerms[$get[channel];$guildID;+sendmessages]

$onlyIf[$checkContains[$channelPermissionsFor[$guildID;$get[channel];,];SendMessages,]==false;Channel is already unlocked!]

$let[channel;$findChannel[$message]]

$onlyPerms[managechannels;You lack \`managechannels\` permission to execute this command.]
  ` 
}]
