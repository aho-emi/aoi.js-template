// Easy, clear and beginnder friendly AOi.Js Template by Aho_Emi#1611

//~~~~~~~~~~>AOi.Js<~~~~~~~~~~//
const { AoiClient } = require("aoi.js");

const bot = new AoiClient({
  token: process.env.token, // or "YOUR TOKEN"
  prefix: ["$getGuildVar[prefix]", "<@$clientID>"],
  intents: ["MessageContent", "Guilds", "GuildMessages", "GuildMessageReactions"],
  events: ["onMessage", "onInteractionCreate", "onMessageUpdate"],
  autoUpdate: false,
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
handler.loadVariables('./database/variables.js')
handler.loadFunctions('./customFunc/')
handler.loadStatuses('./client/status.js')
handler.loadCommands('./src/')
