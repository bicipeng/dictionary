//functions here are use to extrace data from nested obj return from the oxfor dict API
let output =[]
let lex=""
var extractDetail  = (inputObj) =>{
for(let key in inputObj){
    let obj=inputObj[key]
    if(Array.isArray(obj)){
        for( ele of obj){
            extractDetail(ele)
        }
    }
}
if(inputObj["definitions"]){
    output=output.concat(inputObj["definitions"])
}
if (inputObj["lexicalCategory"]){
    lex+=inputObj["lexicalCategory"].id
}
return [output,lex]
}

export default extractDetail