const Express = require('express')
const App = Express()
const { Client, Intents, MessageEmbed, MessageActionRow, MessageButton } = require('discord.js')
const TOBZiClient = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] })
const { yellowBright, greenBright } = require('chalk')
const { PREFIX, TOKEN, ROLES } = require('./bot')

App.listen(8000, async() => console.log(greenBright(`\nServer is Started`)))

process.on('unhandledRejection', error => {
    return;
})

process.on('unhandledRejection', error => {
    return;
})

process.on('unhandledRejection', error => {
    return;
})

TOBZiClient.on('ready', async() => console.log(yellowBright(`\n${TOBZiClient.user.username} is Online!`)))

TOBZiClient.on('messageCreate', async(TOBZiCoder) => {
    if(TOBZiCoder.content.startsWith(PREFIX + 'button-role')) {
        if(!TOBZiCoder.member.permissions.has('MANAGE_CHANNELS')) return TOBZiCoder.channel.send({ content: `${TOBZiCoder.author.username}, You Don't Have any Permissions` })
        TOBZiCoder.delete()
        const ROLE_1 = await TOBZiCoder.guild.roles.cache.find(ROLE => ROLE.id === ROLES.ROLE_1)
        const ROLE_2 = await TOBZiCoder.guild.roles.cache.find(ROLE => ROLE.id === ROLES.ROLE_2)
        const ROLE_3 = await TOBZiCoder.guild.roles.cache.find(ROLE => ROLE.id === ROLES.ROLE_3)
        const ROLE_4 = await TOBZiCoder.guild.roles.cache.find(ROLE => ROLE.id === ROLES.ROLE_4)
        const ROLE_5 = await TOBZiCoder.guild.roles.cache.find(ROLE => ROLE.id === ROLES.ROLE_5)
        const ROLE_6 = await TOBZiCoder.guild.roles.cache.find(ROLE => ROLE.id === ROLES.ROLE_6)
        const EMBED = new MessageEmbed()
           .setAuthor(TOBZiCoder.guild.name, TOBZiCoder.guild.iconURL())
           .setDescription(`1️⃣ ⁘ ${ROLE_1 || 'No Role!'}\n\n2️⃣ ⁘ ${ROLE_2 || 'No Role!'}\n\n3️⃣ ⁘ ${ROLE_3 || 'No Role!'}\n\n4️⃣ ⁘ ${ROLE_4 || 'No Role!'}\n\n5️⃣ ⁘ ${ROLE_5 || 'No Role!'}\n\n6️⃣ ⁘ ${ROLE_6 || 'No Role!'}`)
        const ROLE_ONE = await new MessageButton()
           .setStyle('SECONDARY')
           .setEmoji('1️⃣')
           .setCustomId('ROLE_1')
        const ROLE_TWO = await new MessageButton()
           .setStyle('SECONDARY')
           .setEmoji('2️⃣')
           .setCustomId('ROLE_2')
        const ROLE_THREE = await new MessageButton()
           .setStyle('SECONDARY')
           .setEmoji('3️⃣')
           .setCustomId('ROLE_3')
        const ROLE_FOUR = await new MessageButton()
           .setStyle('SECONDARY')
           .setEmoji('4️⃣')
           .setCustomId('ROLE_4')
        const ROLE_FIVE = await new MessageButton()
           .setStyle('SECONDARY')
           .setEmoji('5️⃣')
           .setCustomId('ROLE_5')
        const ROLE_SIX = await new MessageButton()
           .setStyle('SECONDARY')
           .setEmoji('6️⃣')
           .setCustomId('ROLE_6')
        
        /*const ROLE_SEVEN = await new MessageButton()
           .setStyle('DANGER')
           .setEmoji('7️⃣')
           .setCustomId('DELETE_EMBED')*/
        
        const ROW = await new MessageActionRow()
           .addComponents([ROLE_ONE, ROLE_TWO, ROLE_THREE, ROLE_FOUR, ROLE_FIVE])
        const ROW_2 = await new MessageActionRow()
           .addComponents([ROLE_SIX])
           // .addComponents([ROLE_SIX, ROLE_SEVEN])
        TOBZiCoder.channel.send({ embeds: [EMBED], components: [ROW, ROW_2] })
    }
})

TOBZiClient.on('interactionCreate', async interaction => {
    if(interaction.isButton()) {
        if(interaction.customId === 'ROLE_1') {
            const ROLE_1 = await interaction.guild.roles.cache.find(ROLE => ROLE.id === ROLES.ROLE_1)
            if(!interaction.member.roles.cache.has(ROLES.ROLE_1)) {
                interaction.member.roles.add(ROLES.ROLE_1)
                const ADDED = new MessageEmbed()
                  .setColor('#43b582')
                  .setDescription(`:white_check_mark: Added \`${ROLE_1.name}\``)
                interaction.reply({ embeds: [ADDED], ephemeral: true }).catch(() => interaction.reply({ content: 'I Can\'t Find any Role', ephemeral: true }))
            } else {
                const REMOVED = new MessageEmbed()
                  .setColor('#43b582')
                  .setDescription(`:white_check_mark: Removed \`${ROLE_1.name}\``)
                interaction.member.roles.remove(ROLES.ROLE_1)
                interaction.reply({ embeds: [REMOVED], ephemeral: true })
            }
        }

        if(interaction.customId === 'ROLE_2') {
            const ROLE_2 = await interaction.guild.roles.cache.find(ROLE => ROLE.id === ROLES.ROLE_2)
            if(!interaction.member.roles.cache.has(ROLES.ROLE_2)) {
                interaction.member.roles.add(ROLES.ROLE_2)
                const ADDED = new MessageEmbed()
                  .setColor('#43b582')
                  .setDescription(`:white_check_mark: Added \`${ROLE_2.name}\``)
                interaction.reply({ embeds: [ADDED], ephemeral: true }).catch(() => interaction.reply({ content: 'I Can\'t Find any Role', ephemeral: true }))
            } else {
                const REMOVED = new MessageEmbed()
                  .setColor('#43b582')
                  .setDescription(`:white_check_mark: Removed \`${ROLE_2.name}\``)
                interaction.member.roles.remove(ROLES.ROLE_2)
                interaction.reply({ embeds: [REMOVED], ephemeral: true })
            }
        }

        if(interaction.customId === 'ROLE_3') {
            const ROLE_3 = await interaction.guild.roles.cache.find(ROLE => ROLE.id === ROLES.ROLE_3)
            if(!interaction.member.roles.cache.has(ROLES.ROLE_3)) {
                interaction.member.roles.add(ROLES.ROLE_3)
                const ADDED = new MessageEmbed()
                  .setColor('#43b582')
                  .setDescription(`:white_check_mark: Added \`${ROLE_3.name}\``)
                interaction.reply({ embeds: [ADDED], ephemeral: true }).catch(() => interaction.reply({ content: 'I Can\'t Find any Role', ephemeral: true }))
            } else {
                const REMOVED = new MessageEmbed()
                .setColor('#43b582')
                .setDescription(`:white_check_mark: Removed \`${ROLE_3.name}\``)
                interaction.member.roles.remove(ROLES.ROLE_3)
                interaction.reply({ embeds: [REMOVED], ephemeral: true })
            }
        }

        if(interaction.customId === 'ROLE_4') {
            const ROLE_4 = await interaction.guild.roles.cache.find(ROLE => ROLE.id === ROLES.ROLE_4)
            if(!interaction.member.roles.cache.has(ROLES.ROLE_4)) {
                interaction.member.roles.add(ROLES.ROLE_4)
                const ADDED = new MessageEmbed()
                  .setColor('#43b582')
                  .setDescription(`:white_check_mark: Added \`${ROLE_4.name}\``)
                interaction.reply({ embeds: [ADDED], ephemeral: true }).catch(() => interaction.reply({ content: 'I Can\'t Find any Role', ephemeral: true }))
            } else {
                interaction.member.roles.remove(ROLES.ROLE_4)
                const REMOVED = new MessageEmbed()
                .setColor('#43b582')
                .setDescription(`:white_check_mark: Removed \`${ROLE_4.name}\``)
                interaction.reply({ embeds: [REMOVED], ephemeral: true })
            }
        }

        if(interaction.customId === 'ROLE_5') {
            const ROLE_5 = await interaction.guild.roles.cache.find(ROLE => ROLE.id === ROLES.ROLE_5)
            if(!interaction.member.roles.cache.has(ROLES.ROLE_5)) {
                interaction.member.roles.add(ROLES.ROLE_5)
                const ADDED = new MessageEmbed()
                  .setColor('#43b582')
                  .setDescription(`:white_check_mark: Added \`${ROLE_5.name}\``)
                interaction.reply({ embeds: [ADDED], ephemeral: true }).catch(() => interaction.reply({ content: 'I Can\'t Find any Role', ephemeral: true }))
            } else {
                interaction.member.roles.remove(ROLES.ROLE_5)
                const REMOVED = new MessageEmbed()
                .setColor('#43b582')
                .setDescription(`:white_check_mark: Removed \`${ROLE_4.name}\``)
                interaction.reply({ embeds: [REMOVED], ephemeral: true })
            }
        }
        if(interaction.customId === 'ROLE_6') {
            const ROLE_6 = await interaction.guild.roles.cache.find(ROLE => ROLE.id === ROLES.ROLE_6)
            if(!interaction.member.roles.cache.has(ROLES.ROLE_6)) {
                interaction.member.roles.add(ROLES.ROLE_6)
                const ADDED = new MessageEmbed()
                  .setColor('#43b582')
                  .setDescription(`:white_check_mark: Added \`${ROLE_6.name}\``)
                interaction.reply({ embeds: [ADDED], ephemeral: true }).catch(() => interaction.reply({ content: 'I Can\'t Find any Role', ephemeral: true }))
            } else {
                interaction.member.roles.remove(ROLES.ROLE_6)
                const REMOVED = new MessageEmbed()
                .setColor('#43b582')
                .setDescription(`:white_check_mark: Removed \`${ROLE_6.name}\``)
                interaction.reply({ embeds: [REMOVED], ephemeral: true })
            }
        }

        if(interaction.customId === 'DELETE_EMBED') {
            interaction.message.delete()
        }
    }
})

TOBZiClient.login(TOKEN)