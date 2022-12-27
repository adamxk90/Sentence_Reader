let countCharacters = 0
let countWords = 1
let countVowels = 0
const phrase  = "HeLlo , this is a string string"

countVowels = phrase.match(/[aeiou]/gi).length

for(let i = 0; i < phrase.length ; i++){
    countCharacters ++
        
    if (i === phrase.indexOf(" ", i) && i === phrase.indexOf(" ", i-1)){
        countWords ++
    } }
console.log(countVowels)
console.log(countCharacters)
console.log(countWords)
