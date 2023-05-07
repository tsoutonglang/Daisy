const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, PermissionsBitField } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('clear')
    .setDescription('Deletes a specific number of messages from a channel')
    .addIntegerOption(option => option
        .setName('amount')
        .setDescription('The amount of messages to delete')
        .setMinValue(1)
        .setMaxValue(100)
        .setRequired(true)),
    
    async execute (interaction, client) {
        const amount = interaction.options.getInteger('amount');
        const channel = interaction.channel;

        if (!interaction.member.permissions.has(PermissionsBitField.ManageMessages)) return await interaction.reply({ content: "You don't have permission to do this, silly goose", ephemeral: true });
        if (!amount) return await interaction.reply({ content: "Please specify the amount of messages you want to delete", ephemeral: true });
        if (amount > 100 || amount < 1) return await interaction.reply({ content: "Please put a valid number between 1 and 100", ephemeral: true });

        await channel.bulkDelete(amount).catch(err => {
            return;
        });

        const embed = new EmbedBuilder()
        .setColor('#92a8d1')
        .setDescription(`:heavy_check_mark: Deleted **${amount}** messages`)

        await interaction.reply({ embeds: [embed] }).catch(err => {
            return;
        })
    }
}