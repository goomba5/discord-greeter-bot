const Discord = require('discord.js');
const client = new Discord.Client();
const { token, prefix } = require('./auth.json');

// command enums
const CommandEnum = Object.freeze({ "strike": "strike", "info": "info", "ping": "ping", "server": "server" });

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
})

client.on("message", msg => {

    const args = msg.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === `${CommandEnum.ping}`) {
        return msg.reply("pong");
    }
    else if (command === `${CommandEnum.strike}`) {
        return msg.reply("we've stepped into a war with the Cabal. Let's get to taking out their command one by one.")
    }

    if (!msg.content.startsWith(prefix) || msg.author.bot) {
        return
    }
    else if (command === `${CommandEnum.info}`) {
        if (!args.length) {
            return msg.channel.send(`You didn't provide any arguments, ${msg.author}!`);
        } else {
            return msg.channel.send(`Commannd name: ${command}\nArguments: ${args}`);
        }
    }

    if (command === `${CommandEnum.server}`) {
        return msg.channel.send(`This server (or guild) is called ${msg.guild.name}!\nTotal members: ${msg.guild.memberCount}`);
    }
})


client.login(token);