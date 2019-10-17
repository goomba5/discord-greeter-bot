const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
})

client.login(auth.token);