let countCharacters = 0
let countWords = 1
let countVowels = 0

const phrase  = "HeLlo, this is a string"
for(i = 0; i < phrase.length ; i++){
    countCharacters ++
    if (i === phrase.indexOf(",", i)){
        countVowels ++
    }
    if (i === phrase.indexOf(" ", i) || i === phrase.indexOf(".", i)){
        countWords ++
    }
}
console.log(countCharacters)
console.log(countVowels)
console.log(countWords)