<template>
  <footer class="footer">
    <div class="footer__amount-container">
      <span class="footer__amount-span">
         Σ
       </span>
       <input class="footer__amount-input" type="text" v-model="getCountersTotal" disabled>
    </div>
    <div class="footer__create-container">
      <button class="footer__create-btn" @click="toggleModalActiveState" :disabled="counters.length >= 20">
        <span>Crear nuevo contador</span>
      </button>
    </div>
  </footer>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  data: () => {
    return {
    }
  },
  computed: {
    ...mapState({
      counters: state => state.counters
    }),
    ...mapGetters([
      'getCountersTotal'
    ])
  },
  methods: {
    ...mapMutations({
      toggleModalActiveState: 'toggleModalActiveState'
    })
  }
}
</script>

<style>
.footer {
  width: 100vw;
  height: 60px;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: darkslateblue;
  display: flex;
  padding: 0 25px;
}

.footer__amount-container {
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.footer__amount-span {
  font-weight: 600;
  color: whitesmoke;
  font-size: 1.5rem;
}

.footer__amount-input {
  margin: 0 15px;
  width: 40px;
  border: none;
  border-radius: 5px;
  height: 25px;
  background-color: whitesmoke;
}

.footer__create-container {
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer__create-btn {
  border-radius: 5px;
  box-shadow: none;
  border: none;
  height: 25px;
  margin: 0 10px;
  background-color: seagreen;
  color: whitesmoke;
}

.footer__create-btn:hover {
  cursor: pointer;
  background-color: whitesmoke;
  color: #1e1e1e;
}

.footer__create-btn:disabled {
  background-color: rgba(46,139,87,.2);;
  color: whitesmoke;
}

.footer__create-btn:disabled:hover {
  cursor: auto;
  background-color: rgba(46,139,87,.2);;
  color: whitesmoke;
}
</style>