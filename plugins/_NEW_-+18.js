let handler = async (m, { conn, text, usedPrefix }) => {
	let yh = global.vbokep;
	let url = yh[Math.floor(Math.random() * yh.length)];

	conn.sendButton(
		m.chat,
		"Random Bokep",
		"Dosa Tanggung Sendiri",
		url,
		[["\nJadi Pengen Coli", "bilek"],["Next", "/bokep"]],
		m
	);
};

handler.tags = ["asupan"];
handler.help = ["bokep"];
handler.command = /^(bokep)$/i

handler.limit = true

export default handler

global.vbokep = [
	"https://telegra.ph/file/f9f3d01fead02386e5331.mp4",
	"https://telegra.ph/file/d1d7b11f5ab57b3e57d01.mp4",
	"https://telegra.ph/file/11e0d15aac245accb6217.mp4",
	"https://telegra.ph/file/dadd5f030d75ff9e787c8.mp4",
	"https://telegra.ph/file/d18b06f324412d2cdb270.mp4",
	"https://telegra.ph/file/7d3a354b69fe2e1c60d34.mp4",
	"https://telegra.ph/file/1ae88269d50a627761072.mp4",
	"https://e.top4top.io/m_2344gqc9p1.mp4",
	"https://f.top4top.io/m_2344zxnbv0.mp4",
	"https://e.top4top.io/m_234403ua01.mp4",
	"https://g.top4top.io/m_23444af6m0.mp4",
	"https://e.top4top.io/m_23444qdm11.mp4",
	"https://d.top4top.io/m_2344zr3je1.mp4",
	"https://b.top4top.io/m_2344w2x0n1.mp4",
	"https://f.top4top.io/m_23441a9rx1.mp4",
	"https://d.top4top.io/m_234461kmn0.mp4",
	"https://l.top4top.io/m_22572kvnt0.mp4",
"https://a.top4top.io/m_22741bntt0.mp4",
"https://g.top4top.io/m_2274ss8270.mp4",
"https://h.top4top.io/m_22746h8370.mp4",
"https://c.top4top.io/m_2274k1olx1.mp4",
"https://k.top4top.io/m_2274iu8ph1.mp4",
"https://c.top4top.io/m_2274813w23.mp4",
"https://g.top4top.io/m_2274qzr5b5.mp4",
"https://k.top4top.io/m_2274znr525.mp4",
"https://j.top4top.io/m_22744mccx0.mp4",
"https://g.top4top.io/m_2274dkhny3.mp4",
"https://i.top4top.io/m_2257a87ov0.mp4", 
"https://k.top4top.io/m_2257xoco60.mp4",
"https://i.top4top.io/m_2257uqopw1.mp4",
"https://b.top4top.io/m_2257p8fdg0.mp4",
"https://c.top4top.io/m_2257ju33j0.mp4",
"https://a.top4top.io/m_2257showp0.mp4",
"https://b.top4top.io/m_22578syiy0.mp4",
"https://a.top4top.io/m_22576ni620.mp4",
"https://f.top4top.io/m_2257f9mcv1.mp4",
"https://e.top4top.io/m_2257efy1t0.mp4",
"https://b.top4top.io/m_2257kc2960.mp4",
"https://b.top4top.io/m_2257oe6hv0.mp4",
"https://h.top4top.io/m_2257zsfo91.mp4",
"https://b.top4top.io/m_2257pugx00.mp4",
"https://i.top4top.io/m_225756xso0.mp4",
"https://h.top4top.io/m_22573rdw80.mp4",
"https://f.top4top.io/m_2235sxi5y1.mp4",
"https://f.top4top.io/m_2257ofv9s0.mp4",
"https://e.top4top.io/m_2257scyvl1.mp4",
"https://e.top4top.io/m_2257di15t0.mp4",
"https://d.top4top.io/m_225754y5s0.mp4",
"https://j.top4top.io/m_22573jxk20.mp4",
"https://d.top4top.io/m_2257puxyo0.mp4",
"https://e.top4top.io/m_2257bb1an0.mp4",
"https://a.top4top.io/m_2257utyrp0.mp4",
"https://b.top4top.io/m_22571xiss0.mp4",
"https://a.top4top.io/m_2257tgfkz0.mp4",
"https://a.top4top.io/m_2263r7okf0.mp4",
"https://g.top4top.io/m_2263l67d60.mp4",
"https://c.top4top.io/m_2263l4udc0.mp4",
"https://c.top4top.io/m_2263ap0rg0.mp4",
"https://a.top4top.io/m_2263lhkvu0.mp4",
"https://l.top4top.io/m_2263hwu9e0.mp4",
"https://g.top4top.io/m_22632ofax0.mp4",
"https://e.top4top.io/m_22636mlov3.mp4",
"https://l.top4top.io/m_22633xw4r0.mp4",
"https://f.top4top.io/m_2263chaub0.mp4",
"https://f.top4top.io/m_2263pljyx0.mp4",
"https://h.top4top.io/m_2263u512n0.mp4",
"https://k.top4top.io/m_22633kkj80.mp4",
"https://e.top4top.io/m_226380tpe0.mp4",
"https://g.top4top.io/m_2263bmdi20.mp4",
"https://j.top4top.io/m_2263ry6570.mp4",
"https://i.top4top.io/m_2263hkobr0.mp4"
];
