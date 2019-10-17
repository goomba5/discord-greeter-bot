const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
})

client.login(auth.token);

client.on("message", msg => {
    if (msg.content === "ping") {
        msg.reply("pong");
    }
    if (msg.content === "Strike!") {
        msg.reply("We've stepped into a war with the Cabal. Let's get to taking out their command one by one.")
    }
})

client.login(auth.token);