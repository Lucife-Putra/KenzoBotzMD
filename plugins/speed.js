import { cpus as _cpus, totalmem, freemem } from 'os'
import util from 'util'
import os from 'os'
import fs from 'fs'
import fetch from 'node-fetch'
import osu from 'node-os-utils'
import { performance } from 'perf_hooks'
import { sizeFormatter } from 'human-readable'
let format = sizeFormatter({
  std: 'JEDEC', // 'SI' (default) | 'IEC' | 'JEDEC'
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`,
})
var handler = async (m, { conn, isRowner}) => {
	let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
  const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
  const groupsIn = chats.filter(([id]) => id.endsWith('@g.us')) //groups.filter(v => !v.read_only)
  const used = process.memoryUsage()
  const cpus = _cpus().map(cpu => {
    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
    return cpu
  })
  const cpu = cpus.reduce((last, cpu, _, { length }) => {
    last.total += cpu.total
    last.speed += cpu.speed / length
    last.times.user += cpu.times.user
    last.times.nice += cpu.times.nice
    last.times.sys += cpu.times.sys
    last.times.idle += cpu.times.idle
    last.times.irq += cpu.times.irq
    return last
  }, {
    speed: 0,
    total: 0,
    times: {
      user: 0,
      nice: 0,
      sys: 0,
      idle: 0,
      irq: 0
    }
  })

  let old = performance.now()
  await m.reply(`${htki} ${htjava} *T e s t i n g. . .* ${htka}`)
  let neww = performance.now()
  let speed = neww - old
  await conn.reply(m.chat,`*s ᴘ ᴇ ᴇ ᴅ*
${Math.round(neww - old)} ms
${speed} ms

*ᴄ ʜ ᴀ ᴛ s*
• *${groupsIn.length}* Group Chats
• *${groupsIn.length}* Groups Joined
• *${groupsIn.length - groupsIn.length}* Groups Left
• *${chats.length - groupsIn.length}* Personal Chats
• *${chats.length}* Total Chats


*s ᴇ ʀ ᴠ ᴇ ʀ*
*🛑 ʀᴀᴍ:* ${format(totalmem() - freemem())} / ${format(totalmem())}
*🔵 ғʀᴇᴇRAM:* ${format(freemem())}
*💻 ᴘʟᴀᴛғᴏʀᴍ :* ${os.platform()}
*🧿 sᴇʀᴠᴇʀ :* ${os.hostname()}
${readMore}
NodeJS Memory Usage*
${'```' + Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v => v.length)), ' ')}: ${format(used[key])}`).join('\n') + '```'}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}

_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`, fakes)
}
handler.help = ['ping', 'speed']
handler.tags = ['info', 'tools']

handler.command = /^(ping|speed|info)$/i
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, ' *Days ☀️*\n ', h, ' *Hours 🕐*\n ', m, ' *Minute ⏰*\n ', s, ' *Second ⏱️* '].map(v => v.toString().padStart(2, 0)).join('')
}

/*import { cpus as _cpus, totalmem, freemem } from 'os'
import util from 'util'
import os from 'os'
import fs from 'fs'
import fetch from 'node-fetch'
import osu from 'node-os-utils'
import { promises, readFileSync } from 'fs'
import { performance } from 'perf_hooks'
import { sizeFormatter } from 'human-readable'
let format = sizeFormatter({
  std: 'JEDEC', // 'SI' (default) | 'IEC' | 'JEDEC'
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`,
})
let handler = async (m, { conn, isRowner}) => {
	let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
  const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
  const groupsIn = chats.filter(([id]) => id.endsWith('@g.us')) //groups.filter(v => !v.read_only)
  const used = process.memoryUsage()
  const cpus = _cpus().map(cpu => {
    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
    return cpu
  })
  const cpu = cpus.reduce((last, cpu, _, { length }) => {
    last.total += cpu.total
    last.speed += cpu.speed / length
    last.times.user += cpu.times.user
    last.times.nice += cpu.times.nice
    last.times.sys += cpu.times.sys
    last.times.idle += cpu.times.idle
    last.times.irq += cpu.times.irq
    return last
  }, {
    speed: 0,
    total: 0,
    times: {
      user: 0,
      nice: 0,
      sys: 0,
      idle: 0,
      irq: 0
    }
  })

  let old = performance.now()
  await m.reply(`${htki} ${htjava} *T e s t i n g. . .* ${htka}`)
  let neww = performance.now()
  let session = fs.statSync(authFile)
  let speed = neww - old
  let res = JSON.parse(readFileSync('./json/emoji.json'))
  let em = res.emoji
  let yt = [ '1', '2', '3', '4']
  let rt = yt.getRandom()
  let nau = await fs.readFileSync('./media/menu' + rt + '.jpg')
  let vr = ['2', '3', '4', '5', '6', '7', '8']
  let num = vr.getRandom()
  let putra = await fs.readFileSync('./media/elaina' + num + '.png')
//let zyko = 'https://telegra.ph/file/0b523d1d86ca372a408d2.jpg'
  let ha = `${htki} *s ᴘ ᴇ ᴇ ᴅ* ${htka}`
  let runtt = `
 ${Math.round(neww - old)} ms
 ${speed} ms

${htki} ʀ ᴜ ɴ ᴛ ɪ ᴍ ᴇ ${htka}
 ${muptime}
 ${readMore}
${htki} ᴄ ʜ ᴀ ᴛ s ${htka}
 • *${groupsIn.length}* Group Chats
 • *${groupsIn.length}* Groups Joined
 • *${groupsIn.length - groupsIn.length}* Groups Left
 • *${chats.length - groupsIn.length}* Personal Chats
 • *${chats.length}* Total Chats
${htki} s ᴇ ʀ ᴠ ᴇ ʀ ${htka}
 *🛑 ʀᴀᴍ:* ${format(totalmem() - freemem())} / ${format(totalmem())}
 *🔵 ғʀᴇᴇRAM:* ${format(freemem())}
 *📑 sᴇssɪᴏɴ sɪᴢᴇ :* ${format(session.size)}
 *💻 ᴘʟᴀᴛғᴏʀᴍ :* ${os.platform()}
 *🧿 sᴇʀᴠᴇʀ :* ${os.hostname()}
 ${readMore}
 NodeJS Memory Usage*
 ${'```' + Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v => v.length)), ' ')}: ${format(used[key])}`).join('\n') + '```'}

 ${cpus[0] ? `_Total CPU Usage_
 ${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}

 _CPU Core(s) Usage (${cpus.length} Core CPU)_
 ${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}` 
let fliveLoc22 = {
            key: {
            participant : '0@s.whatsapp.net'},
            message: { "liveLocationMessage": { "title": gcname,"h": bottime, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')}}
           }
/*await conn.send3ButtonDoc(m.chat, runtt, botdate, 'Owner', '.owner', 'Menu', '.Menu', '\nOwner Gw ganteng banget', '.owner', fliveLoc22, {
			contextInfo: {
				forwardingScore: fsizedoc,
				externalAdReply: {
                    body: bottime,
    containsAutoReply: true,
    mediaType: 1,
    mediaUrl: syt,
    renderLargerThumbnail: true,
    showAdAttribution: false,
    sourceId: '© 𝗭𝘆𝗸𝗼𝗕𝗼𝘁𝘇-𝗠𝗗 ',
    sourceType: 'PDF',
    previewType: 'PDF',
    sourceUrl: wame,
    thumbnail: await(await fetch(zyko)).buffer(),
    thumbnailUrl: syt,
    title: '𝗭𝘆𝗸𝗼𝗕𝗼𝘁𝘇 𝗠𝗗',
				}
			}
})*/
/*await conn.send2ButtonVid(m.chat, pp, cap, botdate, '𝐋𝐢𝐬𝐭𝐌𝐞𝐧𝐮', '.listmenu', '𝐃𝐚𝐬𝐛𝗼𝐚𝐫𝐝', '.db', m, adReply)*/
//}

/*await conn.relayMessage(m.chat, { requestPaymentMessage: {
  noteMessage: { extendedTextMessage: { text: runtt,
  currencyCodeIso4217: 'USD',
  requestFrom: '0@s.whatsapp.net',
  expiryTimestamp: 8600,
  amount: 10000,
  background: thumb
}}}}, {})

conn.send3ButtonImg(m.chat, nau, ha, runtt + '\n\n' + botdate, em.getRandom() + 'Menu', '.menu', em.getRandom() + 'Owner', '.owner', em.getRandom() + 'Sewa', '.sewa', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: 'https://instagram.com/mell_putri14',
    mediaType: 2, 
    description: sgc,
    title: 'Jᴏɪɴ Sɪɴɪ Cᴜʏ',
    body: gcname,
    thumbnail: putra,
    //fs.readFileSync('./thumbnail.jpg'),
    sourceUrl: sig,
       }
     } 
 }) 
}          
handler.help = ['ping', 'speed']
handler.tags = ['info', 'tools']

handler.command = /^(ping|speed|info)$/i
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, ' *Days ☀️*\n ', h, ' *Hours 🕐*\n ', m, ' *Minute ⏰*\n ', s, ' *Second ⏱️* '].map(v => v.toString().padStart(2, 0)).join('')
}
function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
  }
  */