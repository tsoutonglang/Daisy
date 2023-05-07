const { SlashCommandBuilder } = require(`@discordjs/builders`);
const { EmbedBuilder, PermissionsBitField } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('kick')
    .setDescription('This kicks a user')
    .addUserOption(option => option
        .setName('user')
        .setDescription('The member you want to kick')
        .setRequired(true))
    .addStringOption(option => option
        .setName('reason')
        .setDescription('The reason for kicking the member')
        .setRequired(true)),

    async execute(interaction, client) {
        const kickUser = interaction.options.getUser('user');
        const kickMember = await interaction.guild.members.fetch(kickUser.id);
        const channel = interaction.channel;

        if (!interaction.member.permissions.has(PermissionsBitField.Flags.KickMembers)) return await interaction.reply({ contetnt: "You don't have permission for this, silly goose", ephemeral: true})
        if (!kickMember) return await interaction.reply({ content: "The user is no longer in the server", ephemeral: true })
        if (!kickMember.kickable) return await interaction.reply({ content: "This user has roles above me or you", ephemeral: true })

        let reason = interaction.options.getString('reason');
        if (!reason) reason = "No reason given";

        const dmEmbed = new EmbedBuilder()
        .setColor('#92a8d1')
        .setDescription(`You have been kicked from ${interaction.guild.name} | ${reason}`)

        const embed = new EmbedBuilder()
        .setColor('#92a8d1')
        .setDescription(`${kickUser.tag} has been kicked out | ${reason}`)
        .setImage('https://i.imgur.com/tKHhPTV.gif')

        await kickMember.send({ embeds: [dmEmbed] }).catch(err =>{
            return;
        });

        await kickMember.kick({ reason: reason }).catch(err => {
            interaction.reply({ content: "There was an error", ephemeral: true })
        });
        
        await interaction.reply({ embeds: [embed] });
    }
}