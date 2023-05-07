const { SlashCommandBuilder } = require(`@discordjs/builders`);
const { EmbedBuilder, PermissionsBitField } = require('discord.js');
const { QuickDB } = require('quick.db');
const db = new QuickDB();

module.exports = {
    data: new SlashCommandBuilder()
    .setName(`removewelchannel`)
    .setDescription('This disables the welcome message'),

    async execute(interaction) {
        if (!interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)) return await interaction.reply({ contetnt: "You must be an admin, silly goose", ephemeral: true})

        const embed = new EmbedBuilder()
        .setColor('#92a8d1')
        .setDescription(`:heavy_check_mark: Your welcome channel has been removed`)

        await db.delete(`welchannel_${interaction.guild.id}`)

        await interaction.reply({ embeds: [embed] });
    }
}