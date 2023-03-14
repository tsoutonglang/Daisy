const {EmbedBuilder} = require("@discordjs/builders");
const {GuildMember, Embed} = require("discord.js");

module.exports = {
    name: "guildMemberAdd",
    async execute(client, member) {
        const {user, guild} = member;
        const welcomeChannel = member.guild.channels.cache.get('887923043945549854');
        const welcomeMessage = `Welcome <@${member.id}> to Daisy's Garden!`;

        const welcomeEmbed = new EmbedBuilder()
        .setTitle("**Welcome!**")
        .setDescription(welcomeMessage)
        .setColor(rgb(255, 217, 102))
        .setTimestamp();

        welcomeChannel.send({embeds: [welcomeEmbed]});
    }
}