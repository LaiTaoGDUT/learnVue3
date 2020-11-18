import { ref, computed } from 'vue';

export default function useEventSpace() {
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