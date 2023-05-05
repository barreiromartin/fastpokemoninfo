<script>
import Pokemon from './components/Pokemon.vue';
import Move from './components/Move.vue';
import Ability from './components/Ability.vue';
import ClearTab from './components/ClearTab.vue';
import { computed } from 'vue';
import { utilsMixins } from '/mixins/utils.js';


export default {
  mixins: [utilsMixins],
  data() {
    return {
      selectedOption: 'pokemon',
      searchTerm: 'gliscor',
      searchResults: [],
      tabSelected: 'ClearTab',
      
    };
  },
  methods: {
    async search() {
      const endpoint = `https://pokeapi.co/api/v2/${this.selectedOption}/${this.formatSearch(this.searchTerm)}`;
      //const endpoint = `/public/pokemon.json`;
      const response = await fetch(endpoint);
      const data = await response.json();
      this.searchResults = data;
      this.tabSelected = this.selectedOption;
    },

    newSearchTerm(option, subject){
      this.selectedOption = option;
      this.searchTerm = this.formatSearch(subject);
      this.search()
    }
  },
  components: {
    Pokemon,
    Ability,
    Move,
    ClearTab,
  },
  provide() {
    return {
      dataJson: computed(() => this.searchResults),
    };
  },

}
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <form @submit.prevent="search" class="mb-4 ">
          <div class="input-group w-auto shadow-sm">
            <select class="form-select fw-bold" v-model="selectedOption">
              <option value="pokemon">Pokemon</option>
              <option value="ability">Ability</option>
              <option value="move">Move</option>
            </select>
            <input class="form-control" type="text" v-model="searchTerm">
            <button class="btn btn-secondary">Search</button>
          </div>
        </form>
        
        <component :is="tabSelected" @nuevaBusqueda="newSearchTerm"></component>
      </div>
    </div>
    

  </div>
</template>

<style>
.form-select{
  max-width: 10em;
}
</style>