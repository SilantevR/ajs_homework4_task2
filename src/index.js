export default function sort(array) {
  return array.sort((a, b) => {
    return b.health - a.health;
  });
}
