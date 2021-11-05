Array.prototype.linearSearch = function (target) {
  if (!target || !this.length) return null;
  for (let index in this) {
    if (this[index] == target) {
      return index; //returns the index at which element is found
    }
  }
  return null; //returns null if element is not found in array
};

console.log([2, 3, 4, 5, 5, 6].linearSearch(4));