const express = require("express")
const app = express()
const https = require("https")
const cors = require("cors")
app.use(express.json({ extended: false }))
app.use(cors())
app.get("/:word", async (req, res) => {

    const source_lang = "en-us"
    const app_id = "c31cc20e"

    const app_key = "82a9d374a5144f8941696fb4e49928dd"
    const fields = "definitions"
    const strictMatch = "false"
    const options = {
        host: 'od-api.oxforddictionaries.com',
        port: '443',
        path: '/api/v2/entries/en-gb/' + req.params.word.toLocaleLowerCase() + '?fields=' + fields + '&strictMatch=' + strictMatch,
        method: "GET",
        headers: {
            'app_id': app_id,
            'app_key': app_key
        }
    };

    https.get(options, (resp) => {
        let body = '';
        resp.on('data', (d) => {
            body += d;
        });
        resp.on('end', () => {
            let parsed = JSON.parse(body);
            let results = parsed.results
            let wordObj = results[0]
            let entries = wordObj['lexicalEntries']
            let entry = entries[0]//obj{entries:[]}
            let sense = entry["entries"]
            let senses = sense[0]

            let definitionARrr = senses["senses"]
            let result = definitionARrr[0]
            let definition = result["definitions"]
            let output = definition[0]
console.log("here is output",output)
            res.send(output)
        });
    });

})


// app.use('/',require('./'))
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`listening on port ${PORT}`))

