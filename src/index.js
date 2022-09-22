export default function sort(array) {
  return array.sort((a, b) => b.health - a.health);
}
