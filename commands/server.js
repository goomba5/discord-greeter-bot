module.exports = {
    name: "server",
    description: "Server Command",
    execute(message) {
        return message.channel.send(`This server (or guild) is called ${message.guild.name}!\nTotal members: ${message.guild.memberCount}`);
    }
}