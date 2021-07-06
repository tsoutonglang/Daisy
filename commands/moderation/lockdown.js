module.exports = {
    name: 'lockdown',
    description: 'locks down the server if a raid happens',
    async execute(message, args, Discord, embedColor, ms){
        if (message.member.roles.cache.has('738248181959229513') || message.member.roles.cache.has('739030988944048199')){
            const role = message.guild.roles.cache.get('859979053717127168');

            if (!args[0])
                return message.reply("please enter true or false.");

            const query = args[0].toLowerCase();

            if (!["true", "false"].includes(query))
                return message.reply("please enter true or false.");

            const perms = role.permissions.toArray();
            if (query === "false") {
                perms.push('SEND_MESSAGES');
                console.log("Server is no longer in lockdown");
                await role.edit({ permissions: perms});
                message.channel.send("Server is unlocked.");
            } else {
                const newPerms = perms.filter((perm) => perm !== 'SEND_MESSAGES');
                console.log("Server is going under lockdown.");
                await role.edit({ permissions: newPerms});
                message.channel.send("Server is under lockdown.");
            }
        } else {
            message.reply('you don\'t have permission to use this command.');
        }
    }
}