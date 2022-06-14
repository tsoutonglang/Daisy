module.exports = {
    name: 'lockdown',
    description: 'locks down the server if a raid happens',
    async execute(message, args, bbAdmin, bbMod){
        if (message.member.roles.cache.has(bbAdmin) || message.member.roles.cache.has(bbMod)){
            const role = message.guild.roles.cache.get('738601010116689953');

            if (!args[0])
                return message.reply("please enter true or false.");

            const query = args[0].toLowerCase();

            if (!["true", "false"].includes(query))
                return message.reply("please enter true or false.");

            const perms = role.permissions.toArray();
            if (query === "false") {
                perms.push('SEND_MESSAGES');
                console.log("lockdown - ended");
                await role.edit({ permissions: perms});
                message.channel.send("Server is unlocked.");
            } else {
                const newPerms = perms.filter((perm) => perm !== 'SEND_MESSAGES');
                console.log("lockdown - undergoing");
                await role.edit({ permissions: newPerms});
                message.channel.send("Server is under lockdown.");
            }
        } else {
            message.reply('you don\'t have permission to use this command.');
        }
    }
}