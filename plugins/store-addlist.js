const { proto } = (await import("@adiwajshing/baileys")).default;

let handler = async (m, { conn, text, command, usedPrefix }) => {
	let M = proto.WebMessageInfo;
	if (!m.quoted) throw `Balas Pesan Dengan Perintah *${usedPrefix + command}*`;
	if (!text)
		throw `Contoh:\n${
			usedPrefix + command
		} tes`;
	let msgs = db.data.msgs;
	if (text in msgs) throw `'${text}' Telah Terdaftar Di List Store`;
	msgs[text] = M.fromObject(await m.getQuotedObj()).toJSON();
	m.reply(
		`Berhasil Menambahkan ${text} Ke List Store.\n\nAkses Dengan Mengetik Namanya`.trim()
	);
};
handler.help = ["addlist"]
handler.tags = ["store"];
handler.command = /^addlist$/i;

handler.group = true;
handler.admin = true;

export default handler;
