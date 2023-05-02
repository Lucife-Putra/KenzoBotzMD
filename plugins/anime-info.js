/*import fetch from 'node-fetch'
import cheerio from 'cheerio'
let handler = async (m, { conn, text }) => {
if (!text) throw `*Masukan Judul Anime Yang Ingin Kamu Cari !*`
let res = await fetch(global.API('https://api.jikan.moe', '/v3/search/anime', { q: text }))

if (!res.ok) throw 'Tidak Ditemukan'
let json = await res.json()

	let { title, members, synopsis, episodes, url, rated, score, image_url, type, start_date, end_date, mal_id } = json.results[0]
let res2 = await fetch(`https://myanimelist.net/anime/${mal_id}`)
if (!res2.ok) throw 'Not Found'
let html = await res2.text()
let animeingfo = `📚 ᴛɪᴛʟᴇ: ${title}
📑 ᴇᴘɪsᴏᴅᴇ: ${episodes}
✉️ ᴛʀᴀɴsᴍɪsɪ: ${type}

🌟 ʀᴀᴛɪɴɢ: ${rated}
🧮 sᴄᴏʀᴇ: ${score}
👥 ᴍᴇᴍʙᴇʀs: ${members}
💬 sɪɴᴏᴘsɪs: ${synopsis}
`
conn.sendHydrated(m.chat, `*${htki} ANIME INFO ${htka}*`, animeingfo, image_url, url, '🌎 ʟ ɪ ɴ ᴋ', null, null, [[null,null],[null,null],[null,null]], m)

}
handler.help = ['animeinfo <anime>']
handler.tags = ['anime']
handler.command = /^(animeinfo)$/i

export default handler*/

import fetch from 'node-fetch'

var handler = async (m, { conn, text }) => {
if (!text) throw `*Masukan Judul Anime Yang Ingin Kamu Cari !*`
let res = await fetch('https://api.jikan.moe/v4/manga?q=' + text)
if (!res.ok) throw 'Tidak Ditemukan'
let json = await res.json()
let { chapters, title_japanese, url, type, score, members, background, status, volumes, synopsis, favorites } = json.data[0]
let author = json.data[0].authors[0].name
let animeingfo = `📚 ᴛɪᴛʟᴇ: ${title_japanese}
📑 ᴄʜᴀᴘᴛᴇʀ: ${chapters}
✉️ ᴛʀᴀɴsᴍɪsɪ: ${type}
🗂 sᴛᴀᴛᴜs: ${status}
🗃 ᴠᴏʟᴜᴍᴇs: ${volumes}
🌟 ғᴀᴠᴏʀɪᴛᴇ: ${favorites}
🧮 sᴄᴏʀᴇ: ${score}
👥 ᴍᴇᴍʙᴇʀs: ${members}
⛓️ ᴜʀʟ: ${url}
👨‍🔬 ᴀᴜᴛʜᴏʀs: ${author}
📝 ʙᴀᴄᴋɢʀᴏᴜɴᴅ: ${background}
💬 sɪɴᴏᴘsɪs: ${synopsis}
`
conn.sendFile(m.chat, json.data[0].images.jpg.image_url, 'animek.jpg', `*${htki} ANIME INFO ${htka}*\n` + animeingfo, m)
}
handler.help = ['animeinfo <anime>']
handler.tags = ['anime']
handler.command = /^(animeinfo)$/i

export default handler

