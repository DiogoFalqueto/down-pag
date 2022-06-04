const axios = require("axios")
const fs = require("fs")

async function downloadHtmlPag(nameFile, url) {
	const res = await axios.get(url)
	fs.writeFileSync(nameFile, res.data)
}

module.exports = {download: downloadHtmlPag}
