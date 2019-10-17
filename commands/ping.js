const args = msg.content.slice(prefix.length).split(/ +/);
const command = args.shift().toLowerCase();

module.exports = {
    name: "ping",
    description: "Ping!",
    execute(message, args) {
        return message.channel.send("Pong.");
    }
}