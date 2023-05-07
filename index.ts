const { Client, GatewayIntentBits, Events } = require("discord.js")
require("dotenv").config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages]})

        client.once(Events.ClientReady, c => {
            console.log(`${c.user.tag} has awakened.`)
        })

client.login(process.env.TOKEN)
