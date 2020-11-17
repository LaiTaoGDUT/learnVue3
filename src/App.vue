<template>
  <setup-with-ref></setup-with-ref>
  <!-- <setup-with-ref2></setup-with-ref2> -->
  <!-- <setup-with-watch-effect></setup-with-watch-effect> -->
  <setup-with-reactive></setup-with-reactive>
</template>

<script>
import SetupWithRef from './components/SetupWithRef.vue';
// import SetupWithRef2 from './components/SetupWithRef2.vue';
import SetupWithReactive from './components/SetupWithReactive.vue';
// import SetupWithWatchEffect from './components/SetupWithWatchEffect.vue';

export default {
  name: 'App',
  components: {
    SetupWithRef,
    // SetupWithRef2,
    SetupWithReactive,
    // SetupWithWatchEffect
  },
  data() {
    return {
      title: 'Oh!'
    }
  },
  
  methods: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
