const Discord = require('discord.js');
const bot = new Discord.Client ();

const Discord = require('discord.js');
const bot = new Discord.Client ();

bot.on('guildMemberAdd', member => {
   member.send("Welcome to the server!");
});

bot.login('TOKEN_HERE');
