<script>
import { utilsMixins } from '/mixins/utils.js';

export default{
    mixins: [utilsMixins],
    inject: ['dataJson'],
    data(){
        return{
            move: this.dataJson,
            pokemons: [],
            filtro: "",
        }
    },
    methods:{
        mensaje(){
            console.log(this.move);
        },

        getPokemons() {            
          const promises = this.move.learned_by_pokemon.map(pokemon => {
          return fetch(pokemon.url)
            .then(response => {
              if (response.ok) {
                return response.json();                    
              }
              return Promise.reject(response);
            })
            .then(data => {
              let spriteListado = data.sprites.versions["generation-v"]["black-white"].animated.front_default || data.sprites.versions["generation-v"]["black-white"].front_default || data.sprites.front_default;;

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
      move: function(){
        this.pokemons = [];
        this.getPokemons();
      }
    }
    
}



</script>




<template>
  <div id="contenedor">
    <div class="row">
      <div class="col-12 col-md-4">
        <div class="card shadow-sm mb-4">
          <div class="card-body">
            <h3 id="moveName" class="d-inline text-center fw-bold align-middle">
              {{ this.formatter(move.name) }}
            </h3>
            <div>{{ move.flavor_text_entries[0].flavor_text }}</div>
          </div>
          <table class="table table-striped">
            <tbody class="text-center">
              <tr>
                <td class="fw-bold">Type</td>
                <td>
                  <img :src="`/types/${move.type.name}.png`" style="width: 2.7em;" alt="">
                </td>
              </tr>
              <tr>
                <td class="fw-bold">Category</td>
                <td>
                  <img :src="`/categories/${move.damage_class.name}.png`" style="width: 2.7em;" alt="">
                </td>
              </tr>
              <tr>
                <td class="fw-bold">Power</td>
                <td id="movePower">
                  {{ move.power }}
                </td>
              </tr>
              <tr>
                <td class="fw-bold">Accuracy</td>
                <td id="moveAccuracy">
                  {{ move.accuracy }}
                </td>
              </tr>
              <tr>
                <td class="fw-bold">PP</td>
                <td id="movePp">
                  {{ move.pp }}
                </td>
              </tr>
              <tr id="trPriority">
                <td class="fw-bold">Priority</td>
                <td id="movePriority">{{ move.priority }}</td>
              </tr>
              <tr id="trCritical" hidden>
                <td>Critical</td>
                <td id="moveCritical">0</td>
              </tr>
              <tr id="trPriority" hidden>
                <td>Priority</td>
                <td id="movePriority">0</td>
              </tr>
              <tr id="trAilment" hidden>
                <td>State Changes</td>
                <td id="move">0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="col-12 col-md-8 ">
        <div class="card shadow mb-4">
          <div class="card-body">
            <h5>Description:</h5>
            <p id="moveDescription">
              {{ move.effect_entries.find(entry => entry.language.name === 'en').effect }}
            </p>
          </div>
        </div>

        <div class="card shadow ">
          <input class="form-control mb-3 shadow-sm" type="text" v-model="filtro" placeholder="Search here for a pokemon.">
          <div class="overflow-auto" style="height: 600px;">
            <table class="table overflow-auto"  >
              <tbody id="pokemonList">
                <tr v-for="(pokemon, index) in datosFiltrados()" :key="index">
                  <td class="text-center">
                    <img class=" align-middle " style="margin: 0; height: 4em;" id="pkmSprite" :src="pokemon.sprite" >
                  </td>
                  <td class="text-start align-middle fs-6 ">
                    <a class="button five" href="#" @click="nuevaBusqueda('pokemon', pokemon.name)">
                      {{ this.formatter(pokemon.name) }}
                    </a>
                  </td>
                  <td class="text-center align-middle">
                    <img v-for="(type, index) in pokemon.types" :key="index" :src="`/types/${type.type.name}.png`" style="width: 3em;" alt="">
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