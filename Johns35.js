const Discord = require('discord.js');
const Client = new Discord.Client();

console.log("Bot Is Connected.");

Client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`
**
- Hey Listen Buddy,This Server Will Give You 1$ For Each Person You Invite To The Server.:grin:
- You Will Receive Your Money With PayPal.
- Payout Date Is 1st August.
- Don't Believe Me? :thinking: 
- Then Join The Server And Check It Out.
- You'll See There Some Payout Proofs And Users Reviews.
        -------> https://discord.gg/mDZcNDH <-------
**`)
}).catch(console.error)
})
Client.login(process.env.BOT_TOKEN);
