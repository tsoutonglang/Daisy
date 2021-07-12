module.exports = {
    name: 'clear',
    description: 'clear messages',
    async execute(message, args) {
        if (message.member.roles.cache.has('738248181959229513') || message.member.roles.cache.has('739030988944048199') || message.guild.id === '738144225966817331'){
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
                    console.log("Deleted " + args[0] + " messages.");
                    message.channel.bulkDelete(messages);
                });
            } else {
                await message.channel.messages.fetch({ limit : args[0] }).then(messages => {
                    console.log("Deleted " + args[0] + " messages.");
                    message.channel.bulkDelete(messages);
                });
            }
        } else {
            message.reply('you don\'t have permission to use this command.');
        }
    }
}