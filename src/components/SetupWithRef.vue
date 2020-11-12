<template>
  <div>
    <p>Space Left: {{ spacesLeft }} out of {{ capacity }}</p>
    <p>Capacity: {{ capacity }}</p>
    <button @click="increaseCapacity">Increase Capacity</button>
    <h2>Attending</h2>
    <ul>
      <li v-for="(name, index) in attending" :key="index">
        {{ name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {

  // use ref
  setup() {
    // capacity 是一个对象，而非一个原始值，通过value属性访问值
    const capacity = ref(3);
    const attending = ref(['tim', 'Bob', 'Joe']);
    const spacesLeft = computed(() => {
      return capacity.value - attending.value.length;
    });
    function increaseCapacity() {
      capacity.value += 1;
    }
    return { capacity, increaseCapacity, attending, spacesLeft }
  }
}
</script>

<style>

</style>