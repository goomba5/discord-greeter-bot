module.exports = {
    name: "kick",
    description: "Not real: Tag a member and kick them",
    execute(message, args) {
        if (!message.mentions.users.size) {
            return message.reply("you need to tag a user in order to kick them!");
        }

        const taggedUser = message.mentions.users.first();

        return message.channel.send(`You kicked ${taggedUser.username} (not really). Womp womp.`);
    }
}