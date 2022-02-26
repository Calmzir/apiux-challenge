<template>
  <header class="header">
     <div class="header__filter-box">
       <select v-model="typeFilter" name="filterSelect" id="counterFilter" class="header__filter-select">
         <option value="0">-- Sin filtro --</option>
         <option value="1">Nombre ascendente</option>
         <option value="2">Nombre descendente</option>
         <option value="3">Valor ascendente</option>
         <option value="4">Valor descendente</option>
       </select>
     </div>
     <div class="header__search-box">
       <input class="header__search-input" type="text" placeholder="Buscar por nombre" v-model="searchFilter">
     </div>
     <div class="header__limit-filter">
       <span class="limit-filter__span">
         ≥
       </span>
       <input class="limit-filter__input" type="number" min="0" max="20" v-model="minQtyFilter">
       <span class="limit-filter__span">
         ≤
       </span>
       <input class="limit-filter__input" type="number" min="0" max="20" v-model="maxQtyFilter">
     </div>
     <div class="header__clean">
       <button class="header__clean-button" @click="cleanFilters">
         Limpiar Filtros
       </button>
     </div>
  </header>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data: () => {
    return {
      minQtyFilter: null,
      maxQtyFilter: null,
      typeFilter: 0,
      searchFilter: ''
    }
  },
  methods: {
    ...mapMutations({
      setMinQtyFilter: 'setMinQtyFilter',
      setMaxQtyFilter: 'setMaxQtyFilter',
      setTypeFilter: 'setTypeFilter',
      setSearchFilter: 'setSearchFilter'
    }),
    cleanFilters() {
      this.typeFilter =  0
      this.minQtyFilter = null
      this.maxQtyFilter = null
      this.searchFilter =  ''
    }
  },
  mounted() {
    this.typeFilter = sessionStorage.getItem('filterType') || 0,
    this.minQtyFilter = sessionStorage.getItem('minQtyFilter') ||  null,
    this.maxQtyFilter = sessionStorage.getItem('maxQtyFilter') || null,
    this.searchFilter = sessionStorage.getItem('searchFilter') || ''
  },
  watch: {
    minQtyFilter: function (newValue) {
      this.setMinQtyFilter(newValue)
    },
    maxQtyFilter: function (newValue) {
      this.setMaxQtyFilter(newValue)
    },
    typeFilter: function (newValue) {
      this.setTypeFilter(newValue)
    },
    searchFilter: function (newValue) {
      this.setSearchFilter(newValue)
    }
  }
}
</script>

<style>
.header {
  width: 100vw;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: darkslateblue;
  display: flex;
  padding: 0 25px;
}

.header__filter-box {
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
}

.header__search-box {
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
}

.header__search-input {
  margin: 0 15px;
  width: 300px;
  border: none;
  border-radius: 5px;
  height: 25px;
  background-color: whitesmoke;
}

.header__filter-select {
  border: none;
  border-radius: 5px;
  height: 25px;
}

.header__filter-select:hover {
  cursor: pointer;
}

.header__limit-filter {
  width: 39%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.limit-filter__span {
  font-weight: 600;
  color: whitesmoke;
  font-size: 1.5rem;
}

.limit-filter__input {
  margin: 0 15px;
  width: 40px;
  border: none;
  border-radius: 5px;
  height: 25px;
  background-color: whitesmoke;
}

.header__clean {
  width: 10%;
  display: flex;
  align-items: center;
  padding: 0 5px;
}

.header__clean-button {
  border-radius: 5px;
  border: none;
  width: 80px;
}

.header__clean-button:hover {
  background-color: tomato;
  color: whitesmoke;
}
</style>