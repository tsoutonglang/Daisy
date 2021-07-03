module.exports = {
    name: 'clear',
    description: 'clear messages',
    async execute(message, args) {
        if (message.member.roles.cache.has('858950608933355530') || message.member.roles.cache.has('858950631736606720')){
            // was given no number
            if (!args[0])
                return message.reply('please enter the amount of messages to clear.');
            // was given text instead of number
            if (isNaN(args[0]))
                return message.reply('enter a real number.');

            // was given number higher than 100
            if (args[0] > 100)
                return message.reply('you can\'t delete more than 100 messages.');
            // was given 0 or less
            if (args[0] < 1)
                return message.reply('you gotta delete *at least* one message.');

            if (args[0] < 100) {
                const count = parseInt(args[0]) + 1;
                await message.channel.messages.fetch({ limit : count}).then(messages => {
                    message.channel.bulkDelete(messages);
                });
            } else {
                await message.channel.messages.fetch({ limit : args[0] }).then(messages => {
                    message.channel.bulkDelete(messages);
                });
            }
        } else {
            message.reply('you don\'t have permission to use this command.');
        }
    }
}