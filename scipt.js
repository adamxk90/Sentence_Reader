let countCharacters = 0
// let countVowels = 0
let phrase  = "HeLlo, this    is a string string"
let countVowels = phrase.match(/[aeiou]/gi).length
let countWords = phrase.split(/\s+/).length

for(let i = 0; i < phrase.length ; i++){
     countCharacters ++
}  

console.log(`The number of words is : ${countWords}`)
console.log(`The number of characters is : ${countCharacters}`)
console.log(`The number of vowels is : ${countVowels}`)
