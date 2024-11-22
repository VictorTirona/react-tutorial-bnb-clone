const nums = [1,2,3,4,5]
const squaredNums = nums.map((x)=>x*x)

console.log("Challenge one: " + squaredNums)


const names = ["alice", "bob", "charlie", "danielle"]

const capitalizedNames = names.map(function(name){
    return (name.charAt(0).toUpperCase() + name.slice(1))
})

console.log("Challenge two: " + capitalizedNames)

const pokemon = ["Bulbasaur","Charmander","Squirtle"]

const htmlPokemon = pokemon.map(function(x){
    return (`<p>${x}</p>`)
})

console.log("Challenge three: " + htmlPokemon)