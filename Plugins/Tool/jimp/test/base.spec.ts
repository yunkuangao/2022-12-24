import { Context } from 'koishi'
import { exit } from 'process'
import Jimpp from 'koishi-plugin-jimp'
import { resolve } from 'path';

const app = new Context()

app.plugin(Jimpp);


(async () => {
    await app.start()

    console.log(app.jimp.FONT_SANS_10_BLACK)

    const a = await app.jimp.read("Plugins\\News\\gh-tile\\src\\0.jpg")
    a.crop(20,20,20,20)
    a.rotate(45)
    await app.jimp.writeAsync(a,resolve(__dirname,'0.jpg'))
    console.log('done4')
    exit()
})()
