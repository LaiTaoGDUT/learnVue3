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
import { reactive, toRefs, watch, onMounted } from 'vue';

export default {
  // use reactive
  setup() {
    const event = reactive({
      capacity: 3,
      attending: ['tim', 'Bob', 'Joe'],
    });
    watch(event, () => {
      console.log('something changed!');
    });
    onMounted(() => {
      event.attending[0] = 'Jack';
    });
    return { ...toRefs(event) };
  }
}
</script>

<style>

</style>