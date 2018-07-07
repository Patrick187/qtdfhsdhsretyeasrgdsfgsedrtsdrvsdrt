const Discord = require('discord.js');
const Client = new Discord.Client();

console.log("Bot Is Connected.");

Client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`
**
- Listen Buddy,This Server Will Give You Some Free Money On PayPal For Only Inviting People To It. :grin:
- Don't Believe Me? :thinking: 
- Then Join The Server And Go To #payout-updates.
- You'll See There Some Payout Proofs And Users Reviews.
        -------> https://discord.gg/WBBn6jd <-------
**`)
}).catch(console.error)
})
client.login(process.env.BOT_TOKEN);
