import { generateWAMessageFromContent } from '@adiwajshing/baileys'
let handler = async (m, { conn, text, participants }) => {
  let users = participants.map(u => conn.decodeJid(u.id))
  let q = m.quoted ? m.quoted : m
  let c = m.quoted ? m.quoted : m.msg
  const msg = conn.cMod(m.chat,
    generateWAMessageFromContent(m.chat, {
      [c.toJSON ? q.mtype : 'extendedTextMessage']: c.toJSON ? c.toJSON() : {
        text: c || ''
      }
    }, {
      quoted: m,
      userJid: conn.user.id
    }),
    text || q.text, conn.user.jid, { mentions: users }
  )
  await conn.relayMessage(m.chat, msg.message, { quoted : fkontak }, { messageId: msg.key.id })
}
handler.help = ['opengumuman', 'oannounce', 'ohidetag'].map(v => v + ' [teks]')
handler.tags = ['owner', 'group']
handler.command = /^(o-h|o-hiddentag|o-hidetag)$/i

handler.group = true
handler.owner = true
handler.admin = false 

export default handler