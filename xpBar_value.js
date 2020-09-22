const Jimp = require("jimp");

const xpBar = (hexColor, currentXP, xpNeeded) => {
    return new Promise(resolve => {
        new Jimp(300, 10,"000000", async (err, image) => {
            if (err) throw err;
            const bar = currentXP / xpNeeded * 300;
            new Jimp(bar, 10, hexColor, async (err, color) => {
                if (err) console.error(err);
                image.blit(color, 0, 0);
                image.composite(color, 0, 0);
                const buffer = await image.getBufferAsync(Jimp.MIME_PNG);
                resolve(buffer);
            });
        });
    });
}

module.exports = xpBar; 