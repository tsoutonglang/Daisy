const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('serverinfo')
    .setDescription('Gives the server info'),
    async execute (interaction, client) {
        const { guild } = interaction;
        const { members } = guild;
        const { name, ownerID, createdTimestamp, memberCount } = guild;
        const icon = guild.iconURL() || 'https://cdn.discordapp.com/attachments/856998349499793478/1104867058585452734/daisy.png';
        const roles = guild.roles.cache.size;
        const emojis = guild.emojis.cache.size;
        const id = guild.id;

        let baseVerification = guild.VerificationLevel;

        if (baseVerification == 0) baseVerification = "None"
        if (baseVerification == 1) baseVerification = "Low"
        if (baseVerification == 2) baseVerification = "Medium"
        if (baseVerification == 3) baseVerification = "High"
        if (baseVerification == 4) baseVerification = "Very High"

        const embed = new EmbedBuilder()
        .setColor('#f7cac9')
        .setThumbnail(icon)
        .setAuthor({ name: name, iconURL: icon })
        .setFooter({ text: `Server ID: ${id}` })
        .setTimestamp()
        .addFields({ name: "Name", value: `${name}`, inline: false})
        .addFields({ name: "Date Created", value: `<t:${parseInt(createdTimestamp / 1000)}:R>`, inline: true })
        .addFields({ name: "Server Owner", value: `<@${ownerID}>`, inline: true })
        .addFields({ name: "Server Members", value: `${memberCount}`, inline: true })
        .addFields({ name: "Emoji Number", value: `${emojis}`, inline: true })
        .addFields({ name: "Verification Level", value: `${baseVerification}`, inline: true })
        .addFields({ name: "Server Boost", value: `${guild.premiumSubscriptionCount}`, inline: true })

        await interaction.reply({ embeds: [embed] });
    }
}