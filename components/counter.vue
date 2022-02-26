<template>
  <div :class="['counter']">
    <div class="counter__title-box">
      <p class="counter__title">{{item.title}}</p>
    </div>
    <div class="counter__control-box">
      <button class="counter__control-btn counter__control-substrac" @click="decrease(item)" :disabled="item.qty <= 0">
        <span>-</span>
      </button>
      <input class="counter__input" type="text" v-model="item.qty" disabled>
      <button class="counter__control-btn counter__control-add" @click="increment(item)" :disabled="item.qty >= 20">
        <span>+</span>
      </button>
    </div>
    <div class="counter__delete">
      <button class="delete__button" @click="deleteCounter(item)">
        <span class="delete__button-span">X</span>
      </button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: {
    item: {
      default: () => {
        return {}
      },
      type: Object
    },
  },
  data: () => {
    return {
    }
  },
  methods: {
    ...mapMutations({
      increment: 'increment',
      decrease: 'decrease',
      deleteCounter: 'deleteCounter'
    })
  }
}
</script>

<style>
.counter {
  transition: .5s;
  width: calc(100% - 50px);
  height: 50px;
  margin: 25px 0;
  background-color: darkslategrey;
  border-radius: 5px;
  display: flex;
  padding: 0 25px;
}

.counter__title-box {
  height: 100%;
  width: 50%;
  display: inline-block;
}

.counter__title {
  color: whitesmoke;
}

.counter__control-box {
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.counter__control-btn {
  border-radius: 5px;
  box-shadow: none;
  border: none;
  padding: 0;
}

.counter__control-btn span{
  font-size: 20px;
  padding: 5px;
}

.counter__control-substrac {
  padding: 0 2px;
  color: tomato;
}

.counter__control-add {
  padding: 0 2px;
  color: seagreen;
}

.counter__control-substrac:hover {
  background-color: tomato;
  color: whitesmoke;
}

.counter__control-substrac:hover {
  background-color: rgba(255,99,71,.2);
  color: whitesmoke;
}

.counter__control-add:hover {
  background-color: seagreen;
  color: whitesmoke;
}

.counter__control-add:disabled:hover {
  background-color: rgba(46,139,87,.2);
  color: whitesmoke;
}

.counter__control-substrac span {
  padding: 0 6px;
}

.counter__input {
  margin: 0 15px;
  width: 40px;
  border: none;
  border-radius: 5px;
  height: 25px;
  background-color: whitesmoke;
}

.counter__delete {
  width: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.delete__button {
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  background-color: tomato;
  color: whitesmoke;
}

.delete__button:hover {
  color: tomato;
  background-color: whitesmoke;
}
</style>