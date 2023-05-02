// Informasi, setiap akun ChatGPT/Openai, memiliki jumlah permintaan sebanyak $5.00 jika hoki dapat 18.00 tergantung akun, setiap 1 permintaan $ 0.00008. Kalian bisa cek disini https://platform.openai.com/account/usage

import fetch from 'node-fetch'
let handler = async (m, { text,  usedPrefix,  command }) => {
    if (!text) throw `Hay adakah yang bisa saya bantu??`
await m.reply('Searching...')
let kenzomd = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=SGWN&text=${text}&user=user-unique-id`)
let hasil = await kenzomd.json()
 m.reply(`${hasil.result}`.trim())
    }  
handler.help = ['ai', 'openai']
handler.tags = ['fun']
handler.command = /^(ai|openai)$/i
export default handler