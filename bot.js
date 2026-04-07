const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once("ready", () => {
  console.log("TPA bot is online!");
});

client.on("interactionCreate", async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "tpa") {
    await interaction.reply(`toilet paper awesome
toilet paper awesome`);
  }
});

client.login(process.env.DISCORD_TOKEN);
