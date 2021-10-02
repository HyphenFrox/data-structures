class MySet {
  #dataSet;
  constructor() {
    this.#dataSet = [];
  }

  add(data) {
    if (this.#dataSet.indexOf(data) === -1) {
      this.#dataSet.push(data);
      return true;
    }

    return false;
  }

  remove(data) {
    if (this.#dataSet.length === 0) {
      return false;
    }

    const indexOfData = this.#dataSet.indexOf(data);

    if (indexOfData !== -1) {
      this.#dataSet = this.#dataSet.splice(indexOfData, 1);
      return true;
    }

    return false;
  }

  has(data) {
    if (this.#dataSet.length === 0) return false;

    if (this.#dataSet.indexOf(data) !== -1) {
      return true;
    }

    return false;
  }

  clear() {
    this.#dataSet = [];
    return true;
  }

  size() {
    return this.#dataSet.length;
  }

  view() {
    return this.#dataSet;
  }

  union(otherSet) {
    const firstSet = this.#dataSet;
    const secondSet = otherSet.view();
    let unionSet = new MySet();

    firstSet.forEach((value) => {
      unionSet.add(value);
    });

    secondSet.forEach((value) => {
      unionSet.add(value);
    });

    return unionSet;
  }

  intersection(otherSet) {
    const firstSet = this.#dataSet;
    const secondSet = otherSet;
    let intersectionSet = new MySet();

    firstSet.forEach((value) => {
      if (secondSet.has(value)) {
        intersectionSet.add(value);
      }
    });

    return intersectionSet;
  }

  difference(otherSet) {
    const firstSet = this.#dataSet;
    const secondSet = otherSet;
    let differenceSet = new MySet();

    firstSet.forEach((value) => {
      if (!secondSet.has(value)) {
        differenceSet.add(value);
      }
    });

    return differenceSet;
  }

  isSubsetOf(otherSet) {
    return this.#dataSet.every((value) => {
      return otherSet.has(value);
    });
  }
}

export default MySet;
