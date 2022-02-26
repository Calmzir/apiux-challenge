<template>
  <div :class="['modal__container', {'active':createModalActive}]">
    <div class="modal__card">
      <span class="modal__input-label">Titulo del Contador: </span>
      <div class="counter__title-box">
        <input v-model="counter.title" class="counter__title-input" maxlength="20"/>
      </div>
      <div class="counter__control-box">
        <button class="modal-counter__control-btn modal-counter__control-btn--create" @click="confirmCreate" :disabled="counter.title.length <= 0">
          <span>Crear contador</span>
        </button>
        <button class="modal-counter__control-btn modal-counter__control-btn--cancel" @click="cancelCreate">
          <span>Cancelar</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  data: () => {
    return {
      counter: {
        title: '',
        qty: 0,
        id: null
      }
    }
  },
  computed: {
    ...mapState({
      createModalActive: state => state.createModalActive
    })
  },
  methods: {
    ...mapMutations({
      toggleModalActiveState: 'toggleModalActiveState',
      createCounter: 'createCounter'
    }),
    confirmCreate() {
      this.createCounter(this.counter)
      this.toggleModalActiveState()
      this.clearCounter()
    },
    cancelCreate() {
      this.toggleModalActiveState()
      this.clearCounter()
    },
    clearCounter() {
      this.counter = {
        title: '',
        qty: 0,
        id: null
      }
    }
  }
}
</script>

<style>
.modal__container {
  transition: .5s;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, .5);
  top: 0;
  left: 0;
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 99;
}

.modal__container.active {
  display: flex;
}

.modal__card {
  width: calc(100% - 100px);
  height: 50px;
  margin: 25px 0;
  background-color: darkslategrey;
  border-radius: 5px;
  display: flex;
  padding: 0 25px;
  align-items: center;
}

.counter__title-box {
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
}

.modal__input-label {
  color: whitesmoke;
}

.counter__title-input {
  border: none;
  border-radius: 5px;
  height: 25px;
  background-color: whitesmoke;
}

.counter__control-box {
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.modal-counter__control-btn {
  border-radius: 5px;
  box-shadow: none;
  border: none;
  height: 25px;
  margin: 0 10px;
}

.modal-counter__control-btn:hover {
  cursor: pointer;
  background-color: whitesmoke;
  color: #1e1e1e;
}

.modal-counter__control-btn--create {
  background-color: seagreen;
  color: whitesmoke;
}

.modal-counter__control-btn--create:disabled {
  background-color: rgba(46,139,87,.2);;
  color: whitesmoke;
}

.modal-counter__control-btn--create:disabled:hover {
  cursor: auto;
  background-color: rgba(46,139,87,.2);;
  color: whitesmoke;
}

.modal-counter__control-btn--cancel {
  background-color: tomato;
  color: whitesmoke;

}
</style>