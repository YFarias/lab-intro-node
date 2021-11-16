class SortedList {
  constructor() {
    this.items = []
    this.length = 0
  }

  add(item) {
      this.items.push(item);
      this.length++;
      this.items.sort((a, b) => (a - b));
    
  }

  get (ind, length) {
    return this.items[ind-1];
  
  }
  max() {
    return this.items.sort((a, b) => (a - b))[this.length - 1];
  }

  min() {
    return this.items.sort((a, b) => (a - b))[0];
  }

  sum() {
    if (this.length !== 0) {
      return ((this.items.reduce((total, acc) => total + acc)) / this.length)
    }
  }

  avg() {
    if (this.length !== 0) {
      return this.items.reduce((total, acc) => total + acc);
    }
  }
}

module.exports = SortedList;
