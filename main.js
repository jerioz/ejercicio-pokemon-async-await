const Btn = document.getElementById('pokemonBtn')
const pokemonContainer = document.getElementById('pokemon')

async function getpintPokemonDom() {
    const id = Math.floor(Math.random() * 100)
        try {
        const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        pokemonContainer.innerHTML += `
                        <h3>${pokemon.data.name}</h3>
                        <img src="${pokemon.data.sprites.other.dream_world.front_default}">
                        `
        console.log(pokemon.data)
        console.log(pokemon.data.name)
        console.log(pokemon.data.sprites.other.dream_world.front_default)
        }
        catch (error) {
        console.error(error);
        }
}

Btn.addEventListener('click', getpintPokemonDom)
