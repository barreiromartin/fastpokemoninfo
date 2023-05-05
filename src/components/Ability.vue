<script>
import { utilsMixins } from '/mixins/utils.js';

export default{
    mixins: [utilsMixins],
    inject: ['dataJson'],
    data(){
        return{
            ability: this.dataJson,
            pokemons: [],
            filtro: "",
        }
    },
    methods:{
      mensaje(){
          console.log(this.ability);
      },

      getPokemons() {            
          const promises = this.ability.pokemon.map(pokemon => {
          return fetch(pokemon.pokemon.url)
            .then(response => {
              if (response.ok) {
                return response.json();                    
              }
              return Promise.reject(response);
            })
            .then(data => {
              let spriteListado = data.sprites.versions["generation-v"]["black-white"].animated.front_default || data.sprites.versions["generation-v"]["black-white"].front_default || data.sprites.front_default;

              return { name: data.name, types: data.types, sprite: spriteListado };
            });
          });

          Promise.all(promises).then(pokemons => {
            this.pokemons = pokemons.sort((a, b) => a.id - b.id);
          });
        },

        nuevaBusqueda(option, subject){
            this.$emit("nuevaBusqueda", option, subject);
        },
        
        datosFiltrados() {
            return this.pokemons.filter((item) =>
                item.name.toLowerCase().includes(this.filtro.toLowerCase())
            );
        },
    },
    mounted() {
      this.getPokemons();
    },
    watch: {
      ability: function(){
        this.pokemons = [];
        this.getPokemons();
      }
    }
    
}



</script>




<template>
  <!-- {{ mensaje() }} -->
 <div id="contenedor">
    <div class="row">
      <div class="col-12 col-lg-6">
        <div class="card shadow-sm mb-3">
          <div class="card-body">
              <h4 id="abilityName">
                {{ this.formatter(ability.name) }}
              </h4>
              <p id="abilityDescription">
                {{ ability.effect_entries.find(entry => entry.language.name === 'en').effect }}
              </p>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-6">
        <div class="card shadow">
          <input class="form-control mb-3 shadow-sm"  type="text" v-model="filtro" placeholder="Search here for a pokemon.">
          <div class="overflow-auto" style="height: 600px">
            <table class="table" >
              <tbody id="pokemonList">
                <tr v-for="(pokemon, index) in datosFiltrados()" :key="index" class="align-middle">
                  <td class="text-center">
                    <img class="trListado align-middle " style="margin: 0; height: 3em;" id="pkmSprite" :src="pokemon.sprite" >
                  </td>
                  <td class="text-start align-middle fs-6 ">
                    <a href="#" @click="nuevaBusqueda('pokemon', pokemon.name)">
                      {{ this.formatter(pokemon.name) }}
                    </a>
                  </td>
                  <td class="text-center align-middle">
                    <img v-for="(type, index) in pokemon.types" :key="index" :src="`/types/${type.type.name}.png`" style="width: 2.7em" alt="">
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