let handler = async (m, { text, usedPrefix, command }) => {
	if (!text)
		throw `Gunakan *${usedPrefix}liststore* Untuk Melihat Daftar Pesan Yang Tesimpan.`;
	let msgs = db.data.msgs;
	if (!(text in msgs)) throw `'${text}' Tidak Terdaftar Di List.`;
	delete msgs[text];
	m.reply(
		`Berhasil Menghapus Dari Daftar List`
	);
};
handler.help = ["dellist"]
handler.tags = ["store"];
handler.command = /^dellist$/i;
handler.group = true;
handler.admin = true;
export default handler;
