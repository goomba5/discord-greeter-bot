module.exports = {
    name: "info-test",
    description: "Info tutorial",
    execute(message, args) {
        if (!args.length) {
            return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
        } else {
            return message.channel.send(`Commannd name: ${command}\nArguments: ${args}`);
        }
    }
}