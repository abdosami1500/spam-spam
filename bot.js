const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("592416949796077570")
setInterval(function() {
channel.send(`السلام عليكم وعليكم السلام`);
}, 25)
})
client.login(process.env.BOT_TOKEN);
