const Event = require("../structures/Event");

class New extends Event {
    constructor(...args) {
        super(...args);
    }

    async execute(guild) {
        /*if (this.client.build === "development") {
            const check = this.client.functions.checkTester(guild);
            console.log(`${guild.owner.user.username} | ${check}`);
            if (!check) setTimeout(() => guild.leave(), 2000);
        }
        if (this.client.build === "prime") {
            const check = this.client.functions.checkDonor(guild);
            console.log(`${guild.owner.user.username} | ${check}`);
            if (!check) setTimeout(() => guild.leave(), 2000);
        }
        */

        if (this.client.build === "stable") this.client.functions.postStats("a");
        
        this.client.transmitStats();
    }
}

module.exports = New;
