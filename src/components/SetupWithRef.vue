<template>
  <div>
    <p>Capacity: {{ capacity }}</p>
    <h2>Attending</h2>
    <ul>
      <li v-for="(name, index) in attending" :key="index">
        {{ name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, watch, onMounted } from 'vue';
export default {

  // use ref
  setup() {
    const capacity = ref(3);
    const attending = ref(['tim', 'Bob', 'Joe']);
    watch(capacity, () => {
      console.log('capacity changed!');
    });
    watch(attending, () => {
      console.log('attending changed!');
    });
    onMounted(() => {
      attending.value[0] = 'Jack';
    });
    return { capacity, attending };
  }
}
</script>

<style>

</style>