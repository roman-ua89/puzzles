
Object.defineProperty(Array.prototype, 'findUnique', {
  value: function () {
    const uniqueValuesArr = [];

    this.forEach(value => {
      const repeatArr = this.filter(filterVal => filterVal === value);
      if (repeatArr.length === 1) {
        uniqueValuesArr.push(value);
      }
    });

    return uniqueValuesArr;
  }
});

Array.prototype.findUnique = function() {
  console.log(this)
}

const result = [10, 5, 10, 0, 6, 6, 7, 2, 9, 9].findUnique(); // [5, 0, 7, 2]
console.log('res', result);
