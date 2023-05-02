/*let handler = async (m, { conn, text }) => {
    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
    conn.sendFile(m.chat, global.API('xteam', '/attp', { file: '', text: teks }), 'attp.webp', '', m, false, { asSticker: true })
}
handler.help = ['attp <teks>']
handler.tags = ['sticker']

handler.command = /^attp$/i

export default handler*/


// insyallah Fix By PutraModz
import { createSticker } from 'wa-sticker-formatter'
import fs from 'fs'

let handler = async (m, { conn, args, text, usedPrefix, command }) => {
    text = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.quoted && m.quoted.caption ? m.quoted.caption : m.quoted && m.quoted.description ? m.quoted.description : ''
    if (!text) throw `Example : ${usedPrefix + command} Lagi Ruwet`
    const res = `https://api.lolhuman.xyz/api/${command}?apikey=${global.lolkey}&text=${encodeURIComponent(text.substring(0, 151))}`
    const res2 = `https://xteam.xyz/attp?file&text=${encodeURIComponent(text.substring(0, 151))}`
    try {
        if (command == 'attp') {
            let stiker = await createSticker(res, { pack: packname, author: author })
            await conn.sendFile(m.chat, stiker, 'atet.webp', '', m)
        } else if (command == 'attp2') {
        let url = await fetch(global.API('https://salism3api.pythonanywhere.com', '/text2gif/', { text: text }))
        let res = await url.json()
        let stick = res.image
            let stiker = await createSticker(stick, { pack: packname, author: author })
            await conn.sendFile(m.chat, stiker, 'atet.webp', '', m)
        } else if (command == 'ttp7') {
        let url = await fetch(global.API('https://salism3api.pythonanywhere.com', '/text2img/', { text: text }))
        let res = await url.json()
        let stick = res.image
            let stiker = await createSticker(stick, { pack: packname, author: author })
            await conn.sendFile(m.chat, stiker, 'atet.webp', '', m)
        } else if (command == 'ttp8') {
        let url = await fetch(global.API('https://salism3api.pythonanywhere.com', '/text2img/', { text: text, outlineColor: '255,0,0,255', textColor: '0,0,0,255' }))
        let res = await url.json()
        let stick = res.image
            let stiker = await createSticker(stick, { pack: packname, author: author })
            await conn.sendFile(m.chat, stiker, 'atet.webp', '', m)
        } else if (command == 'attp3') {
            let stiker = await createSticker(res2, { pack: packname, author: author })
            await conn.sendFile(m.chat, stiker, 'atet.webp', '', m)
        } else {
            let stiker = await createSticker(res, { pack: packname, author: author })
            await conn.sendFile(m.chat, stiker, 'atet.webp', '', m)
        }
    } catch (e) {
        console.log(e)
        throw eror
    }
  
}
handler.help = ['ttp','ttp2 -> ttp8','attp','attp2','attp3']
handler.tags = ['sticker']
handler.command = /^((ttp(2|3|4|5|6|7|8)?)|(attp(2|3)?))$/i
handler.limit = true
export default handler