const express = require("express")
const app = express()
const https = require("https")
const cors = require("cors")
const { app_id, app_key } = require("./config")



app.use(express.json({ extended: false }))
app.use(cors())
app.get("/:word", async (req, res) => {

    const source_lang = "en-us"
    //    const {app_id, app_key} = require ("./config")
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
//there should be a better way to access data, s.a. using recursion, will come back to it later
            let parsed = JSON.parse(body);
            let results = parsed.results
            let wordObj = results[0]
            let entries = wordObj['lexicalEntries']
            let entry = entries[0]//obj{entries:[]}
            let sense = entry["entries"]
            let senses = sense[0]

            let definitionARrr = senses["senses"]
            let result = definitionARrr[0]

            const defined = []

            let subSenses = result["subsenses"]//array
            for (let el of subSenses) {
                if (el["definitions"]) {
                    defined.push(el["definitions"][0])
                }

            }
            let wordClass = []
            for (let ele of entries) {
                if (ele["lexicalCategory"]) {
                    wordClass.push(ele["lexicalCategory"].id)
                }

            }

            for (let el of entries) {

                let devDef = el["entries"][0]

                for (let key in devDef) {
                    if (devDef["senses"]) {
                        let sen = devDef["senses"]
                        for (let def of sen) {
                            if (def["definitions"]) {
                                defined.push(def["definitions"][0])
                            }
                        }
                    }
                }
            }
            res.send({ defined, wordClass })
        });
    });

})


// app.use('/',require('./'))
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`listening on port ${PORT}`))


let output = []
let lex = []
var extractDetail = (inputObj) => {
    for (let key in inputObj) {
        let obj = inputObj[key]
        if (Array.isArray(obj)) {
            for (ele of obj) {
                extractDetail(ele)
            }
        }
    }
    if (inputObj["definitions"]) {
        output = output.concat(inputObj["definitions"])
    } else if (inputObj["lexicalCategory"]) {
        lex = lex.concat(inputObj["lexicalCategory"].id)
    }
    return [output, lex]
}