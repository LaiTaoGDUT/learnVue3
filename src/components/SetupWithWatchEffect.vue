<template>
  <div>
    <input type="text" v-model.number="addend"> + <input type="text" v-model.number="summand"> = {{ sum }}
  </div>
</template>

<script>
import { ref } from 'vue';
import { watch } from 'vue';
// import { watchEffect } from 'vue';

export default {

  // use ref
  setup() {
    // capacity 是一个对象，而非一个原始值，通过value属性访问值
    const addend = ref(3);
    const summand = ref(4);
    const sum = ref(12);
    watch([addend, summand], ([newFirst, newSecond], [oldFirst, oldSecond]) => {
      console.log('watch!', oldFirst, oldSecond);
      sum.value = Number(newFirst) + Number(newSecond);
    })
    // watchEffect(() => {
    //   console.log('watch effect!');
    //   sum.value = Number(addend.value) + Number(summand.value);
    // })
    return { addend, summand, sum }
  }
}
</script>

<style>

</style>