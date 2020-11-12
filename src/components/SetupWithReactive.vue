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
import { computed, reactive, toRefs } from 'vue';

export default {
  // use reactive
  setup() {
    const event = reactive({
      capacity: 3,
      attending: ['tim', 'Bob', 'Joe'],
      spacesLeft: computed(() => {
        return event.capacity - event.attending.length;
      })
    });
    function increaseCapacity() {
      event.capacity += 1;
    }
    return { ...toRefs(event), increaseCapacity };
  }
}
</script>

<style>

</style>