const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");
const myid = [551422413108281345];
const prefix = [!];

client.on("ready", () => {
let channel =     client.channels.get("592416949796077570")
setInterval(function() {
channel.send(`السلام عليكم وعليكم السلام`);
}, 25)
})
if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});
client.login(process.env.BOT_TOKEN);
