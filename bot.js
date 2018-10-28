const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("505125121896480780")
setInterval(function() {
channel.send(`السلام عليكم وعليكم السلام`);
}, 25)
})
client.login(process.env.BOT_TOKEN);
