module.exports = {
    name: 'ping',
    description: 'Ping komutu!',
    execute(message, args) {
        message.channel.send('Pong!');
    }
};