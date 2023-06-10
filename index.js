// Easy, Clear AOi.Js Template by Aho_Emi#1611

//~~~~~~~~~~>AOi.Js<~~~~~~~~~~//
const aoijs = require("aoi.js");

const bot = new aoijs.AoiClient({
  token: process.env.token,
  prefix: ["$getGuildVar[prefix]", "<@$clientID>"],
  intents: ["MessageContent", "Guilds", "GuildMessages", "GuildMessageReactions"],
  events: ["onMessage", "onInteractionCreate", "onMessageUpdate"],
  autoUpdate: false,
  respondToBots: true,
  database: {
    db: require("aoi.db"),
    type: "aoi.db",
    path: "./database/",
    tables: ["main"],
    extraOptions: {
      dbType: "KeyValue",
    },
},
});



//~~~~~~~~~~>AOi.PARSEr<~~~~~~~~~~//
const { Util } = require("aoi.js");
const { setup } = require("aoi.parser");
setup(Util);



//~~~~~~~~~~>READy EVENt<~~~~~~~~~~//
bot.readyCommand({
    channel: "1076320808818966590",
    code: `  
    $log[
      ─━━━━━━━━━Ready━━━━━━━━━─
      Client: $userTag[$clientID]
      Ping: $ping ms
      Bot Creator: $username[1110317560588677221]#$discriminator[ 1110317560588677221]
      Commands loaded: $commandsCount
      ─━━━Created by Aho_Emi━━━━─
  ]`
})



//~~~~~~~~~~>HANDLEr<~~~~~~~~~~//
const Handler = require("./handler.js");
const handler = new Handler(bot);
handler.loadVariables('./database/variable.js')
handler.loadFunctions('./customFunc/')
handler.loadStatuses('./client/status.js')
handler.loadCommands('./src/')
