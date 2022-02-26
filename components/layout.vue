<template>
  <section class="layout">
    <Header/>
    <div class="counter__container">
      <div v-for="(item, key) in getFilteredList" :key="key">
        <Counter :item="item"/>
      </div>
    </div>
    <Footer/>
    <Create-Modal/>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data: () => {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'getFilteredList'
    ])
  }
}
</script>

<style>
body {
  margin: 0;
}

.layout {
  width: calc(100vw - 50px);
  min-height: calc(100vh - 170px);
  position: relative;
  background-color: rgb(22, 22, 22);
  padding: 85px 25px;
}


</style>