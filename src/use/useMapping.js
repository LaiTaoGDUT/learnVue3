import { ref } from 'vue';

export default function useMapping() {
  const mapData = ref(new Map([['a', 97], ['b', 98]]));
  return { mapData };
}