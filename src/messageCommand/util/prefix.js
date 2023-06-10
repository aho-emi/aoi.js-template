module.exports={
  name: "prefix",
  aliases: ["changePrefix"], 
  description: "changes the prefix of the current server.",
  usage: "{prefix} prefix <new prefix>",
  code:`

Changed the prefix of the server to \`$message\`
$setGuildVar[prefix;$message]

$onlyPerms[administrator;You lack the permission.]
  `
}
