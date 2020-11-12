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
import useEventSpace from '../use/useEventSpace';
import useMapping from '../use/useMapping';

export default {

  // use ref
  setup() {
    // return { ...useEventSpace(), ...useMapping() };
    const { capacity, increaseCapacity, attending, spacesLeft } = useEventSpace();
    const { mapData } = useMapping();
    // do something

    return { capacity, increaseCapacity, attending, spacesLeft, mapData };
  }
}
</script>

<style>

</style>