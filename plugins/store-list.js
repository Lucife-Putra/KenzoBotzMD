let handler = async (m, { conn, usedPrefix, command }) => {
	let msgs = db.data.msgs;
	let msg = Object.entries(msgs)
		.map(([nama, isi]) => {
			return { nama, ...isi };
		})
		.map((v) => v.nama);
	let row = Object.keys(msg).map((v) => ({
		title: msg[v],
		description: "",
		rowId: msg[v],
	}));
	let button = {
		buttonText: "LIST STORE",
		description: "Berikut Daftarnya Yang Ada Di List Store...",
		footerText: wm,
	};
	if (msg[0]) return await conn.sendListM(m.chat, button, row, m);
	else
		throw `\nBelum Ada Yang Di Jual\nKetik *${
			usedPrefix + command
		} <teks>* Untuk Menambahkan Daftarnya.\n`;
};
handler.help = ["liststore"]
handler.tags = ["database"];
handler.command = /^list(store|shop)?$/i;

export default handler;

/**
 * Jangan di hapus
 *
 * Buatan FokusDotId (Fokus ID)
 * https://github.com/fokusdotid
 *
 */
