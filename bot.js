const fs = require("fs");
const Discord = require('discord.js');
const { token, prefix } = require('./auth.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

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