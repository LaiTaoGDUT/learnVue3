import { ref, computed } from 'vue';

export default function useEventSpace() {
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