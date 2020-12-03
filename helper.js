//functions here are use to extrace data from nested obj return from the oxfor dict API
let output =[]
const extraData  = (inputObj,str ="definition ") =>{
for(let key in inputObj){
    let obj=inputObj[key]
    if(Array.isArray(obj)){
        for( ele of obj){
            extractDefinition(ele)
        }
    }
}
if(inputObj[str]){
    output=output.concat(inputObj[str])
}else{
    //can't find the data 
    output.push("null")
}
return output
}

export default extractDefinition;