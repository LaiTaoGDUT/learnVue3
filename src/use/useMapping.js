import { reactive } from 'vue';

export default function useMapping() {
  const mapData = reactive([['a', 97], ['b', 98]]);
  return { mapData };
}