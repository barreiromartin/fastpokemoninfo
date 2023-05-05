<script>
import { utilsMixins } from '/mixins/utils.js';

export default{
    mixins: [utilsMixins],
    inject: ['dataJson'],
    data(){
        return{
            pokemon: this.dataJson,
            abilities: [],
            moves: [],
            weaknesses:[],
            resistances: [],
            immunities: [],
            doubleWeaknesses:[],
            doubleResistances:[],
            neutral: [],
            typeChart: {
                "normal": {
                    "normal": 1, "fighting": 2, "flying": 1, "poison": 1, "ground": 1, "rock": 1, "bug": 1, "ghost": 0, "steel": 1, "fire": 1, "water": 1, "grass": 1, "electric": 1, "psychic": 1, "ice": 1, "dragon": 1, "dark": 1, "fairy": 1
                },
                "fighting": {
                    "normal": 1, "fighting": 1, "flying": 2, "poison": 1, "ground": 1, "rock": 0.5, "bug": 0.5, "ghost": 1, "steel": 1, "fire": 1, "water": 1, "grass": 1, "electric": 1, "psychic": 2, "ice": 1, "dragon": 1, "dark": 0.5, "fairy": 2
                },
                "flying": {
                    "normal": 1, "fighting": 0.5, "flying": 1, "poison": 1, "ground": 0, "rock": 2, "bug": 0.5, "ghost": 1, "steel": 1, "fire": 1, "water": 1, "grass": 0.5, "electric": 2, "psychic": 1, "ice": 2, "dragon": 1, "dark": 1, "fairy": 1
                },
                "poison": {
                    "normal": 1, "fighting": 1, "flying": 1, "poison": 0.5, "ground": 2, "rock": 1, "bug": 1, "ghost": 1, "steel": 1, "fire": 1, "water": 1, "grass": 0.5, "electric": 1, "psychic": 2, "ice": 1, "dragon": 1, "dark": 1, "fairy": 0.5
                },
                "ground": {
                    "normal": 1, "fighting": 1, "flying": 1, "poison": 0.5, "ground": 1, "rock": 0.5, "bug": 1, "ghost": 1, "steel": 1, "fire": 1, "water": 2, "grass": 2, "electric": 0, "psychic": 1, "ice": 2, "dragon": 1, "dark": 1, "fairy": 1
                },
                "rock": {
                    "normal": 0.5, "fighting": 2, "flying": 0.5, "poison": 0.5,"ground": 2, "rock": 1, "bug": 1, "ghost": 1, "steel": 2, "fire": 0.5, "water": 2, "grass": 2, "electric": 1, "psychic": 1, "ice": 1, "dragon": 1, "dark": 1, "fairy": 1
                },
                "ice": {
                    "normal": 1, "fighting": 2, "flying": 1, "poison": 1, "ground": 1, "rock": 2, "bug": 1, "ghost": 1, "steel": 2, "fire": 2, "water": 1, "grass": 1, "electric": 1, "psychic": 1, "ice": 0.5, "dragon": 1, "dark": 1, "fairy": 1
                },
                "dragon": {
                    "normal": 1, "fighting": 1, "flying": 1, "poison": 1, "ground": 1, "rock": 1, "bug": 1, "ghost": 1, "steel": 1, "fire": 0.5, "water": 0.5, "grass": 0.5, "electric": 0.5, "psychic": 1, "ice": 2, "dragon": 2, "dark": 1, "fairy": 2
                },
                "dark": {
                    "normal": 1, "fighting": 2, "flying": 1, "poison": 1, "ground": 1, "rock": 1, "bug": 2, "ghost": 0.5, "steel": 1, "fire": 1, "water": 1, "grass": 1, "electric": 1, "psychic": 0, "ice": 1, "dragon": 1, "dark": 0.5, "fairy": 2
                },
                "fairy": {
                    "normal": 1, "fighting": 0.5, "flying": 1, "poison": 2, "ground": 1, "rock": 1, "bug": 0.5, "ghost": 1, "steel": 2, "fire": 1, "water": 1, "grass": 1, "electric": 1, "psychic": 1, "ice": 1, "dragon": 0, "dark": 0.5, "fairy": 1
                },
                "bug": {
                    "normal": 1, "fighting": 0.5, "flying": 2, "poison": 1, "ground": 0.5, "rock": 2, "bug": 1, "ghost": 1, "steel": 1, "fire": 2, "water": 1, "grass": 0.5, "electric": 1, "psychic": 1, "ice": 1, "dragon": 1, "dark": 1, "fairy": 1
                },
                "ghost": {
                    "normal": 0, "fighting": 1, "flying": 1, "poison": 1, "ground": 1, "rock": 1, "bug": 1, "ghost": 2, "steel": 1, "fire": 1, "water": 1, "grass": 1, "electric": 1, "psychic": 1, "ice": 1, "dragon": 1, "dark": 2, "fairy": 1
                },
                "steel": {
                    "normal": 0.5, "fighting": 2, "flying": 0.5, "poison": 0, "ground": 2, "rock": 0.5, "bug": 0.5, "ghost": 1, "steel": 0.5, "fire": 2, "water": 1, "grass": 0.5, "electric": 1, "psychic": 0.5, "ice": 0.5, "dragon": 0.5, "dark": 1, "fairy": 0.5
                },
                "fire": {
                    "normal": 1, "fighting": 1, "flying": 1, "poison": 1, "ground": 2, "rock": 2, "bug": 0.5, "ghost": 1, "steel": 0.5, "fire": 0.5, "water": 2, "grass": 0.5, "electric": 1, "psychic": 1, "ice": 0.5, "dragon": 1, "dark": 1, "fairy": 0.5
                },
                "water": {
                    "normal": 1, "fighting": 1, "flying": 1, "poison": 1, "ground": 1, "rock": 1, "bug": 1, "ghost": 1, "steel": 0.5, "fire": 0.5, "water": 0.5, "grass": 2, "electric": 2, "psychic": 1, "ice": 0.5, "dragon": 1, "dark": 1, "fairy": 1
                },
                "psychic": {
                    "normal": 1, "fighting": 0.5, "flying": 1, "poison": 1, "ground": 1, "rock": 1, "bug": 2, "ghost": 2, "steel": 1, "fire": 1, "water": 1, "grass": 1, "electric": 1, "psychic": 0.5, "ice": 1, "dragon": 1, "dark": 2, "fairy": 1
                },
                "electric": {
                    "normal": 1, "fighting": 1, "flying": 0.5, "poison": 1, "ground": 2, "rock": 1, "bug": 1, "ghost": 1, "steel": 0.5, "fire": 1, "water": 1, "grass": 1, "electric": 0.5, "psychic": 1, "ice": 1, "dragon": 1, "dark": 1, "fairy": 1
                },
                "grass": {
                    "normal": 1, "fighting": 1, "flying": 2, "poison": 2, "ground": 0.5, "rock": 1, "bug": 2, "ghost": 1, "steel": 1, "fire": 2, "water": 0.5, "grass": 0.5, "electric": 1, "psychic": 1, "ice": 2, "dragon": 1, "dark": 1, "fairy": 1
                },
            },
            filtro: "",
            evolutions: [],
        }
    },
    methods:{
        mensaje(){
            console.log(this.evolutions);

        },

        //Función para recoger las habilidades del pokemon y alamacenarlas en un array.
        getPokemonAbilities() {            
            this.pokemon["abilities"].forEach((ability) => {
                fetch(ability["ability"]["url"])
                .then((response) => {
                    if (response.ok) return response.json();                    
                    return Promise.reject(response);
                })
                .then((data) => {
                    let abilityDescription = "";
                    data["effect_entries"].forEach((description) => {
                    if (description.language.name == "en")
                        abilityDescription = description["effect"];
                    });
                    this.abilities.push({ name: data.name, description: abilityDescription })
                });
            });
        },

        //Aquí poner la descripción corta
        getPokemonMoves() {
            this.pokemon["moves"].forEach((move) => {
                fetch(move["move"]["url"])
                .then((response) => {
                    if (response.ok) return response.json();                    
                    return Promise.reject(response);
                })
                .then((data) => {
                    let moveDescription = "";
                    data["effect_entries"].forEach((description) => {
                        if (description.language.name == "en")
                            //flavour_text
                            moveDescription = description.short_effect;
                    });

                    this.moves.push({ name: data.name, description: moveDescription, type: data.type.name, category: data.damage_class.name, power: data.power, pp: data.pp, accuracy: data.accuracy });
                });
            });
        },

        nuevaBusqueda(option, subject){
            this.$emit("nuevaBusqueda", option, subject);
        },


        getPokemonWeakness(pokemonJson) {
            const types = pokemonJson.types.map(t => t.type.name);
            let multipliers = {};

            for (const type in this.typeChart) {
                multipliers[type] = 1;
                for (const pokemonType of types) {
                    multipliers[type] *= this.typeChart[pokemonType][type];
                }
            }

            const weaknesses = [];
            const resistances = [];
            const immunities = [];
            const weaknessesX2 = [];
            const resistancesX2 = [];
            const neutrals = [];

            for (const type in multipliers) {
                const multiplier = multipliers[type];
                if (multiplier > 1) {
                    if (multiplier === 4) {
                        weaknessesX2.push(type);
                    } else {
                        weaknesses.push(type);
                    }
                } else if (multiplier < 1 && multiplier > 0) {
                    if (multiplier === 0.25) {
                        resistancesX2.push(type);
                    } else {
                        resistances.push(type);
                    }
                } else if (multiplier === 0) {
                    immunities.push(type);
                } else if (multiplier === 1) {
                    neutrals.push(type);
                }
            }
            this.weaknesses = weaknesses;
            this.resistances = resistances;
            this.immunities = immunities;
            this.doubleResistances = resistancesX2;
            this.doubleWeaknesses = weaknessesX2;
            this.neutral = neutrals;
        },

        async getPokemonChain() {
            // Obtener datos de evolución
            const speciesResponse = await fetch(this.pokemon.species.url);
            const speciesData = await speciesResponse.json();
            const evolutionResponse = await fetch(speciesData.evolution_chain.url);
            const evolutionData = await evolutionResponse.json();

            // Con la función getEvolutions relleno el array evolutionsNames con los nombres de las evoluciones.
            const evolutionsNames = this.getEvolutions(evolutionData.chain);

            // En este bucle recorro el arrayEvolutionsNames para cargar los json con las evoluciones y luego poder mostrarlos.
            const pokemonJsonPromises = evolutionsNames.map(async (element) => {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${element}`);
                return await response.json();
            });

            const evolutionsJson = await Promise.all(pokemonJsonPromises);
            this.evolutions = evolutionsJson;
        },
      

        getEvolutions(chain) {
            let evos = [];
            const traverseChain = (node) => {
                if (node && node.species && node.species.name) {
                    evos.push(node.species.name);
                }
        
                if (node && node.evolves_to) {
                    node.evolves_to.forEach((nextNode) => {
                    traverseChain(nextNode);
                    });
                }
            };
            traverseChain(chain);
    
            return evos;
        },
    },
    computed:{
        sprite(){
            return this.pokemon["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"] || this.pokemon["sprites"]["versions"]["generation-v"]["black-white"]["front_default"] || this.pokemon["sprites"]["front_default"]
        },
        statBaseStyle() {
            return (valor) => {
                const color = this.getColor(valor);
                const width = this.getWidth(valor);
                return {
                    height: "1.3em",
                    width: `${width}%`,
                    backgroundColor: `rgb(${color.r}, ${color.g}, ${color.b})`,
                    border: `2px outset rgb(${color.r}, ${color.g}, ${color.b})`,
                };
            };
        },
        datosFiltrados() {
            return this.moves.filter((item) =>
                item.name.toLowerCase().includes(this.filtro.toLowerCase())
            );
        },
    },
    mounted() {
        this.getPokemonAbilities();
        this.getPokemonMoves();
        this.getPokemonWeakness(this.pokemon);
        this.getPokemonChain();
    },
    watch: {
        pokemon: function() {
            //Vacias la propiedad abilities y la recargas cada vez que se actualiza el pokemon
            this.abilities = [];
            this.getPokemonAbilities();
            this.moves = [];
            this.getPokemonMoves();
            this.weaknesses = [];
            this.resistances = [];
            this.immunities = [];
            this.doubleWeaknesses = [];
            this.doubleResistances = [];
            this.getPokemonWeakness(this.pokemon);
            this.evolutions = [];
            this.getPokemonChain();
        }
    }
    
}



</script>




<template>
    {{ mensaje() }}
    <div class="tab">
        <div id="container">
            <div class="row mb-3">
                    <div class="col-12 col-md-5" id="pkmPrincipal">
                        <div class="card shadow-sm mb-4 d-flex justify-content-center text-center">
                            <h4 class=" fw-bold" id="pkmName">
                                {{ this.formatter(pokemon.name)}} #{{ pokemon.id }}
                            </h4>

                            <!-- probar a hacer el src con computed -->
                            <div>
                                <img class=" w-100 mb-3" id="pkmSprite" v-bind:src="sprite" >
                            </div>
                            
                            <div class="d-flex justify-content-center mb-5" id="pkmTypes">
                                <img v-for="pkmType in pokemon.types" :src="`/types/${pkmType.type.name}.png`"  style="width: 3em; margin: 0.5em;" alt="">
                            </div>
                            <div class="row">
                                <table class="col tableStats">
                                    <tr>
                                        <th>&nbsp</th>
                                        <th class="text-center fs-5">Base</th>
                                        <th></th>
                                    </tr>
                                    <tr>
                                        <td class="text-end fw-bold">PS</td>
                                        <td class="text-center fw-bold">{{ pokemon.stats[0].base_stat }}</td>
                                        <td>
                                            <div :style="statBaseStyle(pokemon.stats[0].base_stat)"></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-end fw-bold">Attack</td>
                                        <td class="text-center fw-bold">{{ pokemon.stats[1].base_stat }}</td>
                                        <td>
                                            <div :style="statBaseStyle(pokemon.stats[1].base_stat)"></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-end fw-bold">Defense</td>
                                        <td class="text-center fw-bold">{{ pokemon.stats[2].base_stat }}</td>
                                        <td>
                                            <div :style="statBaseStyle(pokemon.stats[2].base_stat)"></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-end fw-bold">Spa. Atk</td>
                                        <td class="text-center fw-bold">{{ pokemon.stats[3].base_stat }}</td>
                                        <td>
                                            <div :style="statBaseStyle(pokemon.stats[3].base_stat)"></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-end fw-bold">Spa. Def</td>
                                        <td class="text-center fw-bold">{{ pokemon.stats[4].base_stat }}</td>
                                        <td>
                                            <div :style="statBaseStyle(pokemon.stats[4].base_stat)"></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-end fw-bold">Speed</td>
                                        <td class="text-center fw-bold">{{ pokemon.stats[5].base_stat }}</td>
                                        <td>
                                            <div :style="statBaseStyle(pokemon.stats[5 ].base_stat)"></div>
                                        </td>
                                    </tr>
                                </table>
                            </div>                    
                        </div>
                        
                    </div>
        
                    <div class="col-12 col-md-7" id="pkmDescription">
                        <div class="card shadow-sm mb-4" id="abilities">
                            <!-- Habilidades -->
                            <h5>Abilities:</h5>
                            <div class="">
                                <div v-for="(ability, index) in abilities" :key="index">
                                    <h5>
                                        <!-- Aquí un emit -->
                                        <a class="button five" href="#" @click="nuevaBusqueda('ability', ability.name)" >
                                            {{ this.formatter(ability.name) }}
                                        </a>
                                    </h5>
                                    <p>{{ ability.description }}</p>
                                </div>
                            </div>
                            <hr>
                            <!-- Cadena Evolutiva -->
                            <h5 class="mb-4">Cadena Evolutiva</h5>
                            <div class="">
                                <div class="row">
                                    <div class="col text-center align-middle" v-for="(element, index) in  evolutions" :key="index" style="height: 10em;">
                                        <h5>
                                            <a class="button five" href="#" @click="nuevaBusqueda('pokemon', element.name)" >
                                                {{this.formatter(element.name)}}
                                            </a>
                                        </h5>
                                        
                                        <img class="h-50" style=";" :src="`${element['sprites']['versions']['generation-v']['black-white']['animated']['front_default'] || element['sprites']['versions']['generation-v']['black-white']['front_default'] || element['sprites']['front_default']}`" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Debilidades -->
                        <div class="text-center">
                            <table class="card shadow-sm mb-4 w-100">
                                <h4 class="fw-bold mb-3">WEAKNESSES / RESISTANCES</h4>
                                <tr class="trTypes">
                                    <th class="text-center">X4</th>
                                    <td class="text-center w-100">
                                        <div class="d-flex justify-content-center">
                                            <img v-for="(type, index) in  doubleWeaknesses" :key="index" :src="`/types/${type}.png`" style="width: 3em;" alt="">
                                        </div>
                                    </td>
                                </tr>
                                <tr class="trTypes">
                                    <th class="text-center">X2</th>
                                    <td class="text-center w-100">
                                        <div class="d-flex justify-content-center">
                                            <img v-for="(type, index) in weaknesses" :key="index" :src="`/types/${type}.png`" alt="" style="width: 3em;">
                                        </div>
                                    </td>
                                </tr>
                                <tr class="trTypes">
                                    <th class="text-center">X1</th>
                                    <td class="text-center w-100">
                                        <div class="d-flex justify-content-center">
                                            <img v-for="(type, index) in neutral" :key="index" :src="`/types/${type}.png`" alt="" style="width: 3em;">
                                        </div>
                                        
                                    </td>
                                </tr>
                                <tr class="trTypes">
                                    <th class="text-center">X0.5</th>
                                    <td class="text-center  w-100">
                                        <div class="d-flex justify-content-center">
                                            <img style="width: 3em;" v-for="(type, index) in resistances" :key="index" :src="`/types/${type}.png`" alt="">
                                        </div>
                                    </td>
                                </tr>
                                <tr class="trTypes">
                                    <th class="text-center">X0.25</th>
                                    <td class="text-center w-100">
                                        <div class="d-flex justify-content-center">
                                            <img v-for="(type, index) in doubleResistances" :key="index" :src="`/types/${type}.png`" style="width: 3em;" alt="">
                                        </div>
                                    </td>
                                </tr>
                                <tr class="trTypes">
                                    <th class="text-center">X0</th>
                                    <td class="text-center w-100">
                                        <div class="d-flex justify-content-center">
                                            <img v-for="(type, index) in immunities" :key="index" :src="`/types/${type}.png`" style="width: 3em;" alt="">
                                        </div>
                                        
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
            </div>

            <div class="card shadow-sm" style="height: 550px;">
                <div class="card-body">
                    <input class="form-control mb-3 shadow-sm" type="text" v-model="filtro" placeholder="Search here for a move.">
                    <div class="overflow-auto" style="height: 400px;">
                        <table class="table text-center w-100" id="myTable">
                            <thead>
                                <tr>
                                    <th>Type</th>
                                    <th class="text-start">Name</th>
                                    <th>Category</th>
                                    <th>Power</th>
                                    <th>Accuracy</th>
                                    <th>PP</th>
                                    <th class="text-start">Description</th>
                                </tr>
                            </thead>
                            <tbody id="moveDescription" class="tbodyMoves">
                                <tr v-for="(move, index) in datosFiltrados" :key="index" class="trListado overflow-hidden">
                                    <td class="text-center">
                                        <img :src="`/types/${move.type}.png`" style="width: 2.7em;" alt="">
                                    </td>
                                    <td class="text-start">
                                        <a class="button five" href="#" @click="nuevaBusqueda('move', move.name)">
                                            {{ this.formatter(move.name) }}
                                        </a>
                                    </td>
                                    <td class="text-center">
                                        <img :src="`/categories/${move.category}.png`" style="width: 2.7em;" alt="">
                                    </td>
                                    <td class="text-center">
                                        {{ move.power || "-"}}
                                    </td>
                                    <td class="text-center">
                                        {{ move.accuracy || "-"}}
                                    </td>
                                    <td  class="text-center">
                                        {{ move.pp }}
                                    </td>
                                    <td>
                                        {{ move.description }}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>